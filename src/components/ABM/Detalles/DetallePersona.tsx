import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Persona, basePersona } from "../../../interfaces/Persona";
import { Button } from "../../Button/Button";
import { fetchObject } from "../../../utils/ResponseHandlers";

export const DetallePersona = () => {
  const { id } = useParams();
  const [persona, setPersona] = useState<Persona>(basePersona);

  useEffect(() => {
    fetchObject({ endpoint: "personas", id: id, setter: setPersona });
  }, [id]);

  return (
    <div className="flex w-full px-5 lg:px-0">
      <div
        className="mx-auto my-10  w-full max-w-lg rounded-lg border-b-4 border-l-4 border-neutral-300 bg-neutral-100 p-5 py-3 px-4 text-xl shadow-lg 
 md:text-2xl lg:py-8"
      >
        {" "}
        <div className="mb-6 w-full lg:mb-0 lg:py-6 ">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="title-font text-2xl tracking-widest text-rose-500 ">
                Detalle Persona
              </h1>
            </div>
            <Link to={`/ABM/Personas`} className="shadow-md mb-5">
              <Button content="Volver" color="rojo" type="button" />
            </Link>{" "}
          </div>

          <div className="flex flex-col gap-3 border-t border-neutral-200 py-2 ">
            <p className="fontBebas flex w-full justify-between border-b-2 border-b-neutral-200 ">
              <span className="text-neutral-500 ">ID</span>
              <span className="ml-auto text-neutral-900 ">{persona.id}</span>
            </p>
            <p className="fontBebas flex w-full justify-between border-b-2 border-b-neutral-200 ">
              <span className="text-neutral-500 ">Nombre</span>
              <span className="ml-auto text-neutral-900 ">
                {persona.nombre}
              </span>
            </p>
            <p className="fontBebas flex w-full justify-between border-b-2 border-b-neutral-200 ">
              <span className="text-neutral-500 ">Apellido</span>
              <span className="ml-auto text-neutral-900 ">
                {persona.apellido}
              </span>
            </p>
            <p className="fontBebas flex w-full justify-between border-b-2 border-b-neutral-200 ">
              <span className="text-neutral-500 ">DNI</span>
              <span className="ml-auto text-neutral-900 ">{persona.dni}</span>
            </p>
            <p className="fontBebas grid grid-cols-10 w-full justify-between border-b-2 border-b-neutral-200 ">
              <span className="text-neutral-500 col-span-10 md:col-span-6">
                Domicilio
              </span>
              <div className="grid grid-cols-2 col-span-10 md:col-span-4">
                <div className="col-span-1 flex flex-col  text-lg">
                  <span className="text-neutral-700  text-left  mr-auto">
                    Calle
                  </span>
                  <span className="text-neutral-700  text-left  mr-auto">
                    Número
                  </span>
                  <span className="text-neutral-700  text-left  mr-auto">
                    Localidad
                  </span>
                </div>
                <div className="col-span-1 flex flex-col text-lg">
                  <span className="ml-auto text-neutral-900 ">
                    {persona.domicilio?.calle}
                  </span>
                  <span className="ml-auto text-neutral-900 ">
                    {persona.domicilio?.numero}
                  </span>
                  <span className="ml-auto text-neutral-900 ">
                    {persona.domicilio?.localidad}
                  </span>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
