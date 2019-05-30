import React from 'react';
import {useState, SyntheticEvent} from 'react'






function LoginForm(props) {
    const [nameValue, setNameValue] = useState('default');
    const [passwdValue, setPasswdValue] = useState('default');

    var handleSubmit = function (e) {
        console.log(e);
        console.log(typeof e)
        e.preventDefault();
        console.log(nameValue);
        console.log(passwdValue);

        alert(e.target);

    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                用户名:
                <input type="text" name="name"  onChange={e=>setNameValue(e.target.value)} value=
                    {nameValue} />
            </label>
            <label>
                密码:
                <input type="password" name="password"  onChange={e=>setPasswdValue(e.target.value)} value=
                    {passwdValue} />
            </label>
            <input type="submit" value="登录"/>
        </form>
    );


}

export default LoginForm;
