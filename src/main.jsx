import { createRoot } from "react-dom/client";
import App01 from "./ch01/App01";

// default component는 파일명과 동일하게 하는게 좋음

const currentApp = "ch01_2";


const appObj = { // 하나하나가 페이지임(페이지를 바꾸기 위함이다)
    ch01: <App01 />,
    ch01_1: <h1>ch01_1 렌더링</h1>,
    ch01_2: BoxComponent(),
    // 함수 호출 둘다 가능
    ch01_3: <BoxComponent />,
    ch01_4:<BoxComponent></BoxComponent>
}



const root = document.getElementById('root');
createRoot(root).render(appObj[currentApp]);


function BoxComponent() {
    return <div><TitileComponent title="타이틀" title2="타이틀2" /></div>
    // return <div>{TitileComponent({title: "타이틀", title2: "타이틀2"})}</div>
}

function TitileComponent({title, title2}) { //여러 속성들을 props라고 한다.(하나하나 props하기 힘들어서 구조분해를 사용함)
    console.log(title);
    console.log(title2);

    return <h1>{title2}</h1>
}
