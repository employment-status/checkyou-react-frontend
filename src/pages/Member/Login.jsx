/**
 * 로그인 페이지
 * @Auth 해운
 */

import { useState } from "react";

export default function Login() {

    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');

    // 로그인 처리 함수
    const login = (e) => {
        e.preventDefault();
        
        // 유효성 검사
        if(code === '' || code.length == 0) {
            alert("사원번호를 입력해주세요.");
            return;
        }
        
        if(password === '' || password.length == 0) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        console.log(`사원번호: ${code}, 비밀번호: ${password}`);
    }

    return (
        <>
            <form onSubmit={login}>
                <label>아이디</label>
                <input type="text"
                            onChange={(e)=>{setCode(e.target.value)}}
                            placeholder="사원번호를 입력해주세요" />
                <br />
                <label>비밀번호</label>
                <input type="password"
                            onChange={(e)=>{setPassword(e.target.value)}}
                            placeholder="비밀번호를 입력해주세요" />
                <br />
                <button type="submit">로그인</button>
            </form>
        </>
    )
}