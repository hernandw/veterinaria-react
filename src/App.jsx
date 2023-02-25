import React, { useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

const App = () => {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  return (
    <div className='container mt-20'>
      <Header />
      <div className='md:flex mt-12'>
      <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} />
      <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} />
      </div>
    </div>
  )
}

export default App
