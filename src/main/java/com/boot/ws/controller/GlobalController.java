package com.boot.ws.controller;


import com.boot.ws.model.ChatMessages;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GlobalController {

    @RequestMapping("/")
    public String home(Model model){
        return "index";
    }

    @MessageMapping("/chat.register")
    @SendTo("/messages/public")
    public ChatMessages register(@Payload ChatMessages chatMessages){
        return chatMessages;
    }

    @MessageMapping("/chat.send")
    @SendTo("/messages/public")
    public ChatMessages send(@Payload ChatMessages chatMessages){
        return chatMessages;
    }
}
