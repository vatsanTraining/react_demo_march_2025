const initialState = {
    size: "12px"
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'CHANGE_FONT_SIZE':
            return { ...state, ...payload }

        default:
            return state
    }
}
