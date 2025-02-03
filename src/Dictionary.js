import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
   
    function handleResponse(response){
        //only displaying one definition of the keyword
        console.log(response.data[0]);
    }
    function search(event){
        event.prevenDefault();
      
        let apiKey = "1b3cfb66ad014a3fo55df2e890f445t9";
        let apiUrl =`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        console.log(event.target.value);
    }
   
   
   

    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    );
}