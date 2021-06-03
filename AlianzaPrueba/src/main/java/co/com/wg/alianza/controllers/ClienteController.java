package co.com.wg.alianza.controllers;

import co.com.wg.alianza.domain.Cliente;
import co.com.wg.alianza.service.ClienteServiceImpl;
import java.util.List;
import java.util.Optional;
import javax.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 *
 * @author waguevara
 */

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/v1")
public class ClienteController {
    
    @Autowired
    ClienteServiceImpl clienteService;
    
    
    @GetMapping("/listarClientes")
    public List<Cliente> listarClientes(){
        return clienteService.listarClientes();
    }
    
    @PostMapping("/guardarCliente")
    public Cliente guardar(@RequestBody Cliente cliente){
        clienteService.guardarCliente(cliente);
        return cliente;
    }
    
    @GetMapping("/{id_cliente}")
    public Cliente encontrarPersona(@PathParam("id_cliente")  Cliente cliente){
        return clienteService.encontrarCliente(cliente);
        
    }
    
}
