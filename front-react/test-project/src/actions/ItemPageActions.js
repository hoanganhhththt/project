import * as types from '../constant'

export function getListItem(payload) {
    console.log(payload)
    return ({
        type: types.GET_ITEM_REQUEST,
        payload
    })
}

export function getListCategory(payload) {
    console.log(payload)
    return ({
        type: types.GET_CATEGORY_REQUEST,
        payload
    })
}

export function getTotalItem(payload) {
    console.log(payload)
    return ({
        type: types.GET_TOTALITEM_REQUEST,
        payload
    })
}

export function addItemAction(link,name,pay,category) {
    console.log(link,name,pay,category)
    return ({
        type: types.ADD_ITEM_REQUEST,
        // payload: payload
        payload: link,
        name:name,
        pay:pay,
        category:category
    })
}

export function updateItemAction(id,link,name,pay,num,textSearch,page) {
    console.log(link,name,pay,num)
    console.log(id)
    console.log(textSearch)
    return ({
        type: types.UPDATE_ITEM_REQUEST,
        // payload: payload
        link: link,
        id: id,
        name:name,
        pay:pay,
        num:num,
        payload:textSearch,
        page:page
    })
}

export function deleteItemAction(payload,textSearch) {
    console.log(payload)
    return({
        type: types.DELETE_ITEM_REQUEST,
        payload: payload,
        textSearch: textSearch
    })
}

export function searchItemAction(payload) {
    console.log(payload)
    return({
        type: types.SEARCH_ITEM_REQUEST,
        payload: payload
    })
}

export function searchItemPaginateAction(payload) {
    console.log(payload)
    return({
        type: types.SEARCH_ITEMPAGINATE_REQUEST,
        payload: payload
    })
}

export function searchItemPaginateAction2(payload,page) {
    console.log(payload)
    return({
        type: types.SEARCH_ITEMPAGINATE2_REQUEST,
        payload: payload,
        page: page
    })
}

export function paginateItemAction(limit,page) {
    console.log(limit,page)
    return({
        type: types.PAGINATE_ITEM_REQUEST,
        payload:limit,
        page:page
    })
}

export function getListPay(payload) {
    return({
        type: types.GET_PAY_REQUEST,
        payload
    })
}

export function payItemAction(idBook,nameCustom,phone,address,count){
    console.log(idBook,nameCustom,phone,address,count)
    return({
        type: types.PAY_ITEM_REQUEST,
        idBook:idBook,
        nameCustom:nameCustom,
        phone:phone,
        address:address,
        count:count
    })
}