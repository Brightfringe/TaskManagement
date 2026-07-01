package com.shubhangi.task_management.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI taskManagementAPI() {

        return new OpenAPI()

                .info(new Info()

                        .title("Task Management API")

                        .description("Backend API for Task Management System with JWT Authentication")

                        .version("1.0")

                        .contact(new Contact()
                                .name("Shubhangi Sharma")
                                .email("your-email@example.com"))

                        .license(new License()
                                .name("MIT License")))

                .externalDocs(new ExternalDocumentation()

                        .description("GitHub Repository")

                        .url("https://github.com/Brightfringe"));
    }
}
