import React, {Component} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

//Define a Login Component
class Login extends Component{
    //call the constructor method
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            username : "",
            password : "",
            authFlag : false
        }
        //Bind the handlers to this class
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            authFlag : false
        })
    }
    //username change handler to update state variable with the text entered by the user
    usernameChangeHandler = (e) => {
        this.setState({
            username : e.target.value
        })
    }
    //password change handler to update state variable with the text entered by the user
    passwordChangeHandler = (e) => {
        this.setState({
            password : e.target.value
        })
    }
    //submit Login handler to send a request to the node backend
    submitLogin = (e) => {
        var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
      
        console.log(this.state.username);
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        const data = {
            username : this.state.username,
            password : this.state.password
        }
        //make a post request with the user data
        axios.post('http://localhost:3001/login',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    this.setState({
                        authFlag : true
                    })
                }else{
                    this.setState({
                        authFlag : false
                    })
                }
            });
    }

    render(){
        //redirect based on successful login
        let redirectVar = null;
        if(cookie.load('cookie')){
            redirectVar = <Redirect to= "/profile"/>
        }
        return(
            <div class="login_page_gray">
                {redirectVar}
            <div className="container">
                
                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                             {/* <p>NEED AN ACCOUNT?<Link to="/signup"> SIGN UP</Link></p> */}
                        </div>
                        <div className="border">
                        <p className="pull-left">ACCOUNT LOGIN</p>
                        <hr/>
                            <div className="form-group">
                                <input onChange = {this.usernameChangeHandler} type="text" className="form-control" name="username" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input onChange = {this.passwordChangeHandler} type="password" className="form-control" name="password" placeholder="Password"/>
                            </div>
                            <p className="pull-left"><a href = "#">Forgot Password?</a></p>
                            <button onClick = {this.submitLogin} className="btn btn-success">Login</button>
                           <input type="checkbox" className="pull-left"/><p className="pull-left">Keep me signed in</p>
                            <hr/>
                            {/* <button className="btn btn-primary">Login with Facebook</button> */}
                            {/* <button type="button" class="btn btn-default">Login with Google</button>      */}
                            </div>            
                    </div> 
                </div>
            </div>
            </div>
        )
    }
}
//export Login Component
export default Login;