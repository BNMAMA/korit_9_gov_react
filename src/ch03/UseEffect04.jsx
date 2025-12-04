import { useEffect, useState } from "react";

function UseEffect04() {
    // num 상태
    // num 생태의 제곱 값을 화면에 출력하시오
    // 단 처음 num이 0일 때에는
    // '숫자를 증가시켜 결과를 확인하세요.'
    // 라는 안내 메세지를 alert으로 출력하기
    // 최솟값 0 밑으로는 내려갈 수 없음.
    // const [num1, setNum1] = useState(0);
    // const [result, setResult] = useState(0);                                              
    
    // useEffect(() => {
    //    if (result === 0) {
    //     setTimeout(() => {
    //          alert('숫자를 증가시켜 결과를 확인하세요')
    //     }, 100)
       
    //    } 
    // }, [result])

    // useEffect(() => {
    //      setResult(num1 * num1)
        
    // }, [num1])

    

    // const onClickIncreaseNum1Handle = () => {
    //     setNum1(num1 + 1);
    // }
    // const onClickDecreasNum1Handle = () => {
    //     if (num1 < 0) {
    //        console.log('0밑으로는 내려 갈 수 없음')
    //     } setNum1(num1 - 1)
        
    // }
    

    // return <>
    //     <h2>{num1}의 제곱 {result}</h2>
        
    //     <button onClick={onClickIncreaseNum1Handle}>1 증가 </button>
    //     <button onClick={onClickDecreasNum1Handle}>1 감소 </button>
    // </>

    const [ num, setNum ] = useState(0);
    const [ square, setSquare ] = useState(0);
    const [ isZero, setZero ] = useState(true);

    useEffect(() => {
        setSquare(num ** 2);
    }, [num]);
    
    useEffect(() => {
        setZero(square === 0);
    }, [square]);
    
    useEffect(() => {
        if (isZero) {
            setTimeout(() => {
                alert("숫자를 증가시켜 결과를 확인하세요.");
            }, 100);
        }
    }, [isZero]);

    const handleOnClick = (value) => {
        if (value < 0 && num < 1) {
            return;
        } 
        setNum(num + value);
        setSquare((num + value) ** 2);
    }

    return <>
        <h2>{num}</h2>
        <h2>{square}</h2>
        <button onClick={() => handleOnClick(1)}>1증가</button>
        <button onClick={() => handleOnClick(-1)}>1감소</button>
    </>
}

export default UseEffect04;



// DOM(문서 객체화) -> 모든 태그들은 객체일 수 있다 가 가능함!!
// 리액트는 부분 태그 수정 가능(원래는 다 바꿔야 함)
// 상태가 바뀌면 연관된 애들은 다 바뀜
// {값(연산결과)} 가능
// 함수 뒤에 ()만 붙이면 즉시실행도 가능(즉시실행함수)
// jsx를 리턴하는 함수 정의만 컴포넌트라고 부른다
// props는 객체 형태로 받음

// 렌더된다 -> 함수 재호출한다(상태가 변해야만 일어난다)(바뀐 부분만 재호출이 되는 것)
// 화면 전체가 마운트 될려면 각각 부품들이 렌더가 완료돼야 전체 화면을 렌더할 수 있음
// 부품을 새로 갈아끼우는걸 -> 마운트(최초에 한번은 무조건 동작함)
// 함수호출 -> 리턴 -> 마운트(useEffect동작)[dependency(상태값)] -> 아예 없으면 무조건적으로 재작동함
// useEffect(큐) -> 들어온 순서대로 나간다.

// rest문법 const {a2(제외시킬 값), ...aa} = a;
//                a 안에 있는 a2만 빼고 전부   