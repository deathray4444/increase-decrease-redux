import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "./../redux/action";

const Display = ({ counter, increase, decrease }) => {
  return (
    <div>
      <h2>구독자 수 : {counter}</h2>
      <button onClick={() => increase()}>+1</button>
      <button onClick={() => decrease()}>-1</button>
    </div>
  );
};
const mapStateToProps = ({ counter }) => {
  return {
    counter,
  };
};

const mapDispatchToProps = {
  increase,
  decrease,
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
