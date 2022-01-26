import { useState } from "react";
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})//cada paciente es un objeto por eso este inicia como un objeto vacio//genero la funcion aqui
  return (

    <div className="container mx-auto mt-20">
      <Header
      
      
      />
      <div className="mt-12 md:flex">
        <Formulario 
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        />
        <ListadoPacientes 
        
        pacientes = {pacientes}
        setPaciente = {setPaciente}//la paso al componente
        />
        
      </div>
    </div>
  )
}

export default App;
