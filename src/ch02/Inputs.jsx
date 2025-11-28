import { useState } from "react";

function Inputs() {

    const [ fullName, setFullName ] = useState("");
    const [age, setAge ] = useState("");

     const inputNameHandle = (event) => {
        setFullName(event.target.value);
    }

    const inputAgeHandle = (e) => {
        setAge(e.target.value);
    }

    return <>
        <input type="text" placeholder="이름" value={fullName} onChange={inputNameHandle}/>
        <input type="text" placeholder="나이" value={age} onChange={inputAgeHandle}/>
        <h2 >이름: {fullName}</h2>
        <h2>나이: {age}</h2>
    </>

   
}



export default Inputs;