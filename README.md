datatables.row-selector
========

Plugin for [DataTables](https://datatables.net/) that allows the selection of multiple rows pressing the shift key.

_rowSelector()_ admits a function with a _row_ parameter that executes when a row is selected.

Example:

``` javascript
$('#my-table').DataTable().rowSelector(function(row) { alert("Row " + row.index()) });
```