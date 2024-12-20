import { useState } from "react";

const InputField = () => {
    const [email, setEmail] = useState("anon1277@gmail.com");
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const GetData = () => {
        console.log("Email:", email, "Password:", password, "Mobile Number:", mobileNumber);
    };

    const resetFields = () => {
        setEmail('');
        setPassword('');
        setMobileNumber('');
    };

    return (
        <div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    name="email"
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    name="password"
                />
            </div>
            <div>
                <label>Mobile Number:</label>
                <input
                    type="text"
                    value={mobileNumber}
                    onChange={(event) => setMobileNumber(event.target.value)}
                    name="mobileNumber"
                />
            </div>
            <div>
                <button onClick={GetData}>Submit</button>
                <button onClick={resetFields}>Reset</button>
                <button onClick={() => setEmail('')}>Clear Email</button>
            </div>
        </div>
    );
};

export default InputField;
