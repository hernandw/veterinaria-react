import React from "react";

const Paciente = ({ data, setPaciente }) => {
  const { name, owner, email, alta, sintomas } = data;
  return (
    <div className="m-6 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          className="bg-indigo-600 py-2 px-10 text-white rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
          onClick={() => setPaciente(data)}
        >
          Editar
        </button>
        <button className="bg-red-600 py-2 px-10 text-white rounded-md hover:bg-red-700 cursor-pointer transition-all">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
