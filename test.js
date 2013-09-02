test( "date test", function() {
    var tests = [];
    for(var year=0;year<4;year++)
    for(var month=1;month<12;month++)
        for(var day=1;day<31;day++)
        tests.push(["dd/mm/YY", (day < 10 ? "0"+day : day)+"/"+(month < 10 ? "0"+month : month)+"/"+year, new Date(Date.prototype.setFullYear(year, month-1, day))]);

    for(var year=10;year<14;year++)
    for(var month=1;month<12;month++)
        for(var day=1;day<31;day++)
        tests.push(["dd mm YY", (day < 10 ? "0"+day : day)+" "+(month < 10 ? "0"+month : month)+" "+year, new Date(Date.prototype.setFullYear(year, month-1, day))]);

    for(var year=20;year<24;year++)
    for(var month=1;month<12;month++)
        for(var day=1;day<31;day++)
        tests.push(["dd-mm-YY", (day < 10 ? "0"+day : day)+"-"+(month < 10 ? "0"+month : month)+"-"+year, new Date(Date.prototype.setFullYear(year, month-1, day))]);

    for(var year=100;year<104;year++)
    for(var month=1;month<12;month++)
        for(var day=1;day<31;day++)
        tests.push(["YYYY/mm/dd", "0"+year+"/"+(month < 10 ? "0"+month : month)+"/"+(day < 10 ? "0"+day : day), new Date(Date.prototype.setFullYear(year, month-1, day))]);

    for(var year=2000;year<2004;year++)
    for(var month=1;month<12;month++)
        for(var day=1;day<31;day++)
        tests.push(["mm/dd/YYYY", (month < 10 ? "0"+month : month)+"/"+(day < 10 ? "0"+day : day)+"/"+year, new Date(Date.prototype.setFullYear(year, month-1, day))]);

    for(var year=2020;year<2024;year++)
    for(var month=1;month<12;month++)
        for(var day=1;day<31;day++)
        tests.push(["dd/mm/YYYY", (day < 10 ? "0"+day : day)+"/"+(month < 10 ? "0"+month : month)+"/"+year, new Date(Date.prototype.setFullYear(year, month-1, day))]);

    var a = null;
    for(var i=0;i< tests.length; i++) {
        ok(dateFormat(tests[i][0], tests[i][1]).toString() === (tests[i][2]).toString(), tests[i][1] + ": Failed!");
    }
});
