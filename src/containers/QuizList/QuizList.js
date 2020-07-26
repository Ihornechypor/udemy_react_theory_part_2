import React, {Component} from 'react';
import classes from './QuizList.module.css'
import {NavLink} from "react-router-dom";
import Loader from "../../components/UI/loader/Loader";
import axios from 'axios';

export default class QuizList extends Component {

    state = {
        quizes: [],
        loading: true

    }

    renderQuizes() {
        return this.state.quizes.map((quiz)=>{
            return(
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>

                </li>
            )
        })
    }

    async componentDidMount() {
        const response = await axios.get('https://react-quiz-f73e1.firebaseio.com/quizes.json');

        const quizes = []

        Object.keys(response.data).forEach((key,index)=>{
            quizes.push({
                id: key,
                name: `Test num ${index + 1}`
            })
        })

        this.setState({
            quizes,
            loading: false

        })
        try{

        } catch(e){

        }
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <h1>
                    Quiz List
                </h1>
                {
                    this.state.loading
                    ? <Loader/>
                    : <ul>{this.renderQuizes()}</ul>

                }
            </div>
        );
    }
}
