// ***********************************
// |         Import Padrão           |
// ***********************************

import React, { useState } from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Form.module.css";

const Form = () => {
    const [data, setData] = useState({
        nomeCompleto2: "",
        email: "",
        estadoCivil: "",
        sexo: "",
    });

    const validacao = () => {
        let progresso = 0;

        if (data.nomeCompleto) {
            const validaNome = data.nomeCompleto.split(" ");
            if (validaNome[1]) {
                progresso += 25;
            }
        }
        if (data.email) {
            const validaEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(validaEmail.test(data.email)){
                progresso += 25;

            }
        }
        if (data.estadoCivil) {
            progresso += 25;
        }
        if (data.sexo) {
            progresso += 25;
        }
        return progresso;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => {
            const newData = { ...prev, [name]: value };
            console.log(newData)
            return newData;
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault()

        alert("Login realizado com sucesso!")
    }

    return (
        <form className={styles.form}>
            <div className={styles.barra}>
                <div
                    className={styles.carrega}
                    style={{ width: `${validacao()}%` }}
                ></div>
            </div>
            <div>
                <label>Nome Completo</label>
                <input
                    name="nomeCompleto"
                    type="text"
                    placeholder="Nome Completo"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>E-mail</label>
                <input
                    name="email"
                    type="email"
                    placeholder="user@gmail.com"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label> Estado civil </label>
                <select name="estadoCivil" onChange={handleChange}>
                    <option value=""></option>
                    <option>Solteiro</option>
                    <option>Casado</option>
                    <option>Divorciado</option>
                    <option>Viúvo</option>
                </select>
            </div>

            <div>
                <label>Masculino</label>
                <input
                    value="masculino"
                    name="sexo"
                    type="radio"
                    onChange={handleChange}
                />
                <label>Feminino</label>
                <input
                    value="feminino"
                    name="sexo"
                    type="radio"
                    onChange={handleChange}
                />
            </div>

            <button disabled={validacao() !== 100} onClick={handleSubmit}>Enviar</button>
        </form>
    );
};

export default Form;
