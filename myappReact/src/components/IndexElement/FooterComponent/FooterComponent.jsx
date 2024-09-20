import { NavLink } from "react-router-dom";
import style from './FooterComponent.module.css';

// Это footer он же подвальчик


const FooterComponent = (props) => {

    return(
        <>
            <div className={style.LogoCompany}>
                <h4>LogoCompany</h4>
            </div>
            <div className={style.BackgroundInformation}>
                <ul className={style.ulComponent}>
                    <li>
                        <NavLink to="#" className={style.navlink}>Политика Конфиденциальности</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" className={style.navlink}>Условия пользования</NavLink>
                    </li>
                    <li>
                        <p>2024</p>
                    </li>
                </ul>
            </div>
            <div className={style.Contacts}>
                <ul className={style.ulComponent}>
                    <li className={style.liElementByContact}>
                        VK
                    </li>
                    <li className={style.liElementByContact}>
                        YouTube
                    </li>
                    <li className={style.liElementByContact}>
                        Pinterest
                    </li>
                </ul>
            </div>
        </>
    );
};

export { FooterComponent };