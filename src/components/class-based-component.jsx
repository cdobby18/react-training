import { Component } from "react";

class ClassBasedComponent extends Component {
  // state
  state = {
    showText: false,
    changeColor: false,
    count : 0,
    changeCountStyle : false
  };

  handleClick = () => {
    console.log("button clicked");

    const {showText, changeColor} = this.state;

    this.setState({
        showText: !showText,
        changeColor: !changeColor,
    })
  };

  // componentDidMount runs once after first render
  componentDidMount() {
    console.log("This runs once on page load");

    this.setState({
        showText : !this.state.showText,
        changeColor : !this.setState.changeColor
    })
  }

  handleCount = () => {
    this.setState({
        ...this.state,
        count : this.state.count + 1
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevState, this.state);

    if(prevState && prevState.count !== this.state.count && this.state.count === 10){
        this.setState({
            ...this.state,
            changeCountStyle : true,
        });
    }
  }

  componentWillUnmount(){
    console.log('component is getting unmounted');
  }

  render() {
    const { showText, changeColor, count, changeCountStyle } = this.state;

    console.log(changeCountStyle)
    return (
      <div>
        {showText && (
          <h4 style={{ color: changeColor ? "red" : "black" }}>
            Grocery Check
          </h4>
        )}
        <button onClick={this.handleClick}>TRY ME</button>
        <button onClick={this.handleCount}>Increase Count Value</button>
        <h3 style = {{color: changeCountStyle ? 'blue' : 'white', fontSize : changeCountStyle ? '30px' : '12px'}}>Count is {count}</h3>
      </div>
    );
  }
}

export default ClassBasedComponent;
