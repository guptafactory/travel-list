import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((itemsArr) => [...itemsArr, item]);
  }
  function handleDeleteItem(id) {
    setItems((itemsArr) => itemsArr.filter((item) => item.id !== id));
  }
  function handlePackItem(id) {
    setItems((itemsArr) =>
      itemsArr.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    if (!items.length) return;
    const confirmDelete = window.confirm("Are you sure to delete all items?");
    if (confirmDelete) setItems((itemsArr) => []);
  }
  return (
    <div className="app">
      <Logo key="11" />
      <Form key="21" onAddItem={handleAddItem} />
      <PackingList
        key="31"
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handlePackItem}
        onClearItems={handleClearItems}
      />
      <Stats key="41" items={items} />
    </div>
  );
}

export default App;
