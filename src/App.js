
import ListItems from "./components/List";

function App() {
  
  return (
    <div>
      <ListItems
        title={"Mobile Operating Systems"}
        item1={"Android"}
        item2={"Blackberry"}
        item3={"IPhone"}
        item4={"Windows Phone"}
      />
      <ListItems
        title={"Mobile Manufacturers"}
        item1={"Samsung"}
        item2={"HTC"}
        item3={"Micromax"}
        item4={"Apple"}
      ></ListItems>
    </div>
  );

}

export default App;
