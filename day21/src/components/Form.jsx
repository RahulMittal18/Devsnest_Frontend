import { useState } from "react";

function AddItemForm({ addItem }) {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ title, calorie });

    setTitle("");
    setCalorie("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-box">
        <div className="input-title">
          <input
            required //This attribute make sure that input field must be filled out before submitting the form.
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Item Name"
            autoComplete="off"
          />
        </div>
        <div>
          <input
            required
            type="number"
            name="number"
            value={calorie}
            onChange={(e) => setCalorie(e.target.value)}
            placeholder="Calorie Amount"
          />
        </div>
      </div>
      <button type="submit" className="btn-submit">
        Add Item
      </button>
    </form>
  );
}

export default AddItemForm;
