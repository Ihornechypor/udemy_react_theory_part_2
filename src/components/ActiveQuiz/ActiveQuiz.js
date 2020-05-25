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
                How are you 
            </span>
            
            <small>
                4 of 12
            </small>
        </p>
        <ActiveAnswersList
            listAnswers={props.listAnswers}
        
        /> 
    </div>
)



export default ActiveQuiz