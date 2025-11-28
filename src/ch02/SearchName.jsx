//input 하나를 만들고 입력된 이름과 값이 일치하는 나이를 h2 태그 안에 출력하시오.
// 이름이 없으면 '값 없음'을 출력

import { useState } from "react";

function SearchName() {
    

    
    const profiles = [
        {
            name: "김준일",
            age: 32,
        },
        {
         
            name: "김준이",
            age: 33,
        },
        
        {
            name: "김준삼",
            age: 34, 
        },

    ]

  


    const [result, setResult] = useState("찾은 결과 없음");
    const [ inputValue, setInputValue ] = useState("");

      const inputHandle = (e) => { 
      setInputValue(e.target.value);
      setResult("찾은 결과 없음");

    //   for (let i = 0; i < profiles.length; i++) {
    //     const profile = profiles[i];
    //     if(profile.name === e.target.value) {
    //         setResult(profile.age);
    //         break;
    //     }
    //   }
      //forEach
     profiles.forEach((profile) => {
        if(profile.name === e.target.value) {
            setResult(profile.age)
             // break; 함수 안에서 break 안됨
        }
     })
      // filter
     const foundprofiles = profiles.filter((profile) => {
        return profile.name === e.target.value;

       

     })
        if (!!profiles.length){ //firstfind
            setResult(foundprofiles[0].age);
        }

      // find

      const foundprofile = profiles.find((profile) => {
        return profile.name === e.target.value;
      });

      if(!!foundprofile) {
        setResult(foundprofile.age);
      }



    }




    
    return <>
        <input type="text" onChange={inputHandle}/>
        <h2>{result}</h2>
    </>
}

export default SearchName;