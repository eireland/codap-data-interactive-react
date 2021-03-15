import React from "react";
import { Card } from "../card/card";

import "./card-list.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.plugins.map((plugin, index) =>
        <Card key={index} plugin={plugin} />
      )}
    </div>
  )
}