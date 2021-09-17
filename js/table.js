
d3.csv("data/uz_table.csv").then(function(data) {
    
    data.forEach(element => {
        element.avrg_contract_value = +element.avrg_contract_value;
        element.avrg_contract_value = element.avrg_contract_value.toFixed(2);
    });


    var datatable = $('#table').DataTable({
        pageLength: 10,
        order: [[1, "desc"]],
        responsive: true,
        sortable: true,
        language: {
             "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Ukrainian.json"
        },
        'createdRow': function(row){
            $('td:eq(0)', row).css('min-width', '100px');
            $('td:eq(1)', row).css('text-align', 'center');
            $('td:eq(2)', row).css('text-align', 'center');
            $('td:eq(3)', row).css('text-align', 'center');
        },
        data: data,
        columns: [
            /* { data: "suppliers_name" },   */
            { data: null, render: function ( d, type, row ) {
                return '<a href="https://ring.org.ua/edr/uk/company/'+d.suppliers_id+'" target="_blank">'+d.suppliers_name+'</a>'
            }},         
            { data: "contracts_numb" },
            { data: "avrg_contract_value" },
            { data: "tot_wagons" }
        ]
        });
        
        //додаємо дані в таблицю
    /*     datatable.rows.add(data).draw(); */
        



});



