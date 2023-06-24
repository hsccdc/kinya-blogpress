import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



function App() {
    return (
      
      <Router>
         <div class="container">
          <Routes>
                <Route path="/" element={<Navigation />}>
                <Route index element={< Home/>}></Route>
                <Route exact path='/Login' element={< Login/>}></Route>
                <Route exact path='/Registration' element={< Registration/>}></Route>
                </Route>  
         </Routes>
         </div>
      </Router>
    );
  }


export default App;
