import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.js"
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AddProduct from './components/AddProduct';
import GetProducts from './components/GetProducts';
import NotFound from './components/NotFound';
import Makepayment from './components/Makepayment';
import Navbar from './components/Navbar';
import About from './components/About';






function App() {
  return (
    <Router>
    <div className="App ">
      <header className="App-header">
        <h1>Denri cafe home of great quality</h1>
      </header>
      <Navbar/>

    </div>
         <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/' element={<GetProducts/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/makepayment" element={<Makepayment/>}/>
        <Route path='/about' element={<About/>}/>
        
      </Routes>
    </Router>


  );
}


export default App;
