import React from "react";
import "./Pictures.css";

export default function Pictures(props){
    if (props.pictures){
        return(
            <section className="pictures">
                <div className="row">
                    {props.pictures.map(function(picture, index){
                        return(
                            <div className="col-4" key={index}>
                                <a href={picture.src.original} target="_blank" rel="noreferrer">
                                    <img
                                    src={picture.src.landscape}
                                    className="img-fluid"
                                    
                                     />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }else{
        return null;
    }
}