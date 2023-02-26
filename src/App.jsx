import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {
  /* const INITIAL = JSON.parse(localStorage.getItem("pacientes")) ?? [] */
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});
  const deleteUser = (id) => {
    const pacienteDelete = pacientes.filter((paciente) => paciente.id != id);
    setPacientes(deleteUser);
  };


  useEffect(() => {
    
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mt-20">
      <Header />
      <div className="md:flex mt-12">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  );
};

export default App;
