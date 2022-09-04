import "./RegistrationPage.modules.scss";
import { useState } from "react";
function RegistrationPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    const onClickHandler = () => {
        localStorage.setItem('password', password)
        console.log(localStorage.getItem('password'))        
    }

    return (
        <div className="main-reg">
            <div className="block-reg">
                <h1>Регистрация</h1>
                <p>Представьтесь</p>
                <input
                    type="text"
                    placeholder="Иван"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>Email</p>
                <input
                    type="email"
                    placeholder="user123@mail.ru"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <p>Пароль</p>

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="btn-reg"
                    onClick={onClickHandler}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default RegistrationPage;
