import useDebounce from "./useDebounce"
import { useState } from "react"

/*
Create custome hook usedebounce that value update with a delay 100ms

const [value, setValue] = useState()
const debounceValue = useDebounce(value, 1000)

this setup ensure the value only update after 1000ms
*/

export default function Interview2(){

    const [text, setText] = useState("")
    const debounceText = useDebounce(text, 1000)

    return (
        <div>
            <h2>debounce hook test</h2>
            <input
                type="text"
                value={text}
                onChange = {(e)=>setText(e.target.value)}
                placeholder="type something"
            >
            </input>
            {/* {
                console.log("debounced text is " + debounceText)
            } */}
            <p>debounced value: {debounceText} </p>
        </div>
    )

}