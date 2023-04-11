import { useEffect, useMemo, useState } from "react";
import "./App.css";
import TableUser from "./component/table";
import useFetch from "./custom/useFetch";
import InputFilter from "./component/input";

function App() {
  const [input, setInput] = useState("");
  // function for fetching the data
  const { data, isError, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  // make a temporary data holder for handling delete
  const [tempData, setTempData] = useState([]);
  useEffect(() => {
    setTempData(data);
  }, [data]);
  // handle the input change
  const handleChange = (e) => {
    let val = e.target.value;
    setInput(val);
  };
  // handle delete data from table component
  const handleDelete = (id) => {
    // filter the temporary data
    let res = tempData.filter((f) => f.id != id);
    // update the temporary data
    console.log(res);
    setTempData(res);
  };
  // handle data filtering
  let dataFil = useMemo(() => {
    return (
      tempData &&
      // filter the data by input
      tempData.filter((f) =>
        (f.name.toLowerCase() + f.email.toLowerCase()).includes(
          input.toLowerCase()
        )
      )
    );
  }, [tempData, input]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div className="w-100" style={{ padding: "15px", background: "#e9e9e9" }}>
        <InputFilter handleChange={handleChange} />
      </div>
      <div className="w-100" style={{ overflowY: "auto" }}>
        {isLoading ? (
          "Please Wait while we're loading the data."
        ) : isError ? (
          data.msg
        ) : (
          <TableUser dataFil={dataFil} handleDelete={handleDelete} />
        )}
      </div>
    </div>
  );
}

export default App;
