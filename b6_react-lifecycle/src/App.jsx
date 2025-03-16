import { Component } from "react";
import Child from "./Child";

class App extends Component {
  constructor(props) { // Dung de khai bao toan bo bien o trong nay
    super(props);
    // khai bao state
    this.state = {
      count: 0,
      show: true,
    }
  }

  // Su kien
  handleCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleToogle = () => {
    this.setState({
      show: this.state.show = !this.state.show
    })
  }

  // Method vong doi component
  componentDidMount() { //Mounting
    console.log("Sau khi component khoi tao lan dau tien >> chay vao day!");
    // Call api

  }

  componentDidUpdate(prevProps, prevState) { //Updating
    console.log("Component vua duoc cap nhat");
    // Luu y het suc gay tinh trang vong lap vo tan
    console.log("Gia tri props truoc khi update", prevProps);
    console.log("Gia tri state truoc khi update", prevState);

    console.log("gia tri state hien tai", this.state.count);
  }


  render() {
    console.log("render");
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCount}>Count ++</button>
        <button onClick={this.handleToogle}>Hidden</button>

        {/* Import child */}
       {this.state.show == true &&  <Child/>}
      </>
    );
  }
}
export default App;
