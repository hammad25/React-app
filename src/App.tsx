// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  // const handleClick = () => {
  //   setAlertVisibility(!alert);
  // };

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectitem={handleSelectItem} /> */}

      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)} color="primary">
        My Button
      </Button>
    </div>
  );
}

export default App;
