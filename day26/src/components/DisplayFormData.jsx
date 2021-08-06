import { useSelector } from "react-redux";

const DisplayFormData = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);

  return (
    <div>
      <h1>Data</h1>
      <h3>Name : {name}</h3>
      <h3>Email : {email}</h3>
    </div>
  );
};

export default DisplayFormData;
