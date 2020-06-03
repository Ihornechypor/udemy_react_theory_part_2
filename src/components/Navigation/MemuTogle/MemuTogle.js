import React from 'react'
import classes from './MemuTogle.module.css'

const MemuTogle = props => {

    const cls = [
        classes.MemuTogle,
        'fa'
    ]
    if(props.isOpen){
        cls.push('fa-times')
        cls.push(classes.open)
        console.log(classes.open)
    } else {
        cls.push('fa-bars')
    }

    return (
        <span 
            className={cls.join(' ')}
            onClick={props.onTogle}
        />
    )
} 
export default MemuTogle