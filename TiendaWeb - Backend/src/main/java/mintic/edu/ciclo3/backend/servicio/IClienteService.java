/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package mintic.edu.ciclo3.backend.servicio;

import java.util.List;
import mintic.edu.ciclo3.backend.modelo.Cliente;
import mintic.edu.ciclo3.backend.modelo.ClienteDto;

/**
 *
 * @author Usuario
 */
public interface IClienteService {

    List<Cliente> getClientes();

    Cliente nuevoCliente(ClienteDto clienteDto);

    Cliente buscarCliente(Long id);

    int borrarCliente(Long id);    
}
