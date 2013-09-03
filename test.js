test("Format String to Date test", function() {
    var tests = [];
    var date = null;
    for(var year=0;year<4;year++)
        for(var month=1;month<6;month++)
            for(var day=1;day<15;day++)
                for(var hour=12;hour<14;hour++){
                    date = new Date(Date.prototype.setFullYear(year, month-1, day));
                    date.setHours(hour);
                    tests.push(["dd/mm/YY HH", (day < 10 ? "0"+day : day)+"/"+(month < 10 ? "0"+month : month)+"/0"+year+" "+hour, date]);
                }
    for(var year=10;year<14;year++)
        for(var month=6;month<12;month++)
            for(var day=15;day<30;day++)
                for(var minu=12;minu<14;minu++) {
                    date = new Date(Date.prototype.setFullYear(year, month-1, day));
                    date.setHours(14);
                    date.setMinutes(minu);
                    tests.push(["dd mm YY HH:ii", (day < 10 ? "0"+day : day)+" "+(month < 10 ? "0"+month : month)+" "+year+" 14:"+minu, date]);
                }

    for(var year=20;year<24;year++)
        for(var month=1;month<6;month++)
            for(var day=1;day<15;day++) {
                date = new Date(Date.prototype.setFullYear(year, month-1, day));
                tests.push(["dd-mm-YY", (day < 10 ? "0"+day : day)+"-"+(month < 10 ? "0"+month : month)+"-"+year, date]);
            }

    for(var year=100;year<104;year++)
        for(var month=6;month<12;month++)
            for(var day=1;day<15;day++){
                date = new Date(Date.prototype.setFullYear(year, month-1, day));
                tests.push(["YYYY/mm/dd", "0"+year+"/"+(month < 10 ? "0"+month : month)+"/"+(day < 10 ? "0"+day : day), date]);
            }

    for(var year=2000;year<2004;year++)
        for(var month=1;month<6;month++)
            for(var day=15;day<31;day++){
                date = new Date(Date.prototype.setFullYear(year, month-1, day));
                tests.push(["mm/dd/YYYY", (month < 10 ? "0"+month : month)+"/"+(day < 10 ? "0"+day : day)+"/"+year, date]);
            }

    for(var year=2020;year<2024;year++)
        for(var month=6;month<12;month++)
            for(var day=1;day<15;day++){
                date = new Date(Date.prototype.setFullYear(year, month-1, day));
                tests.push(["dd/mm/YYYY", (day < 10 ? "0"+day : day)+"/"+(month < 10 ? "0"+month : month)+"/"+year, date]);
            }

    for(var i=0;i< tests.length; i++) {
        ok(dateFormat(tests[i][0], tests[i][1]).toString() === (tests[i][2]).toString(), (tests[i][1]).toString() + ": Failed!");
    }
});




test("Format Date to String test", function() {
    var tests = [];
    var format = "dd/mm/YY HH:ii:ss";
    var date = null;
    for(var year=0;year<4;year++)
        for(var month=1;month<6;month++)
            for(var day=1;day<15;day++)
                for(var hour=12;hour<14;hour++){
                    date = new Date(Date.prototype.setFullYear(year, month-1, day));
                    date.setHours(hour);
                    output = (day < 10 ? "0"+day : day)+"/"+(month < 10 ? "0"+month : month)+"/"+year+" "+hour+":00:00";
                    tests.push([date, format, output]);
                }
    
    tests.push([new Date(1789, 6, 11), "DD MM dd mm YYYY HH:ii:ss", "Saturday July 11 07 1789 00:00:00"]);
    tests.push([new Date(1929, 9, 24), "DD MM dd mm YYYY HH:ii:ss", "Thursday October 24 10 1929 00:00:00"]);
    tests.push([new Date(2001, 8, 11), "DD MM dd mm YYYY HH:ii:ss", "Tuesday September 11 09 2001 00:00:00"]);
    
    for(var i=0;i< tests.length; i++) {
        ok(formatDate(tests[i][0], tests[i][1]) === tests[i][2], "Failed!, Expected: " + tests[i][2] + " But found " + formatDate(tests[i][0], tests[i][1]));
    }
    
});
