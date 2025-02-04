import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./phonetic";
import "./Results.css";


export default function Results(props){
    if(props.results.length){
        return(  <div className="Results">
            <section>
            <h2>{props.results.word}</h2>
            {props.results.Phonetic.map(function(phonetic, index){
                return (
                    <div key={index}>
                        <Phonetic phonetic={phonetic} />
                    </div>
                );
            })}
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