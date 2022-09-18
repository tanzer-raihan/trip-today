
import './App.css';
import HomeMain from './Components/Home/HomeMain/HomeMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';


import Contact from './Components/Contact/Contact';
import AllDestinations from './Components/All Destination/AllDestinations';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AuthProvider from './Components/Hooks/Auth/AuthProvider';
import BookTour from './Components/BookTour/BookTour';
import NotFound from './Components/NotFound/NotFound';
import Private from './Components/Private Route/Private';
import ModifyData from './Components/Modify Data/ModifyData';

function App() {
  return (
    <div className='app'>

      <BrowserRouter>
        <AuthProvider>
          <Header></Header>

          <Routes>
            <Route exact path='/' element={<HomeMain></HomeMain>}></Route>
            <Route path='/home' element={<HomeMain></HomeMain>}></Route>

            <Route path='/signin' element={<SignIn></SignIn>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/destination' element={<AllDestinations></AllDestinations>}></Route>

            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/booktour' element={<Private><BookTour></BookTour></Private>}></Route>
            <Route path='/manage-site' element={<ModifyData></ModifyData>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
