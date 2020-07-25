import React, {Component} from 'react';
import classes from './QuizCreator.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Select from "../../components/UI/Select/Select";
import {createControl} from '../../form/formFramework'

function createOptionControl(number) {
    return createControl({
        label: `var ${number}`,
        errorMessage: 'question is empty',
        id: number,
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'enter question',
            errorMessage: 'question is empty'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }

}


export default class QuizCreator extends Component {
     state = {
         quiz: [],
         rightAnswerID: 1,
         formControls: createFormControls()
     }

    addQuestionHandler = () =>{

    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {

    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    renderInputs(){
        return Object.keys(this.state.formControls).map((controlName, index)=>{
            const control = this.state.formControls[controlName]

            return (
                <Auxiliary key={controlName + index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => {this.changeHandler(event.target.value, controlName)}}
                    />
                    { index === 0 ? <hr/> : null }
                </Auxiliary>
            )
        })
    }

    selectChangeHandler = event => {
         this.setState({
             rightAnswerID: +event.target.value
         })
    }


    render() {
        const select = <Select
            label="chose right question"
            value={this.state.rightAnswerID}
            onChange={this.selectChangeHandler}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4}
            ]}
        />
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

                        {this.renderInputs()}

                        {select}

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
