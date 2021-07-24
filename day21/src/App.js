import "./App.css";
import { useState } from "react";
import AddItemForm from "./components/Form";
import RenderItem from "./components/RenderItem";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div className="container">
      <AddItemForm addItem={addItem} />

      {items.length === 0 ? (
        <h3 className="no-item">Start Adding Items</h3>
      ) : (
        items.map((item, index) => (
          <RenderItem
            item={item}
            key={index}
            index={index}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        ))
      )}
    </div>
  );
}

export default App;
