datatables.row-selector
========

Plugin for [DataTables](https://datatables.net/) that allows the selection of multiple rows pressing the shift key.

_rowSelector()_ admits a function with a _row_ parameter that executes when a row is selected.

Please note that for the plugin to work properly, the rows should have the same order in which have been retrieved from server. It's recommended
to disable the sorting option in order to avoid malfunction.
Furthermore, if server-side pagination is enabled, additional processing will be needed to set 'selected' class to rows previously selected.

Example:

``` javascript
$('#my-table').DataTable().rowSelector(function(row) { alert("Row " + row.index()) });
```