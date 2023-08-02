import { Dispatch, SetStateAction } from "react";
import { Base } from "../interfaces/Base";
import { getOne } from "../API/BaseRequests";
import { AxiosError } from "axios";

interface ObjectFetcher<T extends Base> {
  setter: Dispatch<SetStateAction<T>>; // setter del useState del objeto
  endpoint: string; // endpoint al que se apunta
  id?: string; // id del objeto
}
export const fetchObject = async <T extends Base>(
  fetcher: ObjectFetcher<T>
) => {
  try {
    if (fetcher.id) {
      const response = await getOne({
        id: Number(fetcher.id),
        endpoint: fetcher.endpoint,
      });
      fetcher.setter(response);
    } else {
      throw Error("Id is undefined");
    }
  } catch (err) {
    const error = err as AxiosError;
    console.log(error);
  }
};
