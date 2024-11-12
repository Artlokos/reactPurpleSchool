export const INITIAL_STATE = {
    isValid:{
        post: true,
        title: true,
        date: true
    },
    values:{
        post: undefined,
        title: undefined,
        date: undefined
    },
    isFormReadytoSubmit: false
};

export function formReducer(state, action){
    switch(action.type) {
        case 'RESET_VALIDITY':
            return {...state, isValid: INITIAL_STATE.isValid};

        case 'SUBMIT' : {
            const postValidity = action.payload.title?.trim().length;
            const dateValidity = action.payload.date;
            const titleValidity = action.payload.title?.trim().length;
            return {
                values: action.payload,
                isValid: {
                    post: postValidity,
                    title: titleValidity,
                    date: dateValidity
                },
                isFormReadytoSubmit: titleValidity && postValidity && dateValidity
            };
        };
        // case 'CLEAR':
    }
}