import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);

    //console.log(props);  - it contains name and location from the parent.

    this.state = {
        count:0,
        count2:2
    }
  }

  render() {
    const {name, location} = this.props;
    const {count, count2}  = this.state;
    return (
        <div>
            <h2>User</h2>
            <button onClick={()=> {
                this.setState(
                    {
                        count: this.state.count+1,
                    }
                )
            }}>
                Click button
            </button>
            <h3>{count}</h3>
        </div>
    )
  }
}

export default UserClass;
