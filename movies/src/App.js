import './App.css';

import Pure from "./HW1/PureComponent";
import ClassComponent from "./HW1/ClassComponent";
import FunctionalComponent from "./HW1/FunctionalComponent";


function App() {
  return (
    <div className="App">
      <p>Hello React</p>
      <FunctionalComponent/>
      <ClassComponent/>
      <Pure/>
    </div>
  );
}

export default App;
