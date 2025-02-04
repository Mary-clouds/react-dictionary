import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./phonetic";
import "./Results.css";


export default function Results(props){
    if(props.results.length){
        return(  <div className="Results">
            <section>
            <Phonetic props={props.results.phonetics} />
            </section>
            {props.results.meanings.map(function(meaning, index){
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                );
            })}
        </div>

        );
    }else{
        return null;
    }
}