import React, { useState } from "react";
import {FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
    const [input, setInput] = useState("");
    const [searchList, setSearchList] = useState();
    const [listLoaded, setListLoaded] = useState(false);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39a603c7afmsh16537831fb0237fp1cd426jsn65962774609a',
            'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
        }
    };

    const handleChange = (value) => {
        setInput(value);
    }

    const keyHandler = (e) => {
        if(e.code === "Enter") {
            fetchData(input);
        }
    }


    const fetchData = (value) => {
        let queryString = new URLSearchParams(value).toString();
        const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${queryString}`;
        fetch(url, options)
            .then(response => response.json())
            .then((data) => {
                setSearchList(data['d']);
                if (!data['d']) {
                    console.log("The request failed");
                } else {
                    setListLoaded(true);
                    console.log(data['d']);
                }
            })
    }

    return(
        <div>
            <div className="input-wrapper">
                <FaSearch id="search-icon" />
                <input className="search-input" placeholder="Search" value={input} onChange={(e) => handleChange(e.target.value)} onKeyPress={(e) => keyHandler(e)} />
            </div>

            <div className="search-result-body">
                {listLoaded && searchList.map((item) => 
                    <Link
                        key={item.id}
                        to={`/recipe-item/${encodeURIComponent(item.Title)}`}
                        state={item}
                        className="recipe-link"
                        >
                        <div className="search-result-item">
                            <img src={item.Image} />
                            <p>{item.Title}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default SearchBar;