import { useState } from "react";

function ManageData() {

    let someData = 1;
    console.log(someData);

    const [number, setNumber] = useState(5);
    console.log(number);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={()=>(someData = 15)}> clique aqui</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={()=>setNumber(25)}> clique aqui</button>
        </div>
    </div>
  )
}

export default ManageData