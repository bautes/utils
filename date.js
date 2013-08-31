/***
 * Returns a new Date set on given parameters.
 * @param {String} A valid format. PHP date standard.
 * @param {String} The date to be parsed
 * @returns {Date}
 */
function dateFormat(format, strdate) {
    var expr = /(dd|mm|YYYY|YY|HH|ii|ss)/g,
    pieces = format.match(expr),
    map = function (type) {
        switch (type){
            case 'dd':
                return 'day';
            case 'mm':
                return 'month';
            case 'YYYY':
            case 'YY':
                return 'year';
            case 'HH':
                return 'hour';
            case 'ii':
                return 'minute';
            case 'ss':
                return 'second';
        }
        return null;
    },
    myDate = {day:null,month:null,year:null,hour:null,minute:null,second:null};
    if(pieces !== null)
    while (pieces.length > 0) {
        curr = pieces.pop();
        myDate[map(curr)] = (parseInt(strdate.substring(
            format.indexOf(curr),
            (format.indexOf(curr) + curr.length)
        ),10)||null);
    }
    var returnDate = new Date;
    returnDate.setFullYear((myDate.year !== null ? myDate.year : 0));
    returnDate.setMonth((myDate.month !== null ? (myDate.month - 1) : 0));
    returnDate.setMonth((myDate.month !== null ? (myDate.month - 1) : 0));
    returnDate.setDate((myDate.day !== null ? myDate.day : 0));
    returnDate.setHours((myDate.hour !== null ? myDate.hour : 0));
    returnDate.setMinutes((myDate.minute !== null ? myDate.minute : 0));
    returnDate.setSeconds((myDate.second !== null ? myDate.second : 0));
    return returnDate;
}

/***
 * Formats the given date with the corresponding format.
 * @param {Date} date.
 * @param {String} format. Valid format. PHP date standard.
 * @returns {String}
 */
function formatDate(date, format) {
    var expr = /(dd|mm|YYYY|YY|HH|ii|ss)/g,
    pieces = format.match(expr),
    map = function (obj, type) {
        switch (type){
            case 'dd':
                return obj.getDate();
            case 'mm':
                var m = (obj.getMonth() + 1);
                return (m < 10) ? "0"+m : m;
            case 'YYYY':
            case 'YY':
                return obj.getFullYear();
            case 'HH':
                return obj.getHours();
            case 'ii':
                return obj.getMinutes();
            case 'ss':
                return obj.getSeconds();
        }
        return null;
    },
    myDate = format;
    if(pieces !== null)
    while (pieces.length > 0) {
        curr = pieces.pop();
        myDate = myDate.replace(curr, map(date, curr));
    }
    
    return myDate;
}