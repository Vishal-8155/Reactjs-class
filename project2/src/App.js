import './App.css';
import Classbasecomp from './component/Classbasecomp';
import Functionbasecomp from './component/Functionbasecomp';
import IncreDecre from './component/IncreDecre';
import Statecomp from './component/Statecomp';

function App() {
  return (
    <div className="App">

      <h2>Function Base Component</h2>
      
      <Functionbasecomp />

      <h2>Class Base Component</h2>

      <Classbasecomp /> <hr />

      <h2>Increment Decrement</h2>

      <IncreDecre /> <hr />

      <h2>State Component</h2>

      <Statecomp /> <hr />

    </div>
  );
}

export default App;
