import React from "react";
import { useSpring, animated } from "react-spring";

const Component2 = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { delay: 3000, duration: 3000 }
  });
  return (
    <animated.div style={props}>
      <div style={c2Style}>
        <h1>Component 2</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          repellat libero aliquid doloremque facilis reprehenderit harum
          laboriosam ex quas consequuntur illum animi enim, eius sit ab
          perspiciatis earum ducimus at.
        </p>
      </div>
    </animated.div>
  );
};

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

export default Component2;
