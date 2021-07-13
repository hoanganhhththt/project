import React from 'react'
import Items from '../components/Items'
import * as actions from '../actions/ItemPageActions'
import { connect } from 'react-redux'
class ItemPageContainer extends React.Component {
    componentDidMount() {
        this.props.initload()
    }

    render() {
        if(this.props.isFetching){
            console.log("vao day");
            console.log(this.props.totalPage)
            return(
                <img src="https://i.pinimg.com/originals/0a/57/7d/0a577d3e5ef3908b0f0e971b56c1d55d.gif" />
            )
        }   
        else{
        return (
            <Items name="HoangAnh" 
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
    console.log(state)
    return {
        items: state.items.listItem,
        totalPage: state.items.dataSave,
        isFetching: state.items.isFetching,
        textSearch:state.items.textSearch,
        categorys:state.items.listCategory    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initload: () => {
            dispatch(actions.getTotalItem())
            dispatch(actions.getListItem())
            dispatch(actions.getListCategory())
        },
        addDispatch: (link,name,pay,category) => {
            dispatch(actions.addItemAction(link,name,pay,category))
        },
        updateDispatch: (id,link,name,pay,category)=>{
            dispatch(actions.updateItemAction(id,link,name,pay,category))
        },
        deleteDispatch: (id)=>{
            dispatch(actions.deleteItemAction(id))
        },
        searchDispatch: (data)=>{
            dispatch(actions.searchItemAction(data))
        },
        paginateDispatch: (limit,page)=>{
            dispatch(actions.paginateItemAction(limit,page))
        },
        payDispatch:(idBook,nameCustom,phone,address,count)=>{
            dispatch(actions.payItemAction(idBook,nameCustom,phone,address,count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)
// container phát action cho redux store và lắng nghe trạng thái dữ liêu từ store