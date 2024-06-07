import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage/>
      <Projects />
    </div>
  );
}

export default App;
