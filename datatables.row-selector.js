(function ($, document, window) {
    'use strict';

    var rowSelector = function (actionOnSelection) {

        var _lastRow;

        var _context = this.context;

        var _select = function (event) {
            var currentRow = $(this);
            if (!_lastRow)
                _lastRow = currentRow;

            if (event.shiftKey && _lastRow.hasClass('selected')) {
                var start = Math.min(currentRow.index(), _lastRow.index());
                var end = Math.max(currentRow.index(), _lastRow.index());
                _selectRows(start, end);
            } else {
                _selectRow(currentRow);
            }
            _clearTextSelectionMask();
            _lastRow = currentRow;
        }

        var _selectRows = function (start, end) {
            var innerContext = new $.fn.dataTable.Api(_context);
            innerContext.rows(function (index) {
                return index >= start && index <= end ? true : false;
            }).eq(0).each(function (index) {
                var row = $(innerContext.row(index).node())
                if (!row.hasClass('selected'))
                    _selectRow(row);
            });
        }

        var _selectRow = function (row) {
            row.toggleClass('selected');
            if (actionOnSelection)
                actionOnSelection(row);
        }

        var _clearTextSelectionMask = function () {
            if (window.getSelection) {
                if (window.getSelection().empty) // Chrome
                    window.getSelection().empty();
                else if (window.getSelection().removeAllRanges) // Firefox
                    window.getSelection().removeAllRanges();
            } else if (document.selection) { // IE?
                document.selection.empty();
            }
        }

        $(this.rows().nodes()).on("click", _select);
    };

    $.fn.dataTable.Api.register('rowSelector()', rowSelector);
})(jQuery, document, window);