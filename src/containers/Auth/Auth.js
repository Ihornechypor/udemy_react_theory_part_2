import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";

export default class Auth extends Component {
    loginHandler = () => {

    }


    registerHandler = () => {

    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>
                        Auth
                    </h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <input type="text"/>
                        <input type="text"/>

                        <Button
                            onClick={this.loginHandler}
                            type="success"
                        >
                            Login
                        </Button>
                        <Button
                            onClick={this.registerHandler}
                            type="primary"
                        >
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
