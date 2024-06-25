import BlogDetail from './components/BlogDetail';
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
            <Route path="/blogs/:id" element={<BlogDetail/>}/>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;