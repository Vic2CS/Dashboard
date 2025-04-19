import { useState } from "react";


function ListGroup() {
  let items = ["New York", "San Francisco", "TOKYO", "LONDON", "PARIS"];
  let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
const [name, setName] = useState('');

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
