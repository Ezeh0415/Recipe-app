import MyRouter from "./Router.js/MyRouter";
import './scss/main.scss';
import {browserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <MyRouter />
    </div>
  );
}

export default App;
