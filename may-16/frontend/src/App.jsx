import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAuthorsFromApi, getUsersFromApi } from "./redux/actions";

import "./App.css";

function AppComponent({ authors, user, getAuthors, getUser }) {
  const [state, setState] = useState("");

  useEffect(() => {
    getAuthors();
  }, [getAuthors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(state);
  };
  return (
    <div className="App">
      <div className="authors">
        <h3>Authors</h3>
        {authors.map((author) => (
          <div className="author">
            <div className="author-name">{author.author}</div>
            <div className="author-book">{author.book}</div>
          </div>
        ))}
      </div>
      <div className="user">
        <h3>User</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter id"
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
        <div className="user-id">{user.id}</div>
        <div className="user-name">{user.name}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authors: state.authors,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthors: () => dispatch(getAuthorsFromApi()),
    getUser: (id) => dispatch(getUsersFromApi(id)),
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
