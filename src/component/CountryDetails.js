import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CountryDetails = ({ country }) => {
  return (
    <div>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>{country.name}</Card.Title>
          <ListGroup>
            <ListGroup.Item>
              <strong>Capital:</strong> {country.capital}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Currency:</strong> {country.currency}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Languages:</strong>
              {country.languages.map((lang) => lang.name).join(", ")}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Emoji:</strong> {country.emoji}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountryDetails;
