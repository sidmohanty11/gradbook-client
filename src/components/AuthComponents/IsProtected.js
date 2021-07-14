import React from "react";
import { useHistory } from "react-router";

function IsProtected(props) {
  const history = useHistory();
  if (true) {
    //props.user
    return <div>{props.children}</div>;
  } else {
    history.push("/login");
    return <></>;
  }
}

export default IsProtected;
