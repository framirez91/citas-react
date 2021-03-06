
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {//tomo la funcion en el componente
    
   
    

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length?(
               <>
               <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                <p className=" text-xl mt-5 mb-10 text-center">
                    Administras tus {" "}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>
    
                {pacientes.map( paciente => (
    
                    <Paciente
                    key = {paciente.id}
                    paciente = {paciente}
                    setPaciente = {setPaciente}//y la paso al componente
                    eliminarPaciente={eliminarPaciente}
                    />
                ))}
                </>
            ): <>
            <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
            <p className=" text-lg mt-5 mb-10 text-center">
                    Comienza Agregando Pacientes {" "}
                    <span className="text-indigo-600 font-bold">y Aparareceran en este Lugar</span>
                </p>
            </>}
            







        </div>
    )
}

export default ListadoPacientes;
