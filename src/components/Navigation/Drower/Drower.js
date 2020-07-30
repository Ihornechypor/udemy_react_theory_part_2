import React, {Component} from 'react'
import classes from './Drower.module.css'
import {NavLink} from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop'


class Drower extends Component {

    clickHandler = () => {
        this.props.onClose();
    }

    renderLinks(links) {
        return links.map((link,index)=>{
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        className={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>                   
            )
        })
    }
    render(){
        const cls = [classes.Drower];

        if(!this.props.isOpen){
            cls.push(classes.close)
        }

        const links = [
            {to: '/', label: 'List', exact: true}
        ]

        if(this.props.isLogined) {
            links.push({to: '/quiz-creator', label: 'Quiz creator', exact: false})
            links.push({to: '/logout', label: 'Exit', exact: false})
        } else {
            links.push({to: '/auth', label: 'Authorization', exact: false})
        }

        return(
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                    {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
                
            </React.Fragment>
        )
    }
}

export default Drower