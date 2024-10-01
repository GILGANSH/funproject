import { Outlet } from "react-router-dom";
import { FooterComponent } from "./FooterComponent/FooterComponent";
import HeaderComponent from "./HeaderComponent/HeaderComponent.jsx";
import NavigationPanel from "./NavigationPanel/NavigationPanel.jsx";
import style from "./IndexComponent.module.css";

// Индекс Элемент - это базовый элемент который будет отображать
// стилистику сайта. То есть те компоненты которые никак не изменяются
// в проекте это все что расположенно в тегах header и footer
// А так же в других статических (общих для всех страниц) элементов


const IndexComponent = (props) => {

    return(
        <>
            <header className={style}>
                <HeaderComponent/>
            </header>
            <main>
                <NavigationPanel />
                <Outlet/>
            </main>
            <footer>
                <FooterComponent></FooterComponent>
            </footer>
        </>
    );
};

export default IndexComponent;