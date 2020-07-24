import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'email',
                errorMessage: 'Enter right email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }

            },
            password: {
                value: '',
                type: 'password',
                label: 'password',
                errorMessage: 'Enter right password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }


    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    onChangeHandler = (e, controlName) => {
        console.log(`${controlName}`, e.target)
    }

    renderInputs(){
        return Object.keys(this.state.formControls).map((controlName, index)=>{
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChage={e => this.onChangeHandler(e,controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>
                        Auth
                    </h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        { this.renderInputs()}
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
