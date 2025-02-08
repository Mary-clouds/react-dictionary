import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Pictures from "./Pictures";
import {franc } from "franc-min";//Language detection library
import "./Dictionary.css";

//popup component for warning
function LanguageWarninPopup({message, onClose}){
    return(<div className="popup">
        <div className="popup-content">
        <p>{message}</p>
        <button onClick = {onClose}>Close</button>
    </div>
    </div>
    );
}

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [pictures, setPictures] = useState(null);
    let [error, setError] = useState(null);
    let [languageWarning, setlanguageWarning] = useState(null); //state forr language warning message

    //Function to detect the language of the word
    const isEnglishword =(word) => {
        if(word.length <4) return true;
        const lang = franc(word);//detect the language
        return lang === "eng"; //eng is the language code for english

    };
    
    //Function to search for the word
    const search =()=>{
        setError(null);
        setResults(null);
        setPictures(null);

       
        //API calls for dictionary and pexels images
      //Documentation: htpps://api.shecodes.io/dictionary/
        let apiKey = "1b3cfb66ad014a3fo55df2e890f445t9";
        let apiUrl =`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleInputResponse).catch(() =>{
            setError("please enter a valid english word");
           // setLoaded(true);
        });
    
        let pexelsApikey =" mCag2MwZIoZruK4rFSGni7VSL36HgU1veQT9Je8K6FxYOODKv7tdgXRM";
        let pexeldApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {Authorization: `${pexelsApikey}`};
        axios.get(pexeldApiUrl, { headers: headers}).then(handlePexelsResponse).catch(() =>{
            
            setError("An Error occurred while fetching image data.");
           
        });
    }


    const handleInputResponse =(response)=>{
       if(response.data && response.data.word){
             //only displaying one or the first definition of the keyword
        setResults(response.data);
        setError(null);
       }else{
        setError("Sorry, no defintions found for this word");
       
       }
       
    };

    
    //Handle form submission
    const handleSubmit=(event)=>{
        event.preventDefault();
         //check if the word is english
         if(!isEnglishword(keyword)){
           setlanguageWarning(null);
           search();//clear previous error message
        
        }else{
            setlanguageWarning("An Error occurred while fetching dictionary data.");
        } 
        
    };
  
    
    //Handle keyword input change
    const handleKeywordChange = (event) =>{
        setKeyword(event.target.value);
        setlanguageWarning(null); // hide warning if user start typing
    };

    //close the language warning popup
    const closeLanguageWarning=()=>{
        setlanguageWarning(null);
    };

    //Function to andle pexels API response
    const handlePexelsResponse =(response)=>{
        setPictures(response.data.photos);
    };


    

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
                    {languageWarning && (<LanguageWarninPopup
                        message={languageWarning}
                        onClose={closeLanguageWarning} />

                    )}
                     {error && <div className="error">{error}</div>} {/* displaying error message if no results*/}
                    <div className="hint">suggested words: wine, yoga, sunrise...</div>
                </section>  
                {results && <Results results={results}/>}
                {pictures && <Pictures photos={pictures}/>}
        </div>
    );
}