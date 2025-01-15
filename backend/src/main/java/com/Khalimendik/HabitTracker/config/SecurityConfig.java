package com.Khalimendik.HabitTracker.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Value("${frontend.main-page}")
    private String frontendMainPage;

    @Value("${frontend.login-page}")
    private String frontendLoginPage;

//    @Bean
//    public ServletContextInitializer servletContextInitializer() {
//        return servletContext -> {
//            SessionCookieConfig sessionCookieConfig = servletContext.getSessionCookieConfig();
//            sessionCookieConfig.setName("JSESSIONID");
//            sessionCookieConfig.setDomain("sharpbubbles.online");
//            sessionCookieConfig.setPath("/");
//            sessionCookieConfig.setHttpOnly(true);
//            sessionCookieConfig.setSecure(true); // Если используется HTTPS
//        };
//    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(httpSecurityCorsConfigurer ->
                        httpSecurityCorsConfigurer.configurationSource(corsConfigurationSource()))
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(sessionManagement -> sessionManagement
                        .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED))
                .authorizeHttpRequests(authorizeHttpRequests -> authorizeHttpRequests
                        .requestMatchers("/**").permitAll())
                .formLogin(loginConfigurer -> loginConfigurer
                        .defaultSuccessUrl(frontendMainPage)
                )
                .logout(logoutConfigurer -> logoutConfigurer
                        .logoutUrl("/logout") // URL для выхода
                        .logoutSuccessUrl(frontendLoginPage) // URL перенаправления после успешного выхода
                        .invalidateHttpSession(true) // Уничтожаем сессию
                        .deleteCookies("JSESSIONID") // Удаляем куки;
                );

        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:5173", "http://109.196.102.221:8080", "http://109.196.102.221"));
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", configuration);

        return urlBasedCorsConfigurationSource;
    }
}