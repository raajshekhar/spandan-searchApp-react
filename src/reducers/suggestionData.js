import * as actionTypes from "../constants/actionTypes"

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
            return modifiedData
            default:
                return state;
    }

}


export default reducer;