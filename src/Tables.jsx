import React from "react";
import Alcohol from "./Alcohol";
import Gamma from "./Gamma";

export default function Tables()
{
  return(<div className="tables">
    <h1>Calculated Data</h1>
    <h2>Flavanoids Data</h2>
    {<Alcohol />}
    <h2>Gamma Data</h2>
    {<Gamma />}
  </div>)
}