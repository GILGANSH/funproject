import style from "./NavigationPanel.module.css"

const NavigationPanel = (props) => {
    return(
        <nav>
            <div className={style.flex_container}>
                <ul>
                    <li className={style.liElement}>
                        Главная
                    </li>
                    <li className={style.liElement}>
                        Профиль
                    </li>
                    <li className={style.liElement}>
                        Банк
                    </li>
                    <li className={style.liElement}>
                        Магазин Стикеров
                    </li>
                    <li className={style.liElement}>
                        О нас
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationPanel;