import { useState } from "react";

// Write your Color component here
const Color = (props) => {
  //props passed in 
  //console.log(props)

  return (
    <div
      className={props.color+`${props.isSelected? ' selected': ''} `}
      onClick={() => props.setSelectedColor(props.color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  //const [isSelect, setIsSelect]= useState(false);

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} isSelected={selectedColor==="red"} />
        <Color color="purple" setSelectedColor={setSelectedColor} isSelected={selectedColor==="purple"}/>
        <Color color="blue" setSelectedColor={setSelectedColor} isSelected={selectedColor==="blue"}/>
      </div>
    </div>
  );
};

export default App;
