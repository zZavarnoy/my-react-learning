function getCurrentTime() {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0")
    const min = now.getMinutes().toString().padStart(2, "0")
    const sec = now.getSeconds().toString().padStart(2, "0")

    const curentTime = `${hours}:${min}:${sec}`
    return curentTime
}

export default getCurrentTime