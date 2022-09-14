import './App.css';
import {Routes, Route} from 'react-router-dom'
import { QuestionContainer } from './components/Questions/QuestionContainer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<QuestionContainer />} />
      </Routes>
    </div>
  );
}

export default App;
