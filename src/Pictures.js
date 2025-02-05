import React from "react";
import "./Pictures.css";

export default function Pictures(props){
   

    if (props.photos){
        return(
            <section className="pictures">
                <div className="row">
                    {props.photos.map(function(photo, index){
                        return(
                            <div className="col-4" key={index}>
                                <a href={photo.src.original} target="_blank" rel="noreferrer">
                                    <img
                                    src={photo.src.landscape}
                                    className="img-fluid"
                                    alt={photo.src.photographer}
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