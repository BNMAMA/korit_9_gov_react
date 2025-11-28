import { createRoot } from "react-dom/client";
import App01 from "./ch01/App01";
import App02 from "./ch02/App02";
import Counter from "./ch02/Counter";
import App02_2 from "./ch02/App02_2";
import App02_3 from "./ch02/App02_3";
import App02_4 from "./ch02/App02_4";
import Inputs from "./ch02/Inputs";
import SearchName from "./ch02/SearchName";
import UseEffect01 from "./ch03/UseEffect01";
import UseEffect03 from "./ch03/UseEffect03";

// default component는 파일명과 동일하게 하는게 좋음

const currentApp = "useEffect03";


const appObj = { // 하나하나가 페이지임(페이지를 바꾸기 위함이다)
    ch01: <App01 />,
    ch02: <App02 />,
    counter: <Counter />,
    ch02_2: <App02_2 />,
    ch02_3: <App02_3 />,
    ch02_4: <App02_4 /> ,
    inputs: <Inputs /> ,
    SearchName: <SearchName />,
    useEffect01: <UseEffect01 />,
    useEffect03: <UseEffect03 />,
    
}



const root = document.getElementById('root');
createRoot(root).render(appObj[currentApp]);


// function BoxComponent() {
//     return <div><TitileComponent title="타이틀" title2="타이틀2" /></div>
//     // return <div>{TitileComponent({title: "타이틀", title2: "타이틀2"})}</div>
// }

// // props는 매개변수가 무조건 객체로 들어온다.
// function TitileComponent({title, title2}) { //여러 속성들을 props라고 한다.(하나하나 props하기 힘들어서 구조분해를 사용함)
//     console.log(title);
//     console.log(title2);

//     return <h1>{title2}</h1>
// }
