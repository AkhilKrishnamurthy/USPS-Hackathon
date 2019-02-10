import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import ChartDisplayPage from './ChartPage/ChartPage';
import ChartLanding from './ChartPage/ChartLanding';

class Main extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <Route exact path="/" component={Login}/> 
                <Route exact path="/login" component={Login}/>  
                <Route exact path="/ChartDisplayPage" component={ChartDisplayPage}/>
                <Route exact path="/ChartLanding" component={ChartLanding}/>                                
            </div>
        )
    }
}

export default Main;