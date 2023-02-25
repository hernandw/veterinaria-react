import React from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

const App = () => {
  return (
    <div className='container mt-20'>
      <Header />
      <div className='md:flex mt-12'>
      <Formulario />
      <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
