import { useSelector } from "react-redux";

export function Count() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Valeur actuelle : {count}</h1>
    </div>
  );
}
