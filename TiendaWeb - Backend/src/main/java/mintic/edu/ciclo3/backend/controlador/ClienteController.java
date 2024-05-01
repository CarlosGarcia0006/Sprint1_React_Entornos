/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mintic.edu.ciclo3.backend.controlador;

import java.util.List;
import mintic.edu.ciclo3.backend.modelo.Cliente;
import mintic.edu.ciclo3.backend.modelo.ClienteDto;
import mintic.edu.ciclo3.backend.modelo.Tipodocumento;
import mintic.edu.ciclo3.backend.modelo.Usuario;
import mintic.edu.ciclo3.backend.modelo.UsuarioDto;
import mintic.edu.ciclo3.backend.repositorio.TipodocumentoRepositorio;
import mintic.edu.ciclo3.backend.servicio.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/clientes")
public class ClienteController {

    /*
	 * inyectamos el la iterface del servicio para acceder 
           a los metodos del negocio
	 **/
    @Autowired
    ClienteService clienteService;
    
    @Autowired
    TipodocumentoRepositorio tipoDocumento;

    // Listar los Tipos de Documento
    @GetMapping("/tipoDocumento")
    public List<Tipodocumento> cargarTipo(){
        return tipoDocumento.findAll();
    }
    // Listar los usuarios
    @GetMapping("/list")
    public List<Cliente> cargarUsuarios(){
        return clienteService.getClientes();
    }
    
    // Buscar por Id
    @GetMapping("/list/{id}")
    public Cliente buscarPorId(@PathVariable Long id) {
        return clienteService.buscarCliente(id);
    }
        
    // Agregar un Usuario
    @PostMapping("/")
    public Cliente agregar(@RequestBody ClienteDto clienteDto) {
        return clienteService.nuevoCliente(clienteDto);
    }
    
    // Actualizar el Usuario
    @PutMapping("/")
    public Cliente editar(@RequestBody ClienteDto clienteDto) {
        return clienteService.nuevoCliente(clienteDto);
    }
    
    // Eliminar el Usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<Cliente> eliminar(@PathVariable Long id) {
    	Cliente obj = clienteService.buscarCliente(id);
    	if(obj != null) {
        	clienteService.borrarCliente(id);
    	}else {
    		return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
    	}
		return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    

}
