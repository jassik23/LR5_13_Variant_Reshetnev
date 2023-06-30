import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ForbiddenInput = ({ forbiddenLetters }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        let value = event.target.value;
        // Заменяем запрещенные буквы
        forbiddenLetters.forEach((letterObj) => {
            const letter = Object.keys(letterObj)[0];
            const replacement = Object.values(letterObj)[0];
            const regex = new RegExp(letter, "gi");
            value = value.replace(regex, replacement);
        });

        setInputValue(value);
    };

    const handleBlur = () => {
        // Выводим полученный текст на страницу
        document.getElementById("output").innerText=inputValue;
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
};

function ForbiddenFunction(){
    const forbiddenLetters = [
        {"Q": ""},
        {"X": ""},
        {"W": ""},
        {"Ё": "Е"}
    ];

    return (
        <div>

            <ForbiddenInput forbiddenLetters={forbiddenLetters} />
            <h1 id={"output"}></h1>
        </div>
    );
}


root.render(
  <React.StrictMode>
      <ForbiddenFunction/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
