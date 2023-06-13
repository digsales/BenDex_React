import React from "react";
import { Card } from "react-bootstrap";

const MeuCard = (props) => {
  // return <Card className="card border-dark mb-3">{props.children}</Card>;
  return (
    <Card
      border="success"
      style={{
        boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {props.children}
    </Card>
  );
};

export default MeuCard;
