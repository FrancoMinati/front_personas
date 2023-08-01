import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Persona, basePersona } from "../../../interfaces/Persona";
import { getOne } from "../../../API/BaseRequests";
import { AxiosError } from "axios";
import { Button } from "../../Button/Button";

export const DetallePersona = () => {
  const { id } = useParams();
  const [persona, setPersona] = useState<Persona>(basePersona);
 

  const getPersona = async () => {
    try {
      const response = await getOne({
        id: Number(id),
        endpoint: "personas",
      });
      setPersona(response);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }

  };
  useEffect(() => {
    getPersona();
  }, []);

  return (
    <div className="flex w-full px-5 lg:px-0">
      <div
        className="mx-auto my-10  w-full max-w-4xl rounded-lg border-b-4 border-l-4 border-neutral-300 bg-neutral-100 p-5 py-3 px-4 text-xl shadow-lg 
 md:text-2xl lg:py-8"
      >
        {" "}
        <div className="mb-6 w-full lg:mb-0 lg:py-6 lg:pr-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="title-font text-sm tracking-widest text-neutral-500 ">
                Detalle Persona
              </h1>
            </div>
            <Link to={`/ABM/Personas`} className="shadow-md">
              <Button content="Volver" color="amarillo" type="button" />
            </Link>{" "}
          </div>

          <div className="flex flex-col gap-3 border-t border-neutral-200 py-2 -500">
            <p className="fontBebas flex w-full justify-between border-b-2 border-b-neutral-200 -500">
              <span className="text-neutral-500 ">ID</span>
              <span className="ml-auto text-neutral-900 ">{persona.id}</span>
            </p>
            <p className="fontBebas flex w-full justify-between border-b-2 border-b-neutral-200 -500">
              <span className="text-neutral-500 ">Nombre</span>
              <span className="ml-auto text-neutral-900 ">
                {persona.nombre}
              </span>
            </p>
            <p className="fontBebas flex w-full justify-between border-b-2 border-b-neutral-200 -500">
              <span className="text-neutral-500 ">Apellido</span>
              <span className="ml-auto text-neutral-900 ">
                {persona.apellido}
              </span>
            </p>
            <p className="fontBebas flex w-full justify-between border-b-2 border-b-neutral-200 -500">
              <span className="text-neutral-500 ">DNI</span>
              <span className="ml-auto text-neutral-900 ">{persona.dni}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
