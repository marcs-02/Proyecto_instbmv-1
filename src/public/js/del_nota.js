$(document).ready( function () {
    
    $(".btn-eliminar").click(function (e){

        let $this = $(this);

        const response = confirm("¿Estás Seguro de Eliminar la Nota?");

        if(response){

            const id = $this.data("id")

            $.ajax({

                url: '/nota/del',
                type: 'DELETE',
                data: {id}

            }).done(function(){
                window.location.href = "/principal"
            }).fail(function(e) {
                alert( "Error al eliminar " + e.responseJSON.mensaje );
            })

        }


    })
})