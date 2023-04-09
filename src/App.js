// import react from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Room from './Room';
import Footer from './Footer';


function App() {
  
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}   />
        <Route  path='/room/:roomID' element={<Room/>}  />
      </Routes>
       {/* <Footer/> */}
    
    </div>
  );
}

export default App;
