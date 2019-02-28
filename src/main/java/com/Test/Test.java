package com.Test;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.Binding;
import javax.validation.Valid;

@RestController
public class Test {

    @GetMapping("/Test")

    public String a(){
        return "Hello World";
    }
    @PostMapping("/Details")

    public String dtails(@RequestBody User emp) {
        return "data" + emp.getEmail() + " " + emp.getName() + " " + emp.getId();

    }
    @PostMapping("/adduser")
    public String adduser(@RequestBody User user){

        return "data" + user.getEmail() + " " + user.getName() + " " + user.getId();

    }
}
