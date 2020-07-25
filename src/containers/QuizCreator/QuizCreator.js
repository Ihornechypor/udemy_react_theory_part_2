import React, {Component} from 'react';
import classes from './QuizCreator.module.css'
import Button from "../../components/UI/Button/Button";

export default class QuizCreator extends Component {
    addQuestionHandler = () =>{

    }

    createQuizHandler = () => {

    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>
                        Quiz Creator
                    </h1>

                    <form
                        onSubmit={this.submitHandler}
                        noValidate
                    >
                        <hr/>

                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>



                        <select></select>

                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}
                        >
                            Add question
                        </Button>

                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                        >
                            Create test
                        </Button>

                    </form>
                </div>
            </div>
        );
    }
}
