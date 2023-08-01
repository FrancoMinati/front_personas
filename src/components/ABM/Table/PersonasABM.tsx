import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faPerson,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Persona } from "../../../interfaces/Persona";
import { getAll, softDelete } from "../../../API/BaseRequests";
import { AxiosError } from "axios";
import { Button } from "../../Button/Button";

export const PersonasABM = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);

  const getPersonas = async () => {
    try {
      const data = await getAll({ endpoint: "personas" });
      console.log(data);
      setPersonas(data);
    } catch (err) {
      const axiosError = err as AxiosError;
      console.log(axiosError.message);
    }
  };
  const handleDeleteRegister = async (id?: number) => {
    try {
      await softDelete({
        endpoint: "personas",
        id: id,
      });
      getPersonas();
    } catch (err) {
      const axiosError = err as AxiosError;
      console.log(axiosError.message);
    }
  };

  useEffect(() => {
    getPersonas();
  }, []);

  return (
    <div className=" relative flex w-full flex-col gap-5 bg-neutral-100 px-5 pt-5  sm:px-8 md:px-16 ">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-3 text-3xl font-extrabold uppercase text-black ">
          <FontAwesomeIcon icon={faPerson} />
          Personas
        </h1>
        <Link to={`/ABM/Personas/newRegister`}>
          <Button
            content={<FontAwesomeIcon icon={faPlus} size="sm" />}
            type="button"
            color="violeta"
          />{" "}
        </Link>
      </div>

      {personas && personas.length != 0 ? (
        <div className=" mb-6 flex flex-col gap-y-1 overflow-hidden rounded-lg bg-neutral-900 shadow-2xl  ">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full table-fixed bg-neutral-900 text-left text-sm font-light">
                  <thead className="upperFcase font-medium">
                    <tr className="border-b-4 border-b-neutral-500 bg-neutral-900  text-neutral-100 ">
                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">Nombre</th>
                      <th className="px-6 py-4">Apellido</th>
                      <th className="px-6 py-4">DNI</th>
                      <th className="px-6 py-4 text-center text-neutral-100">
                        {" "}
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {personas.map((persona) => (
                      <tr
                        className={`border-b border-b-neutral-200 odd:bg-neutral-100 even:bg-neutral-100 hover:bg-neutral-200
                           `}
                        key={persona.id}
                      >
                        <td className="px-6 py-4 font-bold">{persona.id}</td>
                        <td className="px-6 py-4">{persona.nombre}</td>
                        <td className="px-6 py-4">{persona.apellido}</td>
                        <td className="px-6 py-4">{persona.dni}</td>
                        <td className="px-6 py-4">
                          <div className="m-0 flex h-full items-center justify-center gap-16 p-0">
                            <Link to={`/ABM/Personas/edit/${persona.id}`}>
                              <Button
                                color="azul"
                                type="button"
                                content={
                                  <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    size="sm"
                                    style={{ color: "#ffffff" }}
                                  />
                                }
                              />
                            </Link>
                            <Link to={`/ABM/Personas/${persona.id}`}>
                              <Button
                                color="verde"
                                type="button"
                                content={
                                  <FontAwesomeIcon
                                    icon={faEye}
                                    size="sm"
                                    style={{ color: "#ffffff" }}
                                  />
                                }
                              />
                            </Link>
                            <Button
                              type="button"
                              color="rojo"
                              callback={() => {
                                handleDeleteRegister(persona.id);
                              }}
                              content={
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                  size="sm"
                                  style={{ color: "#ffffff" }}
                                />
                              }
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2
          className="my-6 rounded-md bg-rose-700 p-2 text-center font-semibold text-zinc-100
    shadow-lg"
        >
          Ups! Aun no has agregado ningún registro.
        </h2>
      )}
    </div>
  );
};
