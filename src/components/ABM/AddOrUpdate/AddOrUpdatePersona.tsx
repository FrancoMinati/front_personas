import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { basePersona, Persona } from "../../../interfaces/Persona";
import { AxiosError } from "axios";
import { ClipLoader } from "react-spinners";
import { handleChange } from "../../../utils/ChangeHandlers";
import { Button } from "../../Button/Button";
import { getOne, save, update } from "../../../API/BaseRequests";

export const AddOrUpdatePersona = () => {
  const { id } = useParams();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [persona, setPersona] = useState<Persona>(basePersona);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    try {
      if (id) {
        await update({
          endpoint: "personas",
          object: persona,
          id: Number(id),
        });
      } else {
        await save({
          endpoint: "personas",
          object: persona,
        });
      }
    } catch (err) {
      const axiosErr = err as AxiosError;
      console.log(axiosErr.message, axiosErr);
    }
    setLoading(false);
    return setTimeout(() => {
      navigate("/ABM/Personas");
    }, 3500);
  }

  const setPropsOfExistentPersona = async () => {
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
    if (id !== (undefined && Number(id) > 0)) {
      setPropsOfExistentPersona();
    }
  }, [id]);

  return (
    <div className="relative bg-neutral-100 py-6  sm:py-8 lg:py-12 ">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 lg:px-20">
        <div className="mb-10 flex w-full items-center justify-between md:mb-16">
          <div className="flex flex-col ">
            <h2 className=" text-center text-2xl font-bold text-neutral-800   lg:text-4xl">
              {id === undefined ? (
                <>
                  <span className="block">Carga de registro </span>
                </>
              ) : (
                <>
                  <span>Edición de registro </span>
                </>
              )}
            </h2>{" "}
            <h3 className="mb-4 text-start  text-xl font-bold text-amber-400 md:mb-6 ">
              Persona
            </h3>
          </div>
        </div>

        <form
          className={`mx-auto grid max-w-2xl  gap-4 text-end   sm:grid-cols-3 lg:gap-10`}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="denominacion" className="lg:text-2xl">
            Nombre
          </label>
          <input
            name={"nombre"}
            id={"nombre"}
            className="col-span-2 w-full rounded border bg-neutral-50 px-3 py-2 text-neutral-800 outline-none
            ring-amber-400 transition duration-100 focus:ring   "
            onChange={(e) => {
              handleChange(e, persona, setPersona);
            }}
            value={persona.nombre || ""}
            placeholder="nombre..."
            required
          />
          <label htmlFor="apellido" className="lg:text-2xl">
            Apellido
          </label>
          <input
            name={"apellido"}
            id={"apellido"}
            className="col-span-2 w-full rounded border bg-neutral-50 px-3 py-2 text-neutral-800 outline-none
            ring-amber-400 transition duration-100 focus:ring   "
            onChange={(e) => handleChange(e, persona, setPersona)}
            value={persona.apellido || ""}
            placeholder="Apellido..."
            required
          />
          <label htmlFor="dni" className="lg:text-2xl">
            DNI
          </label>
          <input
            name={"dni"}
            id={"dni"}
            className="col-span-2 w-full rounded border bg-neutral-50 px-3 py-2 text-neutral-800 outline-none
            ring-amber-400 transition duration-100 focus:ring   "
            onChange={(e) => handleChange(e, persona, setPersona)}
            value={persona.dni || ""}
            placeholder="Denominacion..."
            required
          />
          <div className="relative z-0 col-span-3 flex w-full gap-3">
            <Button type="submit" content="add" fullsize={true} color="rojo" />
            {isLoading && (
              <div className="absolute -right-20 flex items-center">
                <ClipLoader
                  size={45}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  color="#EC4899
                  "
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
