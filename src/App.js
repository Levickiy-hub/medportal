import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from '../src/component/layout'
import Header from "./component/layout/header"
import Auth from './component/auth'
function App() {
    return (
         <>
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout/>}/>
                    <Router path='/auth' element={<Auth/>}/>
                    <Route path="*" element={<Layout/>}/>
                </Routes>
            </Router>

        </>
    );
}

export default App;
