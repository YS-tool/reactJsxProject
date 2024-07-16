/*

1: display list
2: allow user type in input, filter displayed list, update result real time, no submit needed.
3: when there is no match, display message
*/

import { useEffect, useState } from "react"


export default function Interview1(){

    const fruits = [
        "a",
        "aa",
        "aac",
        "aad",
        "ea",
        "faa",
        "fab",
        "fac",
    ]
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);
    useEffect(()=>{
        setFiltered(fruits.filter((word)=>word.substring(0,search.length)==search))
    },[search]
    )

    return (
        <div>
            <input 
            type="text" 
            placeholder="search fruit name"
            value = {search}
            onChange={(e)=>setSearch(e.target.value)}
            ></input>
            {
                filtered.length==0 ? <h1>nothing to show</h1>:
                <ul>
                {
                    filtered.map(oneFruit=>
                        <li>{oneFruit}</li>
                    )
                }
                </ul>
            }

            <h2>
                searched value is {search}
            </h2>
        </div>
    )
}