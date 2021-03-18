package week_5_react.jwtauth.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtRequest {
    private static final long serialVersionUID = 123456789L;

    private String email;
    private String password;
}
