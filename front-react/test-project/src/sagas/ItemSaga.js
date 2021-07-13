import {put, takeEvery, select} from 'redux-saga/effects'
import getItems from '../fetchAPI/getItems'
import getTotal from '../fetchAPI/getTotal'
import addItems from '../fetchAPI/addItems'
import updateItems from '../fetchAPI/updateItems'
import deleteItems from '../fetchAPI/deleteItems'
import searchItems from '../fetchAPI/searchItems'
import searchPaginate from '../fetchAPI/searchPaginate'
import searchPaginate2 from '../fetchAPI/searchPaginate2'
import paginateItems from '../fetchAPI/paginateItems'
import getCategory from '../fetchAPI/getCategorys'
import payItem from '../fetchAPI/payItem'
import listPays from '../fetchAPI/listPays'
import * as types from '../constant'
import { payItemAction, searchItemAction } from '../actions/ItemPageActions'


function* getListItem(){
	try {
		const totalRecord = yield getTotal()
		const totalPage = Math.ceil(totalRecord.length / 5)
		console.log(totalPage)
		const res = yield getItems()
		console.log(res)
		yield put({
			type: types.GET_ITEM_SUCCESS,
			payload: res
		})
		yield put({
			type: types.GET_TOTALITEM_SUCCESS,
			payload: totalPage
		})
	} catch(error) {
		yield put({
			type:types.GET_ITEM_FAILURE,
			payload: {
				errorMessage: error.message
			}
		})
	}
}

function* getListCategory(){
	try {
		const res = yield getCategory()
		console.log(res)
		yield put({
			type: types.GET_CATEGORY_SUCCESS,
			payload: res
		})
	} catch(error) {
		yield put({
			type:types.GET_CATEGORY_FAILURE,
			payload: {
				errorMessage: error.message
			}
		})
	}
}

function* payItems(action){
	try {
		const res = yield payItem(action.idBook,action.nameCustom,action.phone,action.address,action.count)
		console.log(res)
		yield put({
			type: types.PAY_ITEM_SUCCESS,
			payload: res
		})
		yield put({
			type: types.GET_ITEM_REQUEST,
			payload: res
		})
	} catch(error) {
		yield put({
			type:types.PAY_ITEM_FAILURE,
			payload: {
				errorMessage: error.message
			}
		})
	}
}

function* addItemAction(action){
	try {
		yield addItems(action.payload,action.name,action.pay,action.category)
		yield put({
			type: types.ADD_ITEM_SUCCESS
		})
		yield put({
			type: types.GET_ITEM_REQUEST
		})
	} 
	catch(error) {
		yield put({
			type:types.ADD_ITEM_FAILURE,
			payload: {
				errorMessage: error.message
			}
		})
	}
}

function* updateItemAction(action){
	try {
		const textSearch = yield select((state)=> state.items.textSearch)
		yield updateItems(action.id,action.link,action.name,action.pay,action.num)
		const res =  yield searchItems(action.payload)
		console.log(action)
		yield put({
			type: types.UPDATE_ITEM_SUCCESS
		})
		
		console.log(action.payload)
		console.log(res)
		if (textSearch !== "") {
			// yield put({
			// 	type: types.SEARCH_ITEM_REQUEST,
			// 	payload: textSearch
			// })
			const page =  Number(yield select((state)=>{
				return state.items.actionPage
			}))
			console.log('page:'+page)
			const res2 = yield searchPaginate2(textSearch,page)
			console.log(res)
			yield put({
				type: types.SEARCH_ITEMPAGINATE2_SUCCESS,
				payload:res2
			})
		} else {
			yield put({
				type: types.GET_ITEM_REQUEST
			})
		}
	} 
	catch(error) {
		yield put({
			type:types.UPDATE_ITEM_FAILURE,
			payload: {
				errorMessage: error.message
			}
		})
	}
}

function* deleteItemAction(action){
	try {
		const {textSearch} = yield select((state) => {
			return state.items
		})
		yield deleteItems(action.payload)
		yield put({
			type: types.DELETE_ITEM_SUCCESS
		})
		// yield put({
		// 	type: types.GET_ITEM_REQUEST
		// })
		const res =  yield searchItems(action.textSearch)
		console.log(res)
		if (textSearch !== "") {
			yield put({
				type: types.SEARCH_ITEM_REQUEST,
				payload: textSearch
			})
		}
	} 
	catch(error) {
		yield put({
			type:types.DELETE_ITEM_FAILURE,
			payload: {
				errorMessage: error.message
			}
		})
	}
}

function* searchItem(action) {
	try{
		const total =  yield searchPaginate(action.payload)
		console.log(total)
		const totalPage = Math.ceil(total.length / 5)
		console.log(totalPage)
		const res = yield searchItems(action.payload)
		console.log(res)
		yield put({
			type:types.SEARCH_ITEM_SUCCESS,
			payload: res
		})
		yield put({
			type: types.SEARCH_ITEMPAGINATE_SUCCESS,
			payload: totalPage
		})
	}
	catch(error) {
		yield put({
			type: types.SEARCH_ITEM_FAILURE,
			payload:{
				errorMessage:error.message
			}
		})
	}
}

function* paginateItem(action) {
	try{
		const textSearch = yield select((state)=> state.items.textSearch)
		
		if(textSearch !== ''){
			const res2 = yield searchPaginate2(textSearch,action.page)
			yield put({
				type: types.SEARCH_ITEMPAGINATE2_SUCCESS,
				payload:res2
			})
		}else {
			const res =  yield paginateItems(action.payload,action.page)
			yield put({
				type:types.PAGINATE_ITEM_SUCCESS,
				payload: res
		})
		}
	}
	catch(error) {
		yield put({
			type: types.PAGINATE_ITEM_FAILURE,
			payload:{
				errorMessage:error.message
			}
		})
	}
}

function* getListPay(){
	try {
		
		const res = yield listPays()
		console.log(res)
		yield put({
			type: types.GET_PAY_SUCCESS,
			payload: res
		})
	} catch(error) {
		yield put({
			type:types.GET_PAY_FAILURE,
			payload: {
				errorMessage: error.message
			}
		})
	}
}

export const ItemSaga = [
	takeEvery(types.GET_ITEM_REQUEST, getListItem),
	takeEvery(types.ADD_ITEM_REQUEST, addItemAction),
	takeEvery(types.UPDATE_ITEM_REQUEST, updateItemAction),
	takeEvery(types.DELETE_ITEM_REQUEST, deleteItemAction),
	takeEvery(types.SEARCH_ITEM_REQUEST, searchItem),
	takeEvery(types.PAGINATE_ITEM_REQUEST, paginateItem),
	takeEvery(types.SEARCH_ITEMPAGINATE_REQUEST, searchPaginate),
	takeEvery(types.SEARCH_ITEMPAGINATE2_REQUEST,searchPaginate2),
	takeEvery(types.GET_CATEGORY_REQUEST,getListCategory),
	takeEvery(types.PAY_ITEM_REQUEST,payItems),
	takeEvery(types.GET_PAY_REQUEST, getListPay)
];