import { Base } from "../../interfaces/Base";
import { handleChange } from "../../utils/ChangeHandlers";
import { Dispatch, SetStateAction } from "react";

interface InputLabelProps<T extends Base> {
  campo?: string | number | null;
  nombreCampo: string;
  objeto: T;
  setter: Dispatch<SetStateAction<T>>;
  id?: string;
  type?: string;
}

export const InputLabel = <T extends Base>({
  campo,
  nombreCampo,
  objeto,
  setter,
  type,
}: InputLabelProps<T>) => {
  return (
    <>
      <label htmlFor={nombreCampo} className="lg:text-2xl text-start mr-auto">
        {nombreCampo.toUpperCase()}
      </label>
      <input
        name={nombreCampo}
        id={nombreCampo}
        type={type}
        className="col-span-2 w-full rounded border bg-neutral-50 px-3 py-2 text-neutral-800 outline-none
              ring-amber-400 transition duration-100 focus:ring"
        onChange={(e) => handleChange(e, objeto, setter)}
        value={campo || ""}
        placeholder={nombreCampo + "..."}
        required
      />
    </>
  );
};
