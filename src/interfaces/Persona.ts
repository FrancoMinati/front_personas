import { Base } from "./Base";

export interface Persona extends Base {
  nombre: string | null;
  apellido: string | null;
  dni: number | null;
  domicilio?: null | string;
  libros?: string | null;
}

export const basePersona: Persona = {
  nombre: null,
  apellido: null,
  dni: null,
};
