function loadData(){
    let request = sendRequest('api/clientes/list', 'GET', '')
    let table = document.getElementById('clientes-table');
    table.innerHTML = "";
    request.onload = function(){
        
        let data = request.response;
        console.log(data);
        data.forEach((element, index) => {
            table.innerHTML += `
                <tr>
                    <th>${element.id}</th>
                    <td>${element.idTipoDocumento.tipo}</td>
                    <td>${element.numeroDocumento}</td>
                    <td>${element.nombre}</td>
                    <td>${element.email}</td>
                    <td>${element.telefono}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = 
                        "form_clientes.html?idcliente=${element.id}"'>Ver</button>
                    </td>
                </tr>

                `
        });
    }
    request.onerror = function(){
        table.innerHTML = `
            <tr>
                <td colspan="5">Error al recuperar los datos.</td>
            </tr>
        `;
    }
}

function loadDataTipo(){
    let request = sendRequest('api/clientes/tipoDocumento', 'GET', '')
    let $tipo = document.getElementById('cliente-tipodocumento')
    request.onload = function(){
        
        let data = request.response;
        console.log(data);
        let elementos = '<option selected disables>--Seleccione--</option>'
        for(let i = 0;i < data.length; i++){
            elementos += '<option value="' + data[i].id +'" >' + data[i].tipo +'</option>'
        }
        $tipo.innerHTML = elementos
        console.log($tipo);
        listaTipo = data;
        console.log(listaTipo);
    }
    request.onerror = function(){
        table.innerHTML = `
            <tr>
                <td colspan="5">Error al recuperar los datos.</td>
            </tr>
        `;
    }
}

function loadCliente(idcliente){
    let request = sendRequest('api/clientes/list/'+idcliente, 'GET', '')
    let id = document.getElementById('cliente-id')
    let documento = document.getElementById('cliente-documento')
    let tipdoc = document.getElementById('cliente-tipodocumento')
    let nombre = document.getElementById('cliente-nombre')
    let direccion = document.getElementById('cliente-direccion')
    let email = document.getElementById('cliente-email')
    let telefono = document.getElementById('cliente-telefono')
      request.onload = function(){
        
        let data = request.response;
        id.value = data.id
        documento.value = data.numeroDocumento
        tipdoc.value = data.idTipoDocumento.id
        nombre.value = data.nombre
        direccion.value = data.direccion
        email.value = data.email
        telefono.value = data.telefono
    }
    request.onerror = function(){
        alert("Error al recuperar los datos.");
    }
}
function saveCliente(){
    let email = document.getElementById('cliente-email').value
    let id = document.getElementById('cliente-id').value
    let documento = document.getElementById('cliente-documento').value
    let tipdoc = document.getElementById('cliente-tipdoc').value
    let nombres = document.getElementById('cliente-nombres').value
    let apellidos = document.getElementById('cliente-apellidos').value
    let direccion = document.getElementById('cliente-direccion').value
    let data = {'idcliente': id,'documento':documento,'tipdoc': tipdoc, 'nombres': nombres, 
        'apellidos': apellidos, 'direccion': direccion, 'email':email }
    let request = sendRequest('api/clientes/', id ? 'PUT' : 'POST', data)
    request.onload = function(){
        window.location = 'clientes.html';
    }
    request.onerror = function(){
        alert('Error al guardar los cambios.')
    }
}

function deleteCliente(){
    let id = document.getElementById('cliente-id').value
    let request = sendRequest('api/clientes/'+ id , 'DELETE', '')
    request.onload = function(){
        alert('Registro Eliminado Exitosamente.')
        window.location = 'clientes.html';
    }
    request.onerror = function(){
        alert('Error al guardar los cambios.')
    }
}

