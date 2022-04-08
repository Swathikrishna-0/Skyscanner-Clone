import './App.css';
import Navbar from './Navbar';
import SearchFlights from './SearchFlights';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className="feedback_side_button_container">
        <Button className="feedback_button">Feedback</Button>
    </div>
    <SearchFlights/>
    </div>
  );
}

export default App;
