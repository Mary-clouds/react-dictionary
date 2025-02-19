import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){

    return(
        <div className="Meaning">
        <h3>{props.meaning.partOfspeech}</h3>
        <div className="definition">{props.meaning.definition}</div>
        {props.meaning.example && (
            <div className="example">{props.meaning.example}</div>
        )}
        <Synonyms synonyms={props.meaning.synonyms}/>
        </div>
    
    );
  
}