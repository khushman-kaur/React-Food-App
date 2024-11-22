import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      count: 0,
      count2: 3,
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;

    console.log("Render");
    return (
      <div className="userName">
        <h3>{name}</h3>
        <h4>Count:{count}</h4>
        <h4>Count2:{count2}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Click{" "}
        </button>
        <h4>Location</h4>
        <h3>Socials</h3>
      </div>
    );
  }
}

export default UserClass;
