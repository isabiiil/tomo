function timeMinus(num) {
    const date = Date.now();
    const day = new Date(date);
    day.setHours(day.getHours()-num)
    return day;
}
export const data = [
    {name:'Sleep', details: '8 Hours 💤', timestamp: timeMinus(200)},
    {name:'Activities', details: ['Classes 📚', 'Basketball 🏀', 'Coding 💻'], timestamp: timeMinus(156.7 )},
    {name:'Mood', details: 'Sleepy 😴', timestamp: timeMinus(130.87)},
    {name:'Energy Levels', details: '9/10 😄', timestamp: timeMinus(116.4)},
    {name:'Medications', details: ['Med #1 🟡', 'Med #2 🔵', 'Med #3 ⚪'], timestamp: timeMinus(103)},
    {name:'Symptoms', details: 'Symptom 😪', timestamp: timeMinus(98)},
];