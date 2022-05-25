import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar.component.js'
import ExerciseList from './components/exercises-list.component.js'
import EditExercise from './components/edit-exercise.component.js'
import CreateExercise from './components/create-exercise.component.js'
import CreateUser from './components/create-user.component.js'

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Routes>
          <Route exact path='/' element={<ExerciseList />} />
          <Route exact path='/edit/:id' element={<EditExercise />} />
          <Route exact path='/create' element={<CreateExercise />} />
          <Route exact path='/user' element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
