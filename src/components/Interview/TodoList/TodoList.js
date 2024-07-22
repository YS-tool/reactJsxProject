import { useEffect, useState } from "react"
import TodoItem from "./TodoItem"





export default function TodoList (){

    const[InitialData, setList] = useState([])
    const[newTodo, setNewtodo] = useState("")

    useEffect(()=>{
        setList([
            {
                createdTime:(Date.now()-60*60*24),
                Info:"task 1",
                finishedTime:null,
                id:0
            },
            {
                createdTime:(Date.now()-60*60*12),
                Info:"task 2",
                finishedTime:null,
                id:1
            },
            {
                createdTime:(Date.now()-60*60*25),
                Info:"task 3",
                finishedTime:null,
                id:2
            },
        ])
    },[])


    const handleCheck = (id)=>{
        let newArr = InitialData.map(data=> data.id==id ? {...data, finishedTime:Date.now()}:data)
        setList(newArr.sort(compareTodo))
        console.log(newArr.sort(compareTodo))
    }

    const handleDelete = (id)=>{
        console.log("inside handle delete" + id)
        let newArr = []
        InitialData.map((item)=>{
            if(item.id != id){
                newArr = [...newArr, item]
            }
        })
        setList(newArr)
    }

    const addTodo = ()=>{
        let newItem = {
            createdTime:Date.now(),
            Info:newTodo,
            finishedTime:null,
            id : InitialData[InitialData.length-1].id+1
        }
        setNewtodo("")
        let newArr = [...InitialData, newItem]
        setList(newArr.sort(compareTodo))
    }

    const compareTodo = (a,b)=>{
        if(a.finishedTime!=null && b.finishedTime==null){
            return 1;
        }else if(a.finishedTime==null && b.finishedTime!=null){
            return -1;
        }else{
            return b.createdTime-a.createdTime;
        }
    }

    return (
        <div>
            <ul>
                {
                    InitialData?.map((oneItem)=>{
                        return <TodoItem Item={oneItem} 
                                        Check = {handleCheck} 
                                        Delete={handleDelete}/>
                    })
                }
            </ul>
            
            <div>

                <input
                    onChange={e=>(setNewtodo(e.target.value))}
                    value={newTodo}
                    placeholder="add a new todo item"
                >
                </input>

                <button
                    onClick={addTodo}
                >
                    Add todo
                </button>
            </div>


        </div>
    )

}