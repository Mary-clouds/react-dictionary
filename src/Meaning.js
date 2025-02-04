import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    
    return(
        <div className="Meaning">
        <h3>{props.meaning.partOfspeech}</h3>
        {props.meaning.definition.map(function(definition, index)
        {
            return(
                <div key={index}>
                <div className="defintion">{definition.definition}</div>
                <div className="example">{definition.example}</div>
               
                <Synonyms synonyms={definition.synonyms}/>
            
                </div>
            );
        })}
        </div>
    
    );
}