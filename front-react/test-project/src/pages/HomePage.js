import React from 'react';
import ItemContainer from '../containers/ItemPageContainer'


class HomePage extends React.Component {
    render() {
        return ( 
            <div className = "HomePage"> 
            <ItemContainer />
            </div >
        );
    }
}
export default HomePage