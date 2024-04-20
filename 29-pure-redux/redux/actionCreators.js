import getCurrentTime from "../utils/getCurrentTime.js"
import * as actionType from "./actionTypes.js"

export const addCurrentTime = () => {
    return {
        type: actionType.ADD_CURRENT_TIME,
        payload: getCurrentTime()
    }
}

export const clearTimes = () => {
    return {
        type: actionType.CLEAR_ALL_TIMES
    }
}