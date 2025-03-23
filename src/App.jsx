import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContactProvider } from './context/ContactContext'
import Home from './pages/Home'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'
import React from 'react'
import './App.css'

function App() {

  return (
    <ContactProvider>
      <Router>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/add' element={< AddContact />} />
          <Route path='./edit/:id' element={< EditContact />} />
        </Routes>
      </Router>
    </ContactProvider>
  )
}

export default App
