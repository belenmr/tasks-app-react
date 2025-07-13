import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


function App() {

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="mb-4">Tareas</h1>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
