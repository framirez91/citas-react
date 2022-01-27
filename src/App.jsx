import { useState } from "react";
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})//cada paciente es un objeto por eso este inicia como un objeto vacio//genero la funcion aqui
  
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)//elimino el paciente que tenga el mismo id que el que se elimino
    setPacientes(pacientesActualizados)//actualizo el state
  
  }
  
  return (

    <div className="container mx-auto mt-20">
      <Header
      
      
      />
      <div className="mt-12 md:flex">
        <Formulario 
        pacientes = {pacientes}//toma el state
        setPacientes = {setPacientes}//toma la funcion
        paciente = {paciente}
        setPaciente = {setPaciente}//modifica el paciente
        />
        <ListadoPacientes 
        
        pacientes = {pacientes}
        setPaciente = {setPaciente}//la paso al componente
        eliminarPaciente = {eliminarPaciente}
        />
        
      </div>
    </div>
  )
}

export default App;
