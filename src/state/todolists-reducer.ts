import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const TodolistsReducer = (state: TodolistType[], action: TsarTypeAction): TodolistType[] => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(el => el.id !== action.payload.todolistId)
        }
        case "ADD-TODOLIST": {
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payload.newTitle, filter: 'all'};
            return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(el => el.id === action.payload.todolistId ? {...el, title: action.payload.newTitle} : el)
        }
        // case "CHANGE-TODOLIST-FILTER": {
        //     // return state.filter()
        // }
        default:
            return state
    }

}

type TsarTypeAction = removeTodolistACType | addTodolistACType | changeTodoListTitleACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId
        }
    } as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (newTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            newTitle
        }

    } as const
}

type changeTodoListTitleACType = ReturnType<typeof changeTodoListTitleAC>
export const changeTodoListTitleAC = (todolistId: string, newTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistId,
            newTitle
        }

    } as const
}

// type ChangeFilterACType = ReturnType<typeof ChangeFilterAC>
// export const ChangeFilterAC = (todolistId: string, filter: string) => {
//     return {
//         type: 'CHANGE-TODOLIST-FILTER',
//         payload: {
//             todolistId,
//             filter
//         }
//
//     } as const
// }