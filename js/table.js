
d3.csv("data/uz_table.csv").then(function(data) {
    
    data.forEach(element => {
        element.avrg_contract_value = +element.avrg_contract_value;
        element.avrg_contract_value = element.avrg_contract_value.toFixed(2);
    });


    var datatable = $('#table').DataTable({
        pageLength: 10,
        order: [[1, "desc"]],
        responsive: true,
        autoWidth: false,
        sortable: true,
        language: {
             "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Ukrainian.json"
        },
        'createdRow': function(row){
            $('td:eq(0)', row).attr('data-label', 'Назва компанії');
            $('td:eq(1)', row).css('text-align', 'center').attr('data-label', 'Виграних аукціонів');
            $('td:eq(2)', row).css('text-align', 'center').attr('data-label', 'Wіна оренди вагона, грн/доба');
            $('td:eq(3)', row).css('text-align', 'center').attr('data-label', 'Зафрахтованих відправлень');
        },
        data: data,
        columns: [            
            { data:  function ( d, type, row ) {
                return '<a href="https://ring.org.ua/edr/uk/company/'+d.suppliers_id+'" target="_blank">'+d.suppliers_name+'</a>'}}, 
            { data:  function ( d, type, row ) {
                return '<a href="https://ring.org.ua/edr/uk/company/'+d.contracts_numb+'" target="_blank">'+d.contracts_numb+'</a>'}}, 
            { data:  function ( d, type, row ) {
                return '<a href="https://ring.org.ua/edr/uk/company/'+d.avrg_contract_value+'" target="_blank">'+d.avrg_contract_value+'</a>'}},   
            { data:  function ( d, type, row ) {
                return '<a href="https://ring.org.ua/edr/uk/company/'+d.tot_wagons+'" target="_blank">'+d.tot_wagons+'</a>'}}         
        ]
        });
});



