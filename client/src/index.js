import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MonsterConnect } from "./components/MonsterConnect";


// Where the whole page renders
class Page extends React.Component {
  render() {
    return (
      <div className="full-page">
        <div className="Title-area">
          <h1>{this.props.name}</h1>
        </div>
        <Head />
        <MonsterConnect />
      </div>
    );
  }
}


class Head extends React.Component {
  render() {
    return (
      <head>
        <title>Monster Hunter Index</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
      </head>
    )
  }
}


ReactDOM.render(
  <Page name="Monster Hunter Index" />,
  document.getElementById("root")
)

