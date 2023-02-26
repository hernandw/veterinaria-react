import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, deleteUser }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes.length === 0 ? (
        <>
          <h2 className="font-black text-2xl text-center">
            No hay pacientes
          </h2>
          <p className="text-lg mb-10 mt-5 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-lg mb-10 mt-5 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
        </>
      )}

      {pacientes.map((paciente) => (
        <Paciente key={paciente.id} data={paciente} setPaciente={setPaciente} deleteUser={deleteUser} />
      ))}
    </div>
  );
};

export default ListadoPacientes;
