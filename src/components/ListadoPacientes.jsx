import React from "react";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-lg mb-10 mt-5 text-center">
        Adminsitra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>
      <div className="m-6 bg-white shadow-md px-5 py-10 rounded-xl">
        <p
          className="font-bold mb-3 text-gray-700 uppercase"
        >
          Nombre: <span className="font-normal normal-case">Hook</span>
        </p>
        <p
          className="font-bold mb-3 text-gray-700 uppercase"
        >
          Propietario: <span className="font-normal normal-case">Hook</span>
        </p>
        <p
          className="font-bold mb-3 text-gray-700 uppercase"
        >
          Email: <span className="font-normal normal-case">Hook</span>
        </p>
        <p
          className="font-bold mb-3 text-gray-700 uppercase"
        >
          Alta: <span className="font-normal normal-case">Hook</span>
        </p>
        <p
          className="font-bold mb-3 text-gray-700 uppercase"
        >
          Sintomas: <span className="font-normal normal-case">Hook</span>
        </p>
      </div>
    </div>
  );
};

export default ListadoPacientes;
