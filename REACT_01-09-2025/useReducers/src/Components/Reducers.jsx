export const Reducers = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        case 'IncrementByValue':
            return { count: state.count + action.payload };
        case 'DecrementByValue':
            if (state.count - action.payload <= 0) {
                return { count: 0 };
            } else {
                return { count: state.count - action.payload };
            }
        default:
            break;
    }
}
