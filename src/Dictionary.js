import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Pictures from "./Pictures";
import franc  from "franc-min";//Language detection library
import "./Dictionary.css";


export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded]= useState(false);
    let [pictures, setPictures] = useState(null);


    function handleInputResponse(response){
       
        //only displaying one or the first definition of the keyword
        setResults(response.data);
        setLoaded(true);
    }

    function handlePexelsResponse(response){
        setPictures(response.data.photos);
    }

    function search(){ 
      //Documentation: htpps://api.shecodes.io/dictionary/
        let apiKey = "1b3cfb66ad014a3fo55df2e890f445t9";
        let apiUrl =`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleInputResponse);
    
        let pexelsApikey =" mCag2MwZIoZruK4rFSGni7VSL36HgU1veQT9Je8K6FxYOODKv7tdgXRM";
        let pexeldApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {Authorization: `${pexelsApikey}`};
        axios.get(pexeldApiUrl, { headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
        
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }

    if(loaded){
        return(
            <div className="Dictionary">
                <section>
                    <h1>
                        What English word do you want to look up?
                    </h1>
                    <form onSubmit={handleSubmit}> 
                    <input
                    type="search"
                    onChange={handleKeywordChange}
                    defaultValue={props.defaultKeyword}
                    />
                    </form>
                    <div className="hint">suggested words: wine, yoga, sunrise...</div>
                </section>
                <Results results={results}/>
                <Pictures photos={pictures}/>
            </div>
        );
    }else{
        load();
        return "Loading";
    }
   
   
}