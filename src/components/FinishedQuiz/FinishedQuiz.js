import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>
                        1. 
                    </strong>
                    how
                    <span className={'fa fa-times ' + classes.error}/>
                </li>
                <li>
                    <strong>
                        1. 
                    </strong>
                    how
                    <span className={'fa fa-check ' + classes.success}/>
                </li>
            </ul>
            <p>
                Correct 4 of 10
            </p>
            <div>
                <button>
                    repeat
                </button>
            </div>
        </div>
    )
}

export default FinishedQuiz;