import React from "react";
import { useHistory } from "react-router";

function IsProtected(props) {
  const history = useHistory();
  if (
    sessionStorage.getItem("token") &&
    sessionStorage.getItem("token").length > 0
  ) {
    return <div>{props.children}</div>;
  } else {
    history.push("/login");
    return <></>;
  }
}

export default IsProtected;