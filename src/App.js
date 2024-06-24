import Create from './components/Create';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router , Routes} from 'react-router-dom';

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
          </Routes>
          <h1>app component</h1>
        </div>
      </div>
    </Router>

  );
}

export default App;