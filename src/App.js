import './App.css';
import LandingPage from './components/landingPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/landingPage.scss'

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<><LandingPage /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
