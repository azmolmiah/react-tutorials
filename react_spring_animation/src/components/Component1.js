import React from "react";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

const Component1 = () => {
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -500 }
  });
  return (
    <animated.div style={props}>
      <div style={c1Style}>
        <h1>Component 1</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          repellat libero aliquid doloremque facilis reprehenderit harum
          laboriosam ex quas consequuntur illum animi enim, eius sit ab
          perspiciatis earum ducimus at.
        </p>
        <Spring
          from={{ number: 0 }}
          to={{ number: 10 }}
          config={{ duration: 10000 }}
        >
          {props => (
            <div style={props}>
              <h1 style={counter}>{props.number.toFixed()}</h1>
            </div>
          )}
        </Spring>
      </div>
    </animated.div>
  );
};

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};

const counter = {
  background: "#333",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto"
};

export default Component1;
