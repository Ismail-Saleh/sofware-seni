const initialState = {
    is_loading :false ,
    fetched : false,
    error  : null,
    search:[]
}

const search= (state=initialState,action)=>{
    switch (action.type) {
        case 'GET_REPO_PENDING':
            return {...state,is_loading:true,fetched:false}
     
        case 'GET_REPO_FULFILLED':
            return {...state,is_loading:false,fetched:true, search:action.payload.data} 

        case 'GET_REPO_REJECTED':
            return {...state,is_loading:false,error:action.payload}
     
    
        default:
            break;
    }
    
    return state;
}

export default search