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
    if (myDate.year !== null) returnDate.setFullYear(myDate.year);
    if (myDate.month !== null) returnDate.setMonth(myDate.month - 1);
    if (myDate.day !== null) returnDate.setDate(myDate.day);
    if (myDate.hour !== null) returnDate.setHours(myDate.hour);
    if (myDate.minute !== null) returnDate.setMinutes(myDate.minute);
    if (myDate.second !== null) returnDate.setSeconds(myDate.second);
    return returnDate;
}

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