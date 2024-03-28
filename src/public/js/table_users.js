$(document).ready( function () {
    $('#myTable').DataTable({

        "pageLength": 5,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/2.0.1/i18n/es-ES.json"
        },
        "lengthMenu" : [5,10,15,20]


    });
} );