import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from '../src/component/layout'
import Header from "./component/layout/header"
import Auth from './component/auth'
import Order from './component/order'
import Clinic from './component/clinic'
import Profile from './component/profile'
import {Toaster} from 'react-hot-toast';
function App() {
    return (
         <>
            {/*<Header/>*/}
            <Router>
                <Routes>
                    <Route path="/" element={<Layout/>}/>
                    <Route path='/authorization' element={<Auth/>}/>
                    <Route path='/order' element={<Order/>}/>
                    <Route path='/clinic/:id' element={<Clinic/>}/>
                    <Route path='/clinic/:clinicId/orders/:ordersId' element={<Clinic/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path="*" element={<Layout/>}/>
                </Routes>
                <Toaster/>
            </Router>
         </>
    );
}

export default App;
