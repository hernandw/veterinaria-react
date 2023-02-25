import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes}) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-lg mb-10 mt-5 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>
      {pacientes.map((paciente, index) => <Paciente key={index} data={paciente} />)}
    </div>
  );
};

export default ListadoPacientes;
