import React, { useState, useEffect } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import WeatherCard from "./WeatherCard";
import {useHistory} from 'react-router-dom'

const CitySelector = () => {
  const [city, setCity] = useState("london");
  const [results, setResults] = useState(null);
   const history = useHistory()

  const onSearch = async () => {
    try {
      const response = await fetch(
        "http://localhost:3002/users/weather?city=" +
          city 
          
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data, "dataaa");
        setResults(data);
        console.log(results, "testttt");
      }
    } catch (error) {
      console.log("fetch was not possible");
    }
  };
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };
  const logout = () => {
    history.push("/")
  };
  useEffect(() => {
    onSearch();
  }, []);

  return (
    <>
      <Row>
        <Col xs={10}>
          <h1 className="main-title px-0">Enter the name of city here:</h1></Col>
        

        <Col className="mt-2"> <Button className="main-btn" onClick={logout}>
            logout
          </Button></Col>

      </Row>

      <Row>
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter city here"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyDown={onKeyDown}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button className="main-btn" onClick={onSearch}>
            Click to Check Weather
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className=" d-flex justify-content-center">
          {results && <WeatherCard results={results} />}
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
