import React from 'react'
import classes from './ActiveAnswersItem.module.css'


const ActiveAnswersItem = props => {
    const cls =[classes.ActiveAnswersItem]
    if(props.ckickedAnswerState){
        cls.push(classes[props.ckickedAnswerState])
    }

    return (
        <li 
            className={cls.join(' ')}
            onClick={()=> props.onListAnswerClick(props.ActiveAnswers.id)}
        >
            { props.ActiveAnswers.text }
        </li>
    )
}

export default ActiveAnswersItem