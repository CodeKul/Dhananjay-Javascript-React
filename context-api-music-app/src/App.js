import logo from './logo.svg';
import './App.css';
import MusicPlayerProvider from './components/MusicPlayerContext';
import PlayerControls from './components/PlayerControls';
import TrackList from './components/TrackList';


// https://www.youtube.com/watch?v=SUtkfXsvyaU


function App() {
  return (
    <div className="App">
     <MusicPlayerProvider>
       <TrackList/>
       <PlayerControls/>
     </MusicPlayerProvider>
    </div>
  );
}

export default App;
