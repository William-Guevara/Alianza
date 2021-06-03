package co.com.wg.alianza.service;

import co.com.wg.alianza.domain.Cliente;
import java.util.List;

/**
 *
 * @author waguevara
 */

public interface ClienteService {
    
    public List<Cliente> listarClientes();
    
    public void guardarCliente(Cliente cliente);
    
    public void eliminarCliente(Cliente cliente);
    
    public Cliente encontrarCliente(Cliente cliente);
    
}
