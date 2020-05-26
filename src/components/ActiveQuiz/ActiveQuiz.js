import React from 'react'
import classes from './ActiveQuiz.module.css'
import ActiveAnswersList from './ActiveAnswersList/ActiveAnswersList'

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.ActiveQuizQuestion}>
            <span>
                <b>
                    2.&nbsp;
                </b>
                {props.listQuestion}
            </span>
            
            <small>
                4 of 12
            </small>
        </p>
        <ActiveAnswersList
            listAnswers={props.listAnswers}
            onListAnswerClick={props.onListAnswerClick}
    
        /> 
    </div>
)



export default ActiveQuiz