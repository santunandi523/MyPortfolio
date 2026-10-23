package com.santunandi.portfolio.controller;

import com.santunandi.portfolio.config.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @Value("${portfolio.admin.passkey:admin2026}")
    private String adminPasskey;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String passkey = credentials.get("passkey");
        if (passkey != null && passkey.equals(adminPasskey)) {
            String token = jwtUtil.generateToken("santu-admin");
            return ResponseEntity.ok(Map.of(
                    "token", token,
                    "type", "Bearer",
                    "role", "ROLE_ADMIN",
                    "expiresIn", 86400000
            ));
        } else {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid admin credentials"));
        }
    }
}
