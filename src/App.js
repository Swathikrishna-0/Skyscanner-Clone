import './App.css';
import Navbar from './Navbar';
import SearchFlights from './SearchFlights';
import Button from 'react-bootstrap/Button';
import BriefDescrip from './BriefDescrip';
import Flightsdeal from './Flightsdeal';
import Covid from './Covid';
import FaqSection from './FaqSection';
import FlightsCard from './FlightsCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="feedback_side_button_container">
          <Button className="feedback_button">Feedback</Button>
      </div>
      <SearchFlights/>
      <BriefDescrip />
      <Flightsdeal />
      <Covid />
      <FaqSection/>
      <FlightsCard/>
    </div>
  );
}

export default App;
