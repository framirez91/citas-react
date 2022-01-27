const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas,id } = paciente

    const handleEliminar =()=>{//funcion para confirmar eliminacion
        const respuesta = confirm('Estas seguro de eliminar este paciente?');//confirma si quiere eliminar el paciente
        if(respuesta){//si la respuesta es true
            eliminarPaciente(id);//se llama a la funcion eliminarPaciente
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {" "}
                <span className=" font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {" "}
                <span className=" font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {" "}
                <span className=" font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha: {" "}
                <span className=" font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {" "}
                <span className=" font-normal normal-case">{sintomas}</span>
            </p>
            <div
            className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => setPaciente(paciente)}//con el arrow function se puede acceder a la funcion desde el componente
                > Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                    onClick={handleEliminar}//sin parentisis se espera al llamar la funcion y no directamente
                > Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;
