import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

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
                        <Input
                            label="email"
                        />
                        <Input
                            label="password"
                            errorMessage="test"
                        />

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
