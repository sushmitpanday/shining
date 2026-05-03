import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Jobs from './components/Jobs'
import Footer from './components/Footer'
import About from './pages/AboutUs'
import Contact from './pages/ContactUs'
import Login from './components/Login'
import AdminDashboard from './pages/AdminDashboard' // Dashboard import kiya


function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page: Bilkul alag layout */}
        <Route path="/login" element={<Login />} />

        {/* Admin Dashboard: Isme bhi Header/Hero nahi chahiye hoga shayad */}
        <Route 
          path="/admin-dashboard" 
          element={
         
              <AdminDashboard />
       
          } 
        />

        {/* Baaki saare Public pages */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <Hero />
              <main>
                <Routes>
                  <Route path="/" element={<Jobs />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App