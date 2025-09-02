// let time = 0;
//         let maxTime = 3600; 
//         let countingDown = false;
//         function formatTime(seconds) {
//             let hours = Math.floor(seconds / 3600);
//             let minutes = Math.floor((seconds % 3600) / 60);
//             let secs = seconds % 60;
//             return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
//         }
//         function updateTimer() {
//             if (!countingDown) {
//                 time++; 
//                 if (time >= maxTime) {
//                     countingDown = true;
//                 }
//             } else {
//                 time--; 
//                 if (time <= 0) {
//                     countingDown = false; 
//                 }
//             }
//             document.getElementById("timer").textContent = formatTime(time);
//         }
//         setInterval(updateTimer, 1000);



// let time = 0, maxTime = 3600, countingDown = false;  
// setInterval(() => { time = countingDown ? --time : ++time; countingDown = time >= maxTime ? true : time <= 0 ? false : countingDown; document.getElementById("timer").textContent = `${String(Math.floor(time / 3600)).padStart(2, '0')}:${String(Math.floor((time % 3600) / 60)).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`; }, 1000);


let time = 0, maxTime = 3600, countingDown = false;  
function updateTimer() {  
    time = countingDown ? --time : ++time;  
    countingDown = time >= maxTime ? true : time <= 0 ? false : countingDown;  
    document.getElementById("timer").textContent = `${String(Math.floor(time / 3600)).padStart(2, '0')}:${String(Math.floor((time % 3600) / 60)).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`;  
    setTimeout(updateTimer, 1000);  
}  
setTimeout(updateTimer, 1000);
