import { ADD_LIST } from "../type"
let initState = {
    commit: []
}

function reducer(state, actions) {
    switch (actions.type) {
        case ADD_LIST:
            //去重
            let d = state.commit.some(item => item.id == actions.obj.id)
            if (!d) {
                state.commit.push(actions.obj)
            }

            return {
                ...state,
                commit: [...state.commit]
            }
        default:
            {
                return {
                    ...state,
                    commit: [...state.commit]
                }
            }
    }
}
export {
    reducer,
    initState

}