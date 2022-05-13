import React, { useState } from "react";

import "./InputForm.css";

function InputForm({ cb, title, handleToggle }) {
  const [state, setState] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    cb(state);
    setState({ title: "", body: "" });
    handleToggle();
  };
  return (
    <div className="InputForm">
      <form className="InputForm-form" onSubmit={handleSubmit}>
        <div className="InputForm-close" onClick={() => handleToggle()}>
          <div></div>
          <div></div>
        </div>
        <h3 className="InputForm-title">{title}</h3>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          required
          value={state.title}
          onChange={(e) =>
            setState({
              ...state,
              title: e.target.value,
            })
          }
        />
        <input
          type="text"
          name="body"
          id="body"
          required
          placeholder="Body"
          value={state.body}
          onChange={(e) =>
            setState({
              ...state,
              body: e.target.value,
            })
          }
        />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

// const mapStateToProps = (state) => ({});
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// const InputForm = connect(mapStateToProps, mapDispatchToProps)(InputFormApp);

export default InputForm;
