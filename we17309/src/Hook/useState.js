

export default function useState(initialState) {
    let state = initialState;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return [getState, setState];
}



