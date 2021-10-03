import logo from './logo.svg';
import './App.css';

import ClassOne from './components/ClassOne';
import ClassTwo from './components/ClassTwo';
import FuncComp from './FuncComp';
import Form from './components/forms/Form';
import RegistrationForm from './components/forms/RegistrationForm';


//    https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/ 

// https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjr-L7uuIrzAhVqFLcAHcZuBeIQtwJ6BAgMEAM&url=https%3A%2F%2Fwww.bigbinary.com%2Fvideos%2Fkeep-up-with-reactjs%2Freact-lifecycle-methods-creating-a-clock-tick&usg=AOvVaw25DY7caAhRuVLVENsbzNVv 

// https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjr-L7uuIrzAhVqFLcAHcZuBeIQFnoECAoQAQ&url=https%3A%2F%2Farunkantpant.medium.com%2Fgetting-started-with-react-lifecycle-hooks-d45a92d4c303&usg=AOvVaw3T358-8Qgav-sna-wLgHj1


// https://blog.logrocket.com/modern-guide-react-state-patterns/

// https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwizk5DOuYrzAhWxheYKHez0DhAQtwJ6BAgxEAM&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Freact-js-for-beginners-props-state-explained%2F&usg=AOvVaw2QkGMtJjSHdh86r-qJzo8a

// https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwizk5DOuYrzAhWxheYKHez0DhAQFnoECDIQAQ&url=https%3A%2F%2Fflaviocopes.com%2Freact-state-vs-props%2F&usg=AOvVaw0xBOzCLTc4kSalMuM4sHjs


// https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/

function App() {
let name = "Dhananjay T"
let display = <p>Hello {name} </p>

  return (
    <div className="App">
      <Form/>

      <RegistrationForm/>
      {/* {display}
     Hello Welcome to codekul
     

     <ClassOne/>

     <ClassTwo/>

     <FuncComp/> */}
     {/* <ClassOne></ClassOne> */}
    </div>
  );
}

export default App;
