import React from 'react'
import classes from './ActiveAnswersItem.module.css'


const ActiveAnswersItem = props => {
    return (
        <li 
            className={classes.ActiveAnswersItem}
            onClick={()=> props.onListAnswerClick(props.ActiveAnswers.id)}
        >
            { props.ActiveAnswers.text }
        </li>
    )
}

export default ActiveAnswersItem