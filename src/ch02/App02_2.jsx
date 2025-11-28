import { useState } from "react";

//구조분해(배열, 객체 두 종류만 가능)
function App02_2() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [displayAge, setDisplayAge] = useState("");



  const {
    name1,
    username,
    role: [
        {roleId:roleId, roleName:roleName},
        {roleID:roldId2, roleName:roleName2}
    ]
  } = user;
  // const {roldId, roleName } role;

  return (
    <div>
      <InputBox name={name} setName={setName} age={age} setAge={setAge}/>
      
      <ButtonBox 
      setDisplayName={setDisplayName} 
      setDisplayAge={setDisplayAge} 
      name={name} 
      age={age}/>
      
      <DisplayBox 
      displayName={displayName} 
      displayAge={displayAge}/>
    </div>
  );
}

export default App02_2; //훅 함수는 전역으로 빼기 불가능

function InputBox({name, setName, age, setAge}) {
  
    const handleNameInputOnChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleAgeInputonChange = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };
  // input 안에 들어가는 값은 value 안에 들어감
  return (
    <div className="input-box">
      <input type="text" value={name} onChange={handleNameInputOnChange} />
      <input type="text" value={age} onChange={handleAgeInputonChange} />
    </div>
  );
}

function ButtonBox({setDisplayName, setDisplayAge, name, age}) {
  const handleOnClick = () => {};
    setDisplayName(name);
    setDisplayAge(age);
  return (
    <div className="button-box">
      <button onClick={handleOnClick}>확인</button>
    </div>
  );
}

function DisplayBox({displayName, displayAge}) {
  return (
    <div className="display-box">
      <ul>
        <li>{displayName}</li>
        <li>{displayAge}</li>
      </ul>
    </div>
  );
}
