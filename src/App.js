import 'assets/css/app.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from 'pages/HomePage';
import Details from 'pages/Details';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route path="/categories/:idc" element={<Details/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
