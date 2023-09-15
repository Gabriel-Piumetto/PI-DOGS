import { useSelector } from "react-redux";

const UseCustomHook = () => {
  const dogs = useSelector((state) => state.dogs);
  return dogs;
};

export default UseCustomHook;





