import * as actionTypes from "../constants/actionTypes";

const url = "http://jsonplaceholder.typicode.com/posts";

const onDataSuccess = listData => {
    return {
        type: actionTypes.SET_DATA,
        listData
    }
}


export const onDataUpdate = updateData => {
    return {
        type: actionTypes.UPDATE_DATA,
        updateData
    }
}

/**
 * getListData is to fetch the data from server 
 * then check status and returns the json data
 */
export const getListData = () => {
    return dispatch => {
        fetch(url)
        .then(response => {
            if(response.status === 200) return response.json();
            else return Promise.reject(response.json())
        }).then((response)=>{
            dispatch(onDataSuccess(response))
        })
        .catch(error => {
            return Promise.reject({error, status:error.statusText});
        })
    }
}

