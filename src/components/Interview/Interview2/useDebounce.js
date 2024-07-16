import { useEffect, useState } from "react";

const useDebounce = (text, time)=>{

    const[debounced, setDebounced] = useState(text)

    useEffect(()=>{
        const timer = setTimeout(() => {
            setDebounced(text)
        },time)

        return ()=>{
            clearTimeout(timer)
        }
    }, [text])

    return debounced
}

export default useDebounce