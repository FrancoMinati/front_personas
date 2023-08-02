import { Base } from "./Base";

export interface Domicilio extends Base {
  calle: string | null;
  localidad: string | null;
  numero: number | null;
}

export const baseDomicilio: Domicilio = {
  calle: null,
  localidad: null,
  numero: null,
};
