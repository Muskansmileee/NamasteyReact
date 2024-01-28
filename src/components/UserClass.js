import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);

    //console.log(props);  - it contains name and location from the parent.

    this.state = {
        userInfo:{
          name: 'dummy',
          location:'default',
          avatar_url:"default url"
        }
    }
  }

  async componentDidMount(){
    //once class based component is on dom then this will called.
    //it is used to make api calls.
     const data = await fetch("https://api.github.com/users/muskanGupta");
     const json = await data.json();
     this.setState({
        userInfo: json,
     });
  }

  render() {
    const {name, location, avatar_url}  = this.state.userInfo;
    return (
        <div>
            <img className="profile_img" src={avatar_url}/>
            <h2>{name}</h2>
            <h3>{location}</h3>
        </div>
    )
  }
}

export default UserClass;
