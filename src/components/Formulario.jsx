import React from "react";

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mb-10 mt-5 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg p-2 py-10 mb-10 mx-6">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la Mascota
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            id="name"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            name=""
            id="sintomas"
            cols="30"
            rows="4
            "
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full rounded-lg text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors p-3"
        value="Agregar Paciente"

        />
      </form>
    </div>
  );
};

export default Formulario;
