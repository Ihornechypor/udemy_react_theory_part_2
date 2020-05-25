import React, {Component} from 'react'
import classes from './Quiz.module.css'
 
class Quiz extends Component {

    state = {
        quiz: []
    }

    render(){
        return(
            <div className={classes.Quiz}>
                <h2>
                    quiz
                </h2>

            </div>
        )
    }
}

export default Quiz