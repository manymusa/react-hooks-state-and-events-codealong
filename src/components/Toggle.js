import React, {useState} from "react";



function Toggle() {
  const [lightSwitch , switchState] = useState(false);
  function buttonEvent(){
    switchState((lightSwitch) => !lightSwitch)
  }
  let color = lightSwitch ? 'red' : 'white';
  return <button style = {{background : color }}onClick={buttonEvent}>{lightSwitch ? 'ON': 'OFF'}</button>;
}

export default Toggle;
