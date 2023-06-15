import React from "react";
import { Card } from "react-bootstrap";

const MinhaArea = (props) => {
  return (
    <Card
      border="success"
      style={{
        boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s ease",
      }}
    >
      {props.children}
    </Card>
  );
};

export default MinhaArea;
