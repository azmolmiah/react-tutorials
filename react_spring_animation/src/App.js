import React, { useState } from "react";
import { Transition, animated } from "react-spring/renderprops";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import "./App.css";
import Component3 from "./components/Component3";
import "./App.css";

function App() {
  const [component3, setComponent3] = useState(false);
  const toggle = () => setComponent3(!component3);
  return (
    <div className="App">
      <Component1 />
      <Component2 toggle={toggle} />
      <Transition
        native
        items={component3}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {show =>
          show &&
          (props => (
            <animated.div style={props}>
              <Component3 />
            </animated.div>
          ))
        }
      </Transition>
    </div>
  );
}

export default App;
