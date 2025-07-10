import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="mb-4">Tareas</h1>
        <Routes>
          <Route path="/" element={<TaskList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
