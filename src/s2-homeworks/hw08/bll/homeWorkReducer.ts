import {initialPeople, UserType} from '../HW8'


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


export const homeWorkReducer = (state= initialPeople, action: ActionType): UserType[] => {
    // need to
    // fix any
    switch (action.type) {
        case 'sort': {
            const sortedState = [...state]// by name
            if (action.payload === 'up') {
                return  sortedState.sort((a,b) => a.name > b.name ? 1 : -1)
            } if (action.payload === 'down') {
                return sortedState.sort((a,b) => a.name < b.name ? 1 : -1)
            }
           return sortedState
            // need to fix
        }
        case 'check': {
            return state.filter(s => s.age >= action.payload)// need to fix
        }
        default:
            return state
    }
}

export const sortUpAC = (): ActionType  => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}


