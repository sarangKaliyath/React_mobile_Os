function ListItems({ title, item1, item2, item3, item4 }) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
            <li>{ item1 }</li>
            <li>{ item2 }</li>
            <li>{ item3 }</li>
            <li>{ item4 }</li>
      </ul>
    </>
  );
}

export default ListItems;