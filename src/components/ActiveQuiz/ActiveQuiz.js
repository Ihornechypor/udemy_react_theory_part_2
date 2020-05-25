import React from 'react'
import classes from './ActiveQuiz.module.css'

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

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
)



export default ActiveQuiz