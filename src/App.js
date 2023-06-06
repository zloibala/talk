import { useState } from "react";
import "./App.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
function App() {
  const [dogImg, setDogImg] = useState("");

  const onClickHandler = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImg(data.message));
  };

  return (
    <div className="App">
      <h1> Talking to the Moon</h1>
      <button onClick={onClickHandler}> Get the dog image</button>
      <div>{dogImg && <img src={dogImg} alt="dog" width="400px" />}</div>
    </div>
  );
}

export default App;
