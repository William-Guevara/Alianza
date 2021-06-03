
package co.com.wg.alianza.dao;

import co.com.wg.alianza.domain.Cliente;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author waguevara
 */
public interface ClienteDao extends CrudRepository<Cliente, Long>{
    
}
