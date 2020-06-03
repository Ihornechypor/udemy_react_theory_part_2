import React, {Component} from 'react';
import classes from './Layout.module.css';
import MemuTogle from '../../components/Navigation/MemuTogle/MemuTogle'
import Drower from '../../components/Navigation/Drower/Drower'

 
class Layout extends Component {
    state = {
        menu: false
    }

    toggleMenuHadler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    render(){
        return (  
            <div className={classes.Layout}>
                <Drower
                    isOpen={this.state.menu} 
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

export default Layout