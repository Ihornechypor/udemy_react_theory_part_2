import React, {Component} from 'react';
import classes from './Layout.module.css';
import MemuTogle from '../../components/Navigation/MemuTogle/MemuTogle'
import Drower from '../../components/Navigation/Drower/Drower'
import {connect} from "react-redux";

 
class Layout extends Component {
    state = {
        menu: false
    }

    toggleMenuHadler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render(){
        return (  
            <div className={classes.Layout}>
                <Drower
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                    isLogined={this.props.isLogined}
                />

                <MemuTogle 
                    onTogle={this.toggleMenuHadler}
                    isOpen={this.state.menu}
                />
                <main> 
                    { this.props.children }
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLogined: !!state.auth.token
    }
}

export default connect(mapStateToProps, null)(Layout)