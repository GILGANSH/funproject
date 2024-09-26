import { Outlet } from "react-router-dom";
import { FooterComponent } from "./FooterComponent/FooterComponent";
import { HeaderComponent } from "./HeaderComponent/HeaderComponent.jsx";
import NavigationPanel from "./NavigationPanel/NavigationPanel.jsx";

// Индекс Элемент - это базовый элемент который будет отображать
// стилистику сайта. То есть те компоненты которые никак не изменяются
// в проекте это все что расположенно в тегах header и footer




const IndexComponent = (props) => {

    return(
        <>
            <header>
                <HeaderComponent></HeaderComponent>
            </header>
            <main>
                <Outlet/>
                <NavigationPanel />
            </main>
            <footer>
                <FooterComponent></FooterComponent>
            </footer>
        </>
    );
};

export default IndexComponent;