(function ($, document, window) {
    'use strict';

    var rowSelector = function (actionOnSelection) {

        var _lastRow;

        var _context =  new $.fn.dataTable.Api(this.context);

        var _selectRow = function (row) {
            row.toggleClass('selected');
            if (actionOnSelection)
                actionOnSelection(row);
        }

        var _selectRows = function (start, end) {
            _context.rows(function (index) {
                return index >= start && index <= end;
            }).eq(0).each(function (index) {
                var row = $(_context.row(index).node())
                if (!row.hasClass('selected'))
                    _selectRow(row);
            });
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

        var _select = function (event) {
            var currentRow = $(this);
            if (!_lastRow)
                _lastRow = currentRow;

            if (event.shiftKey && _lastRow.hasClass('selected')) {
                var currentIndex = _context.rows(currentRow).eq(0)[0];
                var lastIndex = _context.rows(_lastRow).eq(0)[0];
                var start = Math.min(currentIndex, lastIndex);
                var end = Math.max(currentIndex, lastIndex);
                _selectRows(start, end);
            } else {
                _selectRow(currentRow);
            }
            _clearTextSelectionMask();
            _lastRow = currentRow;
        }

        $(this.rows().nodes()).on("click", _select);
    };

    $.fn.dataTable.Api.register('rowSelector()', rowSelector);
})(jQuery, document, window);