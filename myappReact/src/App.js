import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexComponent from './components/IndexElement/IndexComponent.jsx';

const  App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div >
            <Routes>
              <Route path='/' element={<IndexComponent/>}>
                {/* <Route index element={<Homepage/>}/> */}
              </Route> 
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
