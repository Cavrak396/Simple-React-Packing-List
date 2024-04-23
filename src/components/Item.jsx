// Get Item component
export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" onClick={() => onToggleItem(item.id)} />
      <span
        style={item.packed === true ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity}
        {item.description}
      </span>
      <button type="button" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
