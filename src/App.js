import dotenv from 'dotenv';
import './App.css';

dotenv.config();

const testMsg = process.env.REACT_APP_TEST_VARIABLE;

function App() {
  return (
    <div className="App">
      <div>
        This is githubaction test!!
        <span>{testMsg}</span>
      </div>
    </div>
  );
}

export default App;
