import React from "react";
import { Card } from "react-bootstrap";

const MeuCard = (props) => {
  return <Card className="mb-3">{props.children}</Card>;
};

export default MeuCard;
