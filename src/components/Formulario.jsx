import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)
  
  const generarId = () => {//genera un id aleatorio para iterar sin problemas
   const random =Math.random().toString(36).substr(2)
   const fecha = Date.now().toString(36)
   return random + fecha

  }




  const handleSubmit = (e) => {//e es el evento
    e.preventDefault()//para que no se recargue la pagina

    //validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {//
      console.log("Faltan datos")//si hay alguno vacio
      setError(true)//muestra el error
      return//para que no se ejecute el resto de la funcion
    }

    setError(false)//si no hay error, se limpia el error
    //objeto paciente
    const objetoPaciente = {//se crea un objeto con los datos del formulario
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId()
    }
    //console.log(objetoPaciente)//se muestra en consola el objeto creado
    setPacientes([...pacientes, objetoPaciente]) //toma una copia del array y lo agrega al final el nuevo objeto
    // y al momento que se genera se agrega a setPaceintes

    //limpiar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }



  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimientos Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {" "}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && <Error><p>Todos los coampos son obligatorios</p></Error>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block font-bold uppercase text-gray-700">
            Nombre Mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de La Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}//e es el evento que accedmos a los datos del input y cambia el estado de nombre
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block font-bold uppercase text-gray-700">
            Nombre Propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block font-bold uppercase text-gray-700">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block font-bold uppercase text-gray-700">
            Alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block font-bold uppercase text-gray-700">
            Sintomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />

        </div>
        <input type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
        hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar Paciente" />

      </form>
    </div>
  )
}

export default Formulario
