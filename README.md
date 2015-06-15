datatables.row-selector
========

Plugin for [DataTables](https://datatables.net/) that allows the selection of multiple rows pressing the shift key.

_rowSelector()_ admits a function with a _row_ parameter that executes when a row is selected.

Please note that for the plugin to work properly, the server-side pagination option must be enabled as this plugin relies on the rows indexes. Feel free to contribute by adding client-side selection.

Example:

``` javascript
$('#my-table').DataTable().rowSelector(function(row) { alert("Row " + row.index()) });
```