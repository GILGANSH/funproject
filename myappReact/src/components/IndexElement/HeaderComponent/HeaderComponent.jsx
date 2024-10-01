
import style from './HeaderComponent.module.css';
import { NavLink } from 'react-router-dom';

// В данном компоненте описывается стандартный header
// В нем же описываются ссылки на те или иные route

const HeaderComponent = (props) => {
    return(
        <header className={style.myheader}> 
            <nav>
                <ul className={style.myul}>
                    <li className={style.li1}>
                        <NavLink to="#" className={style.navlink}> Стартовая страница </NavLink>
                    </li>
                    <li className={style.li2}>
                        <NavLink to='#' className={style.navlink}> Второй элемент </NavLink>
                    </li>
                    <li className={style.li3}>
                        <NavLink to='#' className={style.navlink}> Третий элемент </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;