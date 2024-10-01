import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexComponent from './components/IndexElement/IndexComponent.jsx';
import StartComponent from './components/IndexElement/StartComponent/StartComponent.jsx';

const  App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
            <Routes>
              <Route path='/' element={<IndexComponent/>}>
                <Route index element={<StartComponent/>}/>
              </Route> 
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
