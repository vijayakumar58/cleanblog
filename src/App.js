import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/styles.css';
import Footer from './Footer';
import Mainindex from './Mainindex';
import Mainnavigation from './Mainnavigation';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Mainnavigation></Mainnavigation>
      <Routes>
        <Route path='/' element={<Mainindex></Mainindex>} ></Route>
        <Route path='/Post' element={<Post></Post>} ></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
       </div>
  );
}

export default App;
