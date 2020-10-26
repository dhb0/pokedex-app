export const searchkeyReducer = (state = "", { type, payload }) => {
    switch(type){
        case "SET_SEARCH_KEY":
            return payload
    }
    return state
};
