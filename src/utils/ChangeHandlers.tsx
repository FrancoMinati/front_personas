import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Base } from "../interfaces/Base";

type StateSetter<T> = Dispatch<SetStateAction<T>>;

type BaseChangeHandler<T> = (variable: T, setVariable: StateSetter<T>) => void;

type InputChangeHandler<T> = (
  e: ChangeEvent<HTMLInputElement>,
  variable: T,
  setVariable: StateSetter<T>
) => void | BaseChangeHandler<T>;

export const handleChange: InputChangeHandler<Base | any> = (
  e,
  variable,
  setVariable
) => {
  setVariable({
    ...variable,
    [e.target.name]: e.target.value,
  });
};
export const simpleHandleChange: InputChangeHandler<Base> = (
  e,
  variable,
  setVariable
) => {
  setVariable(e.target.value as Base);
};
