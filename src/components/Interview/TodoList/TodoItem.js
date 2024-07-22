



export default function TodoItem({Item, Check, Delete}){


    return (
        <div style={{
            backgroundColor: Item.finishedTime!=null ? "#00B1E1":""
        }}>
            <p>{Item.Info}</p>
            <button onClick = {()=>Delete(Item.id)}>delete</button>
            <button onClick = {()=>Check(Item.id)}>finished</button>
            <br></br>
            <br></br>
        </div>
    )
}