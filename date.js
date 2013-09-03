/*******************************************************************************
 * Returns a new Date set on given parameters.
 * 
 * @param {String}
 *            A valid format. PHP date standard.
 * @param {String}
 *            The date to be parsed
 * @returns {Date}
 */
function dateFormat(format, strdate) {
    var expr = /(dd|mm|YYYY|YY|HH|ii|ss)/g,
        pieces = format.match(expr),
        myDate = {};
    if (pieces !== null)
        while (pieces.length > 0) {
            curr = pieces.pop();
            myDate[curr] = (parseInt(strdate.substring(format.indexOf(curr), (format.indexOf(curr) + curr.length)),10)||null);
        }
    var returnDate = new Date;
    returnDate.setFullYear (
        (myDate.YY||myDate.YYYY||0),
        ((myDate.mm||1)-1),
        (myDate.dd||0)
    );
    returnDate.setHours(myDate.HH||0);
    returnDate.setMinutes(myDate.ii||0);
    returnDate.setSeconds(myDate.ss||0);
    return returnDate;
}

/*******************************************************************************
 * Formats a given date with the given format output.
 * 
 * @param {Date}
 *            date.
 * @param {String}
 *            format. Valid format. PHP date standard.
 * @returns {String}
 */
function formatDate(date, format) {
    var expr = /(DD|dd|MM|mm|YYYY|YY|HH|ii|ss)/g,
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        pieces = format.match(expr),
        map = function(obj, type) {
            switch (type) {
                case 'DD':
                    return days[obj.getDay()];
                case 'dd':
                    var d = obj.getDate();
                    return (d < 10) ? "0" + d : d;
                case 'MM':
                    return months[obj.getMonth()];
                case 'mm':
                    var m = (obj.getMonth() + 1);
                    return (m < 10) ? "0" + m : m;
                case 'YYYY':
                case 'YY':
                    return obj.getFullYear();
                case 'HH':
                    var h = obj.getHours();
                    return (h < 10) ? "0"+h : h;
                case 'ii':
                    var i = obj.getMinutes();
                    return (i < 10) ? "0"+i : i;
                case 'ss':
                    var s = obj.getSeconds();
                    return (s < 10) ? "0"+s : s;
            }
            return null;
        },
        myDate = format;
    if (pieces !== null)
        while (pieces.length > 0) {
            curr = pieces.pop();
            myDate = myDate.replace(curr, map(date, curr));
        }
    return myDate;
}
