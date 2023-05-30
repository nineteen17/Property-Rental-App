import { useQuery } from "react-query";
import { getHello } from "../api/getHello";

type GetHelloResponse = string;

const useHello = () => {
  return useQuery<GetHelloResponse>("hello", getHello);
};

export default useHello;
