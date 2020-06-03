import React, {Component} from 'react';
import classes from './Layout.module.css';
import MemuTogle from '../../components/Navigation/MemuTogle/MemuTogle'


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