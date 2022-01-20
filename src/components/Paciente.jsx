import React from 'react';

const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {" "}
        <span className=" font-normal normal-case">Hook</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {" "}
        <span className=" font-normal normal-case">Felipe</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {" "}
        <span className=" font-normal normal-case">k@caca.cl</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha: {" "}
        <span className=" font-normal normal-case">10/12/2022</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {" "}
        <span className=" font-normal normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias accusamus soluta voluptas, enim fuga itaque magnam eius architecto! Repudiandae praesentium iste alias reprehenderit vitae ea eaque quos dicta, pariatur soluta.</span>
    </p>
  </div>
  );
};

export default Paciente;
