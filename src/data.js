
function timeMinus(num) {
    var date = new Date();
    var day = date.getTime() - num;
    date.setTime(day);
    return date;
}
export const data = [
    {name:'sleep', details: '8 hours', timestamp: timeMinus(17.2 * 24 * 60 * 60 * 1000)},
    {name:'factors', details: ['lorem','ipsum'], timestamp: timeMinus(15.28 * 24 * 60 * 60 * 1000)},
    {name:'mood', details: 'lorem', timestamp: timeMinus(13.08 * 24 * 60 * 60 * 1000)},
    {name:'energy levels', details: 'lorem', timestamp: timeMinus(11.64 * 24 * 60 * 60 * 1000)},
    {name:'medications', details: ['lorem', 'ipsum', 'dolorum'], timestamp: timeMinus(8.40 * 24 * 60 * 60 * 1000)},
    {name:'symptoms', details: 'lorem', timestamp: timeMinus(5.12 * 24 * 60 * 60 * 1000)},

];