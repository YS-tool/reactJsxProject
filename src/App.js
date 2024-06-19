import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      
      <div className='content'>
        <Home/>
        <h1>app component</h1>
      </div>
    </div>
  );
}

export default App;