date.js
=====

dateFormat
-----
Creates a new date from a string based on the given matching format.
It works like PHP date_create_from_format function.

Usage:

```
dateFormat("dd/mm/YYYY HH:ii:ss", "12/10/2013 16:30:55");
"Sat Oct 12 2013 16:30:55 GMT-0300 (ART)"
```

formatDate
-----
Formats a date based on given format.
It works like PHP date function.

Usage:

```
formatDate(new Date, "dd/mm/YYYY HH:ii:ss");
"31/08/2013 15:54:36"
```

