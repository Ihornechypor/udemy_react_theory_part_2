import React from 'react'
import classes from './ActiveQuiz.module.css'
import ActiveAnswersList from './ActiveAnswersList/ActiveAnswersList'


const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.ActiveQuizQuestion}>
            <span>
                <b>
                    {props.listAnswersNumber}.&nbsp;
                </b>
                {props.listQuestion}
            </span>
            
            <small>
                {props.listAnswersNumber} of {props.listAnswersLen}
            </small>
        </p>
        
        <ActiveAnswersList
            ckickedAnswerState={props.ckickedAnswerState}
            listAnswers={props.listAnswers}
            onListAnswerClick={props.onListAnswerClick}
    
        /> 
    </div>
)



export default ActiveQuiz