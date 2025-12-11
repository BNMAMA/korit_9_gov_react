// 전역 상태 관리(클라이언트)

import { useState } from "react";
import { useName } from "./store/zustandStore";

function Zustand01() {
    const [ name1, setName1 ] = useState("김백년"); //상태는 무조건 함수 안에 사용
    const { name, setName } = useName();
   

    const handleOnChange1 = (e) => {
        setName1(e.target.value);
    }

    const handleOnChange = (e) => {
        setName(e.target.value);
    }

    return <>
        <h1>{name1}</h1>
        <input type="text" value={name1} onChange={handleOnChange1}/>
        <input type="text" value={name} onChange={handleOnChange}/>
        <Box1 name1={name1}></Box1>
    </>
}

function Box1({name1}) {
    return <div>
        <Box2 name1={name1}></Box2>
    </div>
}

function Box2({name1}) {
    return <div>
        <Box3 name1={name1}></Box3>
    </div>
}

function Box3({name1}) {
    const { name } = useName(); //객체를 꺼내쓸 수 있음 -> 객체 구조분해
    return <div>
        {name1}
        <div>
            {name}
        </div>
    </div>
}
export default Zustand01;