import JSXStudy from "./JSXStudy";

function App01() {
    const currentComponent = 1;

    const componentObj = {
        1: <JSXStudy />,
    }
    return componentObj[currentComponent];
                        //[키 값 넣기]
}

export default App01;