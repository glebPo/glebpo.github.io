$.extend({
    setGrid: function(response) {
        $("#jsGrid").jsGrid({
            width: "100%",
            height: "400px",

            inserting: false,
            editing: false,
            sorting: true,
            paging: false,

            data: response,

            fields: [
                { name: "name", title: "Название",  type: "text", width: 150 },
                { name: "count", title: "Количество", type: "number", width: 50 },
                { name: "size", title: "Размер", type: "number", width: 50 },
                { name: "price", title: "Цена", type: "text"},
            ]
        });
    }
});
$(document).ready(function() {
    $.ajax({
        url: "JSON/balance.json",
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function(data) {
            $.setGrid(data);
        }
    });
});




