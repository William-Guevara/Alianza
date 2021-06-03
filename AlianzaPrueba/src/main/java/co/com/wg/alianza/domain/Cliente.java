package co.com.wg.alianza.domain;

import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;
import javax.persistence.*;
import lombok.Data;

/**
 *
 * @author waguevara
 */
@Data
@Entity
@Table(name = "cliente")
public class Cliente implements Serializable{
    
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_cliente;
    
    private String nombre;
    
    private String email;
    
    private String telefono;
    
    private Date start_date; 
    
    private Date end_date;  
    
}
