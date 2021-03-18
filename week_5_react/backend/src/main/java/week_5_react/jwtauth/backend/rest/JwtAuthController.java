package week_5_react.jwtauth.backend.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import week_5_react.jwtauth.backend.dto.JwtRequest;
import week_5_react.jwtauth.backend.dto.JwtResponse;
import week_5_react.jwtauth.backend.entities.Card;
import week_5_react.jwtauth.backend.entities.Roles;
import week_5_react.jwtauth.backend.entities.Users;
import week_5_react.jwtauth.backend.entities.helpers.UserRequest;
import week_5_react.jwtauth.backend.jwt.JWTTokenGenerator;
import week_5_react.jwtauth.backend.services.RolesService;
import week_5_react.jwtauth.backend.services.UserService;

import java.util.ArrayList;
import java.util.Map;

@RestController
@CrossOrigin
public class JwtAuthController {
    @Autowired
    private JWTTokenGenerator jwtTokenGenerator;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @RequestMapping(value = "/auth")
    public ResponseEntity<?> auth(@RequestBody JwtRequest request) throws Exception{

        authenticate(request.getEmail(), request.getPassword());
        final UserDetails userDetails =
                userService.loadUserByUsername(request.getEmail());

        final String token = jwtTokenGenerator.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));

    }



    public void authenticate(String email, String password) throws Exception{

        try{

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));

        }catch (DisabledException e){
            throw new Exception("USER_DISABLED", e);
        }catch (BadCredentialsException e){
            throw new Exception("INVALID_CREDENTIALS", e);
        }

    }
}
