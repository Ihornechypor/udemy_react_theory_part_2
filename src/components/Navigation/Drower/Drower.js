import React, {Component} from 'react'
import classes from './Drower.module.css'

const links = [
    1,2,3
]


class Drower extends Component {
    renderLinks() {
        return links.map((link,index)=>{
            return (
                <li key="index">
                    <a>link {link}</a>
                </li>
            )
        })
    }
    render(){
        const cls = [classes.Drower];

        if(!this.props.isOpen){
            cls.push(classes.close)
        }

        return(
            <nav className={cls.join(' ')}>
                <ul>
                   {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

export default Drower