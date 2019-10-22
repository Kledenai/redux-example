import React from "react";
import { bindActionCreators } from "redux";
import * as todoActions from "../../store/actions/todos";

export default function List() {
  return (
    <>
      <ul>
        <li>Item do todo</li>
      </ul>

      <input type="text" />
      <button>Novo todo</button>
    </>
  );
}
