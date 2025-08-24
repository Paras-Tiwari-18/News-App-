import { useLoaderData,useNavigate } from "react-router"
import { News_card } from "./News_card";
import '../../assets/style.css';
import { useState } from "react";
import Category_dropdown from "./category_dropdown";
import LanguageDropdown from "./language_dropdown";

export const Display_n=()=>{
    const loaded_data=useLoaderData();
    console.log(loaded_data);
    const navigate=useNavigate();
    const [query,setQuery]=useState("");
    const handleChange=(event)=>{
        event.preventDefault();
        if (query.trim()) {
            navigate(`/?q=${encodeURIComponent(query)}`);//👉 Used when building a URL to make sure it’s safe for the browser.It converts spaces and special characters into encoded form. 
    }
    
}
    const handelLoadMore=(event)=>{
        event.preventDefault();
        navigate(`/?q=${encodeURIComponent(query)}&page=${loaded_data.nextPage}`);
    }
    return(
        <>

        <div className="search-bar">
            <input type="text" placeholder="What would you like to search?" value={query} onChange={(event)=>setQuery(event.target.value)} 
        />
        <button className="button" onClick={handleChange}>Search</button>
        <Category_dropdown/>
        <LanguageDropdown/>
        </div>


        
         <ul className="main_container">
            {
                loaded_data.results.map((data)=>{
                    return(<li key={data.article_id}><News_card data={data}/></li>
                )})
            }
         </ul>
         <div className="load_more">
            <button onClick={handelLoadMore}>Load More News ..</button>
         </div>
        </>
    )
}
