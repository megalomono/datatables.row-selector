datatables.row-selector
========

Plugin for [DataTables](https://datatables.net/) that allows the selection of multiple rows pressing the shift key.

_rowSelector()_ admits a function with a _row_ parameter that executes when a row is selected.

Please note that for the plugin to work properly, the 'ordering' option must be disabled as this plugin relies on the rows indexes. Furthermore, if server-side pagination is enabled, additional processing will be needed to set 'selected' class to rows previously selected.

Example:

``` javascript
$('#my-table').DataTable().rowSelector(function(row) { alert("Row " + row.index()) });
```