import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { basePersona, Persona } from "../../../interfaces/Persona";
import { ClipLoader } from "react-spinners";
import { Button } from "../../Button/Button";
import { InputLabel } from "../../Form/InputLabel";
import { baseDomicilio, Domicilio } from "../../../interfaces/Domicilio";
import {
  handleSubmit,
  setPropsOfExistentObject,
} from "../../../utils/FormHandlers";

export const AddOrUpdatePersona = () => {
  const { id } = useParams();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [persona, setPersona] = useState<Persona>(basePersona);
  const [domicilio, setDomicilio] = useState<Domicilio>(baseDomicilio);
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== (undefined && Number(id) > 0)) {
      setPropsOfExistentObject({
        endpoint: "personas",
        principalSetter: setPersona,
        id: Number(id),
        secondarySetters: [setDomicilio],
        baseObjects: [baseDomicilio],
        properties: ["domicilio"],
      });
    }
  }, [id]);

  return (
    <div className="relative bg-neutral-100 py-6  sm:py-8 lg:py-12 px-5 ">
      <div className="mx-auto max-w-screen-sm  bg-neutral-50 shadow-md rounded-lg px-8 pb-10 pt-5 shadow-neutral-400">
        <div className="mb-10 flex w-full items-center justify-between md:mb-16 ">
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
            <h3 className="mb-4 text-start  text-xl font-bold text-rose-500 md:mb-6 ">
              Persona
            </h3>
          </div>
        </div>

        <form
          className={`mx-auto grid max-w-2xl  gap-4 text-end   sm:grid-cols-3 lg:gap-10`}
          onSubmit={(e) => {
            persona.domicilio = domicilio;
            handleSubmit({
              e: e,
              endpoint: "personas",
              loader: setLoading,
              object: persona,
              id: Number(id) ?? undefined,
              redirectFunction: () => {
                setTimeout(() => {
                  navigate("/ABM/Personas");
                }, 1500);
              },
            });
          }}
        >
          <InputLabel
            nombreCampo="nombre"
            campo={persona.nombre}
            objeto={persona}
            setter={setPersona}
          />
          <InputLabel
            nombreCampo="apellido"
            campo={persona.apellido}
            objeto={persona}
            setter={setPersona}
          />
          <InputLabel
            nombreCampo="dni"
            campo={persona.dni}
            objeto={persona}
            setter={setPersona}
          />
          <InputLabel
            nombreCampo="calle"
            campo={domicilio.calle}
            objeto={domicilio}
            setter={setDomicilio}
          />
          <InputLabel
            nombreCampo="localidad"
            campo={domicilio.localidad}
            objeto={domicilio}
            setter={setDomicilio}
          />
          <InputLabel
            nombreCampo="numero"
            campo={domicilio.numero}
            objeto={domicilio}
            setter={setDomicilio}
            type="number"
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
