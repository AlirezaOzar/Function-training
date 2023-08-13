import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { Modal } from "./components/Modal";
import { nanoid } from "nanoid";

function App() {
  const [data, setData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    family: "",
    age: 0,
    nationalId: 0,
  });
  const deleteHandler = (id) => {
    const updatedData = { ...data };
    delete updatedData[id];
    setData(updatedData);
  };
  const editHandler = (id) => {
    setEditData(id);
    setModalOpen(true);
  };
  console.log(data);

  const submitHandler = () => {
    if (editData) {
      const updatedData = { ...data };
      data[id] = { ...formState, key: id };
      updatedData[editData.key] = formState;
      setData(updatedData);
      console.log(formState);
    } else {
      setEditData(null);
    }
    console.log(editData);
  };

  
  return (
    <div className="App">
      <Table
        data={Object.values(data)}
        setData={setData}
        formState={formState}
        setFormState={setFormState}
        onDelete={deleteHandler}
        onEdit={editHandler}
      />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          data={data}
          setData={setData}
          closeModal={() => {
            setModalOpen(false);
          }}
          formState={formState}
          setFormState={setFormState}
          onSubmit={submitHandler}
        />
      )}
    </div>
  );
}
export default App;
