import { Dispatch, SetStateAction } from "react";
import { getOne, save, update } from "../API/BaseRequests";
import { AxiosError } from "axios";
import { Base } from "../interfaces/Base";

interface ExistentObject<T extends Base, U extends Base> {
  id?: number;
  principalSetter: Dispatch<SetStateAction<T>>;
  secondarySetters?: Dispatch<SetStateAction<U>>[];
  baseObjects?: U[];
  properties?: string[];
  endpoint: string;
}

interface Submitter<T extends Base> {
  e: React.FormEvent<HTMLFormElement>;
  loader: Dispatch<SetStateAction<boolean>>;
  endpoint: string;
  object: T;
  id?: number;
  redirectFunction: () => void;
}
export const setPropsOfExistentObject = async <T extends Base, U extends Base>(
  props: ExistentObject<T, U>
) => {
  try {
    const response = await getOne({
      id: Number(props.id),
      endpoint: props.endpoint,
    });

    props.principalSetter(response);

    if (props.secondarySetters && props.properties && props.baseObjects) {
      for (const [index, setter] of props.secondarySetters.entries()) {
        const property = props.properties[index];
        if (response[property] !== null) {
          setter(response[property]);
        } else {
          setter(props.baseObjects[index]);
        }
      }
    }
  } catch (err) {
    const error = err as AxiosError;
    console.log(error);
  }
};

export async function handleSubmit<T extends Base>(submit: Submitter<T>) {
  
  submit.loader(true);
  submit.e.preventDefault();
  try {
    if (submit.id) {
      await update({
        endpoint: submit.endpoint,
        object: submit.object,
        id: Number(submit.id),
      });
    } else {
      await save({
        endpoint: submit.endpoint,
        object: submit.object,
      });
    }
  } catch (err) {
    const axiosErr = err as AxiosError;
    console.log(axiosErr.message, axiosErr);
  }
  submit.loader(false);
  return submit.redirectFunction();
}
