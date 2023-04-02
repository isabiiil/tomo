function timeMinus(num) {
    const date = Date.now();
    const day = new Date(date);
    day.setHours(day.getHours()-num)
    return day;
}
export const data = [
    {name:'sleep', details: '8 hours', timestamp: timeMinus(200)},
    {name:'factors', details: ['lorem','ipsum'], timestamp: timeMinus(156.7 )},
    {name:'mood', details: 'lorem', timestamp: timeMinus(130.87)},
    {name:'energy levels', details: 'lorem', timestamp: timeMinus(116.4)},
    {name:'medications', details: ['lorem', 'ipsum', 'dolorum'], timestamp: timeMinus(103)},
    {name:'symptoms', details: 'lorem', timestamp: timeMinus(98)},
];