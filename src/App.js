import BlogDetail from './components/BlogDetail';
import Create from './components/Create';
import Home from './components/Home';
import InterviewIndex from './components/Interview/InterviewIndex';
import Interview1 from './components/Interview/Interview1';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { Route, BrowserRouter as Router , Routes} from 'react-router-dom';
import Interview2 from './components/Interview/Interview2/Interview2';

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
            <Route path="/interview" element={<InterviewIndex/>}/>
            <Route path="/interview1" element={<Interview1/>}/>
            <Route path="/interview2" element={<Interview2/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;