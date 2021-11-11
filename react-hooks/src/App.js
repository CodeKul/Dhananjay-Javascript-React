import logo from "./logo.svg";
import "./App.css";
import DataEffect from "./components/useEffect/DataEffect";
import InputRef from "./components/useRef/InputRef";
import Courses from "./props/Courses";
import DisplayCourses from "./props/DisplayCourses";
import { Notes } from "./components/useContext/Notes";
import Toggle from "./components/useContext/Toggle";
import BookList from "./components/useContext/Books/BookList";
import BookProvider from "./components/useContext/Books/BookContext";
import Switch from "./components/useContext/Switch";
import AddNewBook from "./components/useContext/Books/AddNewBook";
import Navbar from "./components/useContext/Books/Navbar";
// https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/

// https://blog.logrocket.com/a-guide-to-react-refs/

// https://www.youtube.com/watch?v=zFkMn-blorM

// https://blog.logrocket.com/a-deep-dive-into-react-context-api/


function App() {
  return (
    <div className="App">
      {/* <DataEffect/>
      <InputRef/> */}

      {/* <Courses/>

      <DisplayCourses courses/> */}

      <Switch />

      <Notes />
      <BookProvider>
        <Navbar/>
        <BookList />
        <AddNewBook/>
      </BookProvider>

      <Toggle />
    </div>
  );
}

export default App;
