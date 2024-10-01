
// Это стартовый компонент который появляется при начальной загрузке
import { useState } from "react";
import style from "./StartComponent.module.css";



const StartComponent = (props) =>{

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Отправить данные формы на сервер, в formData хранятся данные с формы
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: '',
          });
    };
    
    return(
        <div>
            <h1> Добро пожаловать на сайт! Это стартовый компонент который появляется при начальной загрузке</h1>
            <p> Это тестовая начинка которая ничего не значит.</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Имя:</label>
                        <input
                        className={style.input}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Сообщение:</label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default StartComponent;