const initialState = {

    bgcolor: 'grey'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "CHANGE_BACKGROUND_COLOR":
            return { ...state, ...payload }

        default:
            return state
    }
}
