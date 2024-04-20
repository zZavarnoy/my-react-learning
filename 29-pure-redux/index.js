import store from "./redux/store.js"
import {addCurrentTime, clearTimes} from "./redux/actionCreators.js"


const addTimeBtn = document.getElementById("addTime")
const clearTimesBtn = document.getElementById("clearTimes")
const timesList = document.getElementById("timesList")

addTimeBtn.addEventListener("click", () => {
    store.dispatch(addCurrentTime())
})

clearTimesBtn.addEventListener("click", () => {
    store.dispatch(clearTimes())
})

store.subscribe(() => {
    timesList.innerHTML = ""
    const times = store.getState()
    times.forEach(time => {
        const el = document.createElement("li")
        el.innerText = time
        timesList.appendChild(el)
    });
})




// const unsuscribe = store.subscribe(() => console.log(`Redux store just chaged ${store.getState()}`))

// store.dispatch({
//     type: "ADD_CURRENT_TIME",
//     payload: "11:30:00"
// })

// unsuscribe()

// store.dispatch({
//     type: "ADD_CURRENT_TIME",
//     payload: "11:31:00"
// })

// store.dispatch({
//     type: "CLEAR_ALL_TIMES"
// })

