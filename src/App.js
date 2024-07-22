import BlogDetail from './components/BlogDetail';
import Create from './components/Create';
import Home from './components/Home';
import InterviewIndex from './components/Interview/InterviewIndex';
import Interview1 from './components/Interview/Interview1';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { Route, BrowserRouter as Router , Routes} from 'react-router-dom';
import Interview2 from './components/Interview/Interview2/Interview2';
import Interview3 from './components/Interview/Interview3';
import Login from './components/Interview/Login';
import TodoList from './components/Interview/TodoList/TodoList';

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
            <Route path="/interview3" element={<Interview3/>}/>
            <Route path="/interview4" element={<Login/>}/>
            <Route path="/interview5" element={<TodoList/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;