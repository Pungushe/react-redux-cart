export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item 
    }    
};
// удалить товар
export const DLT = (id) => {
    return {
        type: "RMW_CART",
        payload: id
    }
};

// удалить индивидуальный товар
export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
};
