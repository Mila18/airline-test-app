import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Profile from './pages/Profile'
import SearchingResult from './pages/SearchingResult'
import Booking from './pages/Booking'
import BookingManagement from './pages/BookingManagement'
import Seat from './pages/Seat'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../src/pages/components/Nav';
import Footer from './pages/components/Footer';

function App() {
  return (
    <div className="App mr-0">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/searchingResult" element={<SearchingResult/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/bookingManagement" element={<BookingManagement/>}/>
        <Route path="/seat" element={<Seat/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
