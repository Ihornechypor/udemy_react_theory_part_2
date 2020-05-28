import React from 'react'
import classes from './ActiveAnswersList.module.css'
import ActiveAnswersItem from './ActiveAnswersItem/ActiveAnswersItem'


const ActiveAnswersList = props => (
    <ul className={classes.ActiveAnswersList}>
        {props.listAnswers.map((answer,index)=>{
         
            return (
                <ActiveAnswersItem
                    key={index}
                    ActiveAnswers={answer}
                    onListAnswerClick={props.onListAnswerClick}
                    ckickedAnswerState={props.ckickedAnswerState ? props.ckickedAnswerState[answer.id] : null}
                />
            )
        })}
    </ul>
)

export default ActiveAnswersList