// Data table init()
var data = [{
    "sl": "1",
    "camRef": "1234",
    "brn": "JER",
    "Exch_code": "051",
    "recidency": "NONITALY",
    "OrderType": "PE",
    "alloc": "2",
    "status": "MSM",
    "tradeDate": "12/11/14",
    "SettDate": "9/12/12",
    "auth": ""
}, {
    "sl": "2",
    "camRef": "1235677",
    "brn": "LON",
    "Exch_code": "051",
    "recidency": "NONITALY",
    "OrderType": "PE",
    "alloc": "2",
    "status": "MSM",
    "tradeDate": "12/12/14",
    "SettDate": "9/12/12",
    "auth": ""
}];

var table;
$(document)
    .ready(
        function () {
            table = $('#example')
                .DataTable({
                    "searching": true,
                    "responsive": true,
                    data: data,
                    columns: [
                        {
                            orderable: false,
                            targets: 0,
                            "sTitle": "<input type='checkbox' id='selectall' class='selectall' onclick='toggleCheck(this)'></input>",
                            "mDataProp": null,
                            "sWidth": "20px",
                            "sDefaultContent": "<input type='checkbox' class='case'></input>",
                            "bSortable": false

												},
                        {
                            data: 'camRef',
                            "render": function (data,
                                type, row, meta) {
                                if (type === 'display') {

                                    data = data +
                                        '<span href="#" class="glyphicon glyphicon-resize-full pop btn-calender-table" pageTitle="View" pageName="dialog.html"></span>';
                                }

                                return data;
                            }
												},
                        {
                            data: 'brn'
												},
                        {
                            data: 'Exch_code'
												},
                        {
                            data: 'recidency'
												},
                        {
                            data: 'OrderType'
												},
                        {
                            data: 'alloc'
												},
                        {
                            data: 'status',
                            "render": function (data, type, row, meta) {
                                if (type === 'display') {
                                    data = '<a class="pop" id ="pop" pageTitle="Edit" pageName="edit.html">' + data + '</a>';
                                }

                                return data;
                            }
												},
                        {
                            data: 'tradeDate',
                            "render": function (data, type, row, meta) {
                                if (type === 'display') {
                                    data = data +
                                        '<span class="glyphicon glyphicon-pencil btn-calender-table"></span>';
                                }

                                return data;
                            }
												},
                        {
                            data: 'SettDate',
                            "render": function (data, type, row, meta) {
                                if (type === 'display') {
                                    data = data +
                                        '<span class="glyphicon glyphicon-pencil btn-calender-table"></span>';
                                }

                                return data;
                            }
												}, {
                            data: 'auth'
												}],
                    select: {
                        style: 'multi',
                        selector: 'tr',
                        info: false

                    },
                    order: [[1, 'asc']]

                });
            table.clear().draw();
            table.rows.add(data).draw();

            $('#example tbody').on('click', 'tr', function () {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                    $(this).find('td:first > input.case').prop('checked', false);
                } else {
                    $(this).addClass('selected');
                    $(this).find('td:first >input.case').prop('checked', true);
                }
            });
        });

function toggleCheck(event) {
    $('table#example tbody tr').each(function () {
        if (event.checked) {
            $(this).find('td:first >input.case').prop('checked', true);
            $(this).addClass('selected');
        } else {
            $(this).removeClass('selected');
            $(this).find('td:first > input.case').prop('checked', false);
        }

    })
}

function myCallbackFunction(updatedCell, updatedRow, oldValue) {
    console.log("The new value for the cell is: " + updatedCell.data());
    console.log("The old value for that cell was: " + oldValue);
    console.log("The values for each cell in that row are: " +
        updatedRow.data());
}


function Count() {
    //debugger;
    var row = table.rows('.selected').data().toArray().length
    alert('Count' + row);
}
