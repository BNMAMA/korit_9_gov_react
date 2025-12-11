import { useState } from "react";
import { useUserInfo } from "./store/zustandStore";
import UserInfoBox from "./UserInfoBox";

function Zustand02() {
const [ user, setUser ] = useState({
    username: "",
    email: "",
    phone: "",
})

const { setUserInfo } = useUserInfo();

const handleOnChangeUInput = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value,
    });
}


const handleOnClick = () => {
  setUserInfo(user);
}

/**
 * 사용자 정보를 입력받은 후 확인을 눌렀을 때 UserInfoBox 컴포넌트에서 출력
 */

    return <div>
        <div>
            <input type="text" placeholder="사용자이름" name="username" value={user.username} onChange={handleOnChangeUInput}/>
            <input type="text" placeholder="이메일" name="email"value={user.email} onChange={handleOnChangeUInput}/>
            <input type="text" placeholder="연락처" name="phone"value={user.phone} onChange={handleOnChangeUInput}/>
            <button onClick={handleOnClick}>확인</button>
        </div>
        <UserInfoBox />
    </div>
}

export default Zustand02;