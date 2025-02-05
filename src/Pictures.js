import React from "react";
import "./Pictures.css";

export default function Pictures(props){
    if (props.photos){
        return(
            <section className="pictures">
                <div className="row">
                    {props.photos.map(function(photos, index){
                        return(
                            <div className="col-4" key={index}>
                                <a href={photos.src.original} target="_blank" rel="noreferrer">
                                    <img
                                    src={photos.src.landscape}
                                    className="img-fluid"
                                    alt={photos.src.photographer}
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