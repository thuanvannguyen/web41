import { Component } from "react";

class Child extends Component {
  //  khong co state khong can constructor

  componentWillUnmount() {
    alert("Bye bye!")
  }


  render() {
    return (
      <h1>Child component</h1>
    )
  }
}

export default Child


// Thuc
// Duc
// Binh