import * as actionTypes from "../actions/actionTypes"

const initialState = {
    listData : [],
    selectedData: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_DATA:
            return {
                ...state,
                listData: [...action.listData]
            }
        case actionTypes.UPDATE_DATA:
            let updateData = {...action.updateData};
            let listData = [...state.listData];
            listData[updateData.id - 1] = updateData;
            let modifiedData = { ...state, listData };
            saveDataInSession(modifiedData)
            return modifiedData
            default:
                return state;
    }

}


function saveDataInSession(data){
    sessionStorage.setItem('task', JSON.stringify(data));
}
export default reducer;