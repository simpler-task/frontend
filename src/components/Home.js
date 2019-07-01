import React from "react";

export default class Home extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem("AUTH_TOKEN")) {
      this.props.history.push("/login");
    } else {
      this.props.history.push("/task");
    }
  }
  logout() {
    localStorage.clear();
  }
  render() {
    return <div />;
  }
}
