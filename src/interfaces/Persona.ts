import { Base } from "./Base";
import { Domicilio } from "./Domicilio";

export interface Persona extends Base {
  nombre: string | null;
  apellido: string | null;
  dni: number | null;
  domicilio: Domicilio | null;
}


export const basePersona: Persona = {
  nombre: null,
  apellido: null,
  dni: null,
  domicilio: null,
};
