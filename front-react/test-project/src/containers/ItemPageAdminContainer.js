import React from 'react'
import ItemsAdmin from '../components/ItemsAdmin'
import * as actions from '../actions/ItemPageActions'
import { connect } from 'react-redux'
class ItemPageAdminContainer extends React.Component {
    componentDidMount() {
        this.props.initload()
    }

    render() {
        if(this.props.isFetching){
            console.log("vao day");
            return(
                <img src="https://i.pinimg.com/originals/0a/57/7d/0a577d3e5ef3908b0f0e971b56c1d55d.gif" />
            )
        }   
        else{
        return (
            <ItemsAdmin name="HoangAnh" 
            ham={(data) => { console.log(data) }} 
            hamMoi={(data) => { console.log(data) }}
            totalPage={this.props.items.dataSave}
            truyenDuLieu={(data) => { this.setState({ inputAdd: data }); console.log(this.state.inputAdd) }} 
            textSearch={this.props.items.textSearch}
            {...this.props} />
        );
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state.items.isFetching)
    return {
        items: state.items.listItem,
        totalPage: state.items.dataSave,
        isFetching: state.items.isFetching,
        textSearch:state.items.textSearch,
        categorys:state.items.listCategory,
        pays: state.items.listPay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initload: () => {
            dispatch(actions.getTotalItem())
            dispatch(actions.getListItem())
            dispatch(actions.getListCategory())
            dispatch(actions.getListPay())
        },
        addDispatch: (link,name,pay,category) => {
            dispatch(actions.addItemAction(link,name,pay,category))
        },
        updateDispatch: (id,link,name,pay,category,textSearch,page)=>{
            dispatch(actions.updateItemAction(id,link,name,pay,category,textSearch,page))
        },
        deleteDispatch: (id,textSearch)=>{
            dispatch(actions.deleteItemAction(id,textSearch))
        },
        searchDispatch: (data)=>{
            dispatch(actions.searchItemAction(data))
        },
        search2Dispatch: (data)=>{
            dispatch(actions.searchItemPaginateAction(data))
        },
        paginateDispatch: (limit,page)=>{
            dispatch(actions.paginateItemAction(limit,page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageAdminContainer)
