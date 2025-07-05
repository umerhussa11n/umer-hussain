// show a digital clock that refreshes every second.. 

// clarifying questions 
// do we want just time or date too? 
// is this format sufficient? HH:MM:SS

// outline 

// Create a function that returns currentTime in this format HH:MM:SS
// Call this function every second to refresh the time
// Modify this and pass it a format like 12hours to change it from 24 hours format.. 
// find complexity i.e. space complexity and time complexity 


const getTime = () =>  {
    //const time = new Date(new Date().getTime()) //TODO: change this to return time in required format 
    // const time = new Date().toLocaleTimeString()
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const seconds = new Date().getSeconds()

    return hours + ":" + minutes + ":" + seconds
}

setInterval(() => console.log(getTime()), 1000)