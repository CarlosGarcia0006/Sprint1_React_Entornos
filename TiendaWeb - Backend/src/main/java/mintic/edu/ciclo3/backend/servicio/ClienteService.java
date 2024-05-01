/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mintic.edu.ciclo3.backend.servicio;

import java.util.List;
import mintic.edu.ciclo3.backend.modelo.Cliente;
import mintic.edu.ciclo3.backend.modelo.ClienteDto;
import mintic.edu.ciclo3.backend.modelo.Tipodocumento;
import mintic.edu.ciclo3.backend.modelo.Usuario;
import mintic.edu.ciclo3.backend.repositorio.ClienteRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Usuario
 */
@Service
@Transactional
public class ClienteService implements IClienteService {

    @Autowired
    ClienteRepositorio clienteRepositorio;

    @Override
    public List<Cliente> getClientes() {
        return clienteRepositorio.findAll();
    }

    @Override
    public Cliente nuevoCliente(ClienteDto clienteDto) {
        Cliente cliente = new Cliente();
        Tipodocumento td = new Tipodocumento();
        td.setId_tipodocumento(clienteDto.getIdTipoDocumento());

        if (clienteDto.getId() != null) {
            cliente.setId(clienteDto.getId());
        }

        cliente.setIdTipoDocumento(td);
        cliente.setNumeroDocumento(clienteDto.getNumeroDocumento());
        cliente.setNombre(clienteDto.getNombre());
        cliente.setDireccion(clienteDto.getDireccion());
        cliente.setEmail(clienteDto.getEmail());
        cliente.setTelefono(clienteDto.getTelefono());
        return clienteRepositorio.save(cliente);
        
    }

    @Override
    public Cliente buscarCliente(Long id) {
        Cliente cliente = null;
        cliente = clienteRepositorio.findById(id).orElse(null);
        if (cliente == null) {
            return null;
        }
        return cliente;
    }

    @Override
    public int borrarCliente(Long id) {
        clienteRepositorio.deleteById(id);
        return 1;

    }
    
}
