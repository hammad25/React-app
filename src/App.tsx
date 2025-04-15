// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectitem={handleSelectItem} /> */}
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button onClick={handleClick} color="success">
        My Button
        <p>Im a child</p>
      </Button>
    </div>
  );
}

export default App;
