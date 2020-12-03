import './App.css';

import Pure from "./HW1/PureComponent";
import ClassComponent from "./HW1/ClassComponent";
import FunctionalComponent from "./HW1/FunctionalComponent";
import CreateElement from "./HW1/CreateElement";


function App() {
    return (
        <div className="App">
            <p>Hello React</p>
            {CreateElement}
            <FunctionalComponent/>
            <ClassComponent/>
            <Pure/>
        </div>
    );
}

export default App;
