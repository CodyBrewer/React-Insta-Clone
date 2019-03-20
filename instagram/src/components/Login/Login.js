import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';
//TODO STYLE
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    inputChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    loginSubmitHandler = e => {
        const user = this.state.username;
        const pass = this.state.password;
        localStorage.setItem('user', user);
        localStorage.setItem('pass', pass);
        window.location.reload();
    }

    render(){
        return(
            <Form className="login-form">
                <FormGroup>
                    <Input type="text" 
                        name="username" 
                        placeholder='username'
                        value={this.state.username}
                        onChange = {this.inputChangeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Input type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange = {this.inputChangeHandler}    
                    />
                </FormGroup>
                <Button color="primary"
                    size="medium"
                    onClick={this.loginSubmitHandler}>
                    Login
                </Button>
            </Form>
        )
    }
}

export default Login;