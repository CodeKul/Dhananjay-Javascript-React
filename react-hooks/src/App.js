import logo from './logo.svg';
import './App.css';
import DataEffect from './components/useEffect/DataEffect';
import InputRef from './components/useRef/InputRef';
// https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/

// https://blog.logrocket.com/a-guide-to-react-refs/

// https://www.youtube.com/watch?v=zFkMn-blorM
function App() {
  return (
    <div className="App">
      <DataEffect/>
      <InputRef/>
    </div>
  );
}

export default App;
