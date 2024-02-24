//using class based component here in About page.
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namastey react web series.</h2>
//         </div>         
//     )
// }

import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namastey react web series.</h2>
                <UserContext.Consumer>
                    { ({loggedInUser}) => <h3>User context {loggedInUser}</h3>
                    }
                </UserContext.Consumer>
                <UserClass name={'First'} location={'Faridabad'}></UserClass>
            </div>                            
        )
    }
}

export default About;