import React from 'react';
import ItemAdminContainer from '../containers/ItemPageAdminContainer'

class ItemPage extends React.Component {

    render() {
        return (
            <div className="ItemPage">
                <a href = '/' > Chuyen sang trang chu </a>
                {JSON.parse(sessionStorage.getItem("dn")) ?  
                <ItemAdminContainer /> : <h1>Ban khong phai la admin</h1>}
                
            </div>
        );
    }
}
export default ItemPage