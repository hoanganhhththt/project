import * as types from '../constant'
const DEFAULT_STATE = {
	//lưu dữ liệu
	listItem: [],
	//dự liệu tìm nạp
	dataFetched: false,
	//đang tìm nạp dữ liệu
	isFetching: false,
	// lỗi
	error: false,
	// lời nhắn lỗi
	errorMessage: null,
	dataSave:1,
	textSearch:'',
	actionPage:1,
	listCategory: [],
	listPay:[]
}

export default (state = DEFAULT_STATE, action) =>{
	switch (action.type) {
		case types.GET_ITEM_REQUEST:
		return {
			...state,
			isFetching: true, 
		}
		case types.GET_ITEM_SUCCESS:
		return {
			...state,
			isFetching: false,
			dataFetched: true,
			error: false,
			errorMessage: null,
			listItem: action.payload,
		}
		case types.GET_ITEM_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		case types.GET_CATEGORY_REQUEST:
		return {
			...state,
			isFetching: true, 
		}
		case types.GET_CATEGORY_SUCCESS:
		return {
			...state,
			isFetching: false,
			dataFetched: true,
			error: false,
			errorMessage: null,
			listCategory: action.payload,
		}
		case types.GET_CATEGORY_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		case types.GET_PAY_REQUEST:
		return {
			...state,
			isFetching: true, 
		}
		case types.GET_PAY_SUCCESS:
		return {
			...state,
			isFetching: false,
			dataFetched: true,
			error: false,
			errorMessage: null,
			listPay: action.payload,
		}
		case types.GET_PAY_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		case types.GET_TOTALITEM_REQUEST:
		return {
			...state,
			isFetching: true
		}
		case types.GET_TOTALITEM_SUCCESS:
		return {
			...state,
			isFetching: false,
			dataFetched: true,
			error: false,
			errorMessage: null,
			dataSave: action.payload
		}
		case types.GET_TOTALITEM_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		case types.ADD_ITEM_REQUEST:
			console.log(action.payload)
		return {
			...state,
			isFetching: true,
			dataSave: action.payload
		}
		case types.ADD_ITEM_SUCCESS:
			console.log(action.payload)
		return{
			...state,
			isFetching:false,
			dataFetched: true,
			error: false,
			errorMessage: null
		}
		case types.ADD_ITEM_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		case types.PAY_ITEM_REQUEST:
			console.log(action.idBook,action.nameCustom,action.phone,action.address,action.count)
		return {
			...state,
			isFetching: true,
			dataSave: action.payload
		}
		case types.PAY_ITEM_SUCCESS:
			console.log(action.payload)
		return{
			...state,
			isFetching:false,
			dataFetched: true,
			error: false,
			errorMessage: null
		}
		case types.PAY_ITEM_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		case types.UPDATE_ITEM_REQUEST:
			console.log(action.payload)
			console.log(action.id)
		return {
			...state,
			isFetching: true
		}
		case types.UPDATE_ITEM_SUCCESS:
			console.log(action.payload)
		return{
			...state,
			isFetching:false,
			dataFetched: true,
			error: false,
			errorMessage: null
		}
		case types.UPDATE_ITEM_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		case types.DELETE_ITEM_REQUEST:
			console.log(action.id)
		return {
			...state,
			isFetching: true,
			dataSave: action.id
		}
		case types.DELETE_ITEM_SUCCESS:
			console.log(action.id)
		return{
			...state,
			isFetching:false,
			dataFetched: true,
			error: false,
			errorMessage: null
		}
		case types.DELETE_ITEM_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		case types.SEARCH_ITEM_REQUEST:
			console.log(action.payload)
			console.log(action.search)
		return {
			...state,
			isFetching: true,
			textSearch: action.payload
		}
		case types.SEARCH_ITEM_SUCCESS:
			console.log(action.payload)
		return{
			...state,
			isFetching:false,
			dataFetched: true,
			error: false,
			errorMessage: null,
			listItem: action.payload
		}
		case types.SEARCH_ITEM_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		case types.SEARCH_ITEMPAGINATE_REQUEST:
			console.log(action.payload)
			console.log(action.search)
		return {
			...state,
			isFetching: true,
			textSearch: action.payload
		}
		case types.SEARCH_ITEMPAGINATE_SUCCESS:
			console.log(action.payload)
		return{
			...state,
			isFetching:false,
			dataFetched: true,
			error: false,
			errorMessage: null,
			dataSave:action.payload
		}
		case types.SEARCH_ITEMPAGINATE_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		case types.SEARCH_ITEMPAGINATE2_REQUEST:
			console.log(action.payload)
			console.log(action.page)
		return {
			...state,
			isFetching: true,
			textSearch: action.payload
		}
		case types.SEARCH_ITEMPAGINATE2_SUCCESS:
			console.log(action.payload)
		return{
			...state,
			isFetching:false,
			dataFetched: true,
			error: false,
			errorMessage: null,
			listItem: action.payload
		}
		case types.SEARCH_ITEMPAGINATE2_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		case types.PAGINATE_ITEM_REQUEST:
			console.log(action.payload)
		return {
			...state,
			isFetching: true,
			actionPage:action.page
		}
		case types.PAGINATE_ITEM_SUCCESS:
			console.log(action.payload)
		return{
			...state,
			isFetching:false,
			dataFetched: true,
			error: false,
			errorMessage: null,
			listItem: action.payload	
		}
		case types.PAGINATE_ITEM_FAILURE:
		return{
			...state,
			isFetching: false,
			error: true,
			errorMessage: action.payload.errorMessage
		}
		default: 
			return state;
	}
}