import { useState } from "react";
import "./Modal.css";
import { nanoid } from "nanoid";

export const Modal = ({
  closeModal,
  data,
  setData,
  formState,
  setFormState,
  onSubmit,
}) => {
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    let id = nanoid();
    data[id] = formState;
    setData({ ...data });
    onSubmit();
    e.preventDefault();
    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input name="name" onChange={handleChange} value={formState.name} />
          </div>
          <div className="form-group">
            <label htmlFor="family">family</label>
            <input
              name="family"
              onChange={handleChange}
              value={formState.family}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">age</label>
            <input
              name="age"
              type="number"
              onChange={handleChange}
              value={formState.age}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nationalId">nationalId</label>
            <input
              name="nationalId"
              type="number"
              onChange={handleChange}
              value={formState.nationalId}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
