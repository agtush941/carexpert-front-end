import React, { Component } from "react";
import {Navigate} from 'react-router-dom';

class Permission extends Component {

    render() {
        if(sessionStorage.getItem('userData') !== null && this.props.org === JSON.parse(sessionStorage.getItem('userData')).org){
            return null
        }
            return (<Navigate to= {this.props.route} replace={true} />)
        
    }

}

export default Permission;