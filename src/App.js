import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import CountryList from "./component/CountryList";
import CountryDetails from "./component/CountryDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h1>Country Explorer</h1>
              {selectedCountry ? (
                <div>
                  <Button variant="primary" className="mb-2" onClick={() => setSelectedCountry(null)}>Back</Button >
                  <CountryDetails country={selectedCountry} />
                </div>
              ) : (
                <CountryList onCountrySelect={setSelectedCountry} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </ApolloProvider>
  );
};

export default App;
