import { useState } from "react"

export default function Interview3(){


    const[num, setNum] = useState("");
    const[display, setDisplay] = useState("");
    const handleNumberChange = e=>{
        let number = e.target.value
        number = number.replace(/[^0-9]/g, "")

        if (number.length==4 && number.slice(0,1)!="("){
            number = "(" + number.slice(0,3) + ")" + number.slice(3,4)
        }
        if (number.length==5 && number.slice(0,1)=="("){
            number = number.slice(1,4) 
        }
        if (number.length==9 && number.slice(8,9)!="-"){
            number = number.slice(0,8) + "-" + number.slice(8,9)
        }
        if (number.length==9 && number.slice(8,9)=="-"){
            number = number.slice(0,8)
        }

        if(number.length>12){
            number = number.slice(0,12)
        }

        setNum(number);
    }

    return (
        <div>
            <h2>Auto format phone number</h2>
            <br/>
            <h4>Add a validator that only allow number input</h4>
            <br/>
            <h4>In a input box, add () when user type the 4th digit</h4>
            <br/>
            <h4>when uset type 7th digit, add - sign between 6 and 7th digit</h4>

            <input
                type="text"
                placeholder="Please input your phone number"
                value={num}
                onChange={handleNumberChange}
                
            >
            </input>
        </div>
    )
}