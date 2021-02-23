import dotenv from 'dotenv';
import './App.css';

dotenv.config();

const testMsg = process.env.REACT_APP_TEST_VARIABLE;
const testMsg2 = process.env.REACT_APP_TEST_VARIABLE2;

function App() {
  return (
    <div className="App">
      <div>
        This is githubaction test!!
        <p>{testMsg}</p>
        <p>{testMsg2}</p>
      </div>
    </div>
  );
}

export default App;
