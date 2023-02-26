import React, { useEffect, useState } from "react";
import Error from "./Error";
import { getId } from "../assets/getId";

const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      const { name, owner, email, alta, sintomas } = paciente;
      setName(name);
      setOwner(owner);
      setEmail(email);
      setAlta(alta);
      setSintomas(sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validamos el formulario
    if ([name, owner, email, alta, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    //Validamos el formulario
    const objetoPaciente = {
      name,
      owner,
      email,
      alta,
      sintomas,
      
    };

    if(paciente.id){
      objetoPaciente.id = paciente.id
      const pacienteUpdate = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacienteUpdate)
    }else{
      //Agregamos a listado Pacientes
    objetoPaciente.id = getId(),
    setPacientes([...pacientes, objetoPaciente]);
    }
    
    //Reseteamos el Formulario
    setName("");
    setOwner("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mb-10 mt-5 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      {error && <Error message="Todos los campos son obligatorios" />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-2 py-10 mb-10 mx-6"
      >
        <div className="mb-5 mx-3">
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5 mx-3">
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
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5 mx-3">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5 mx-3">
          <label
            htmlFor="Alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            id="Alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5 mx-3">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            
            id="sintomas"
            cols="30"
            rows="4
            "
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
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
