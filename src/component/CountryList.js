import React from "react";
import "../App.css";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../queries";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const CountryList = ({ onCountrySelect }) => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Countries List</h2>
      <div style={{ maxHeight: "700px", overflowY: "scroll" }}>
        <ListGroup>
          {data.countries.map((country) => (
            <ListGroup.Item key={country.code}>
              <div className="d-flex align-items-center gap-2">
                <div style={{ width: "20%" }}>
                  {country.name} ({country.emoji})
                </div>
                <div style={{ width: "100%" }}>
                  <Button
                    variant="primary"
                    onClick={() => onCountrySelect(country)}
                  >
                    Details
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default CountryList;
