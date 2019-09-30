package org.uwmincy.application.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.uwmincy.application.json.model.schedule.Schedule;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

//Rest Controller annotations
@RestController
@RequestMapping(value="/application", method=GET)
public class ScheduleController {

    public static ObjectMapper objectMapper = new ObjectMapper();

    @RequestMapping("/schedulejson")
    public Schedule schedulejson (@RequestBody Schedule body){
        try{
            System.out.println("Getting Schedule body:");
            System.out.println(objectMapper.writeValueAsString(body));
            return body;
        }catch(Exception e){
            System.out.println("got an exception in schedulejson:");
            e.printStackTrace();
            return null;
        }
    }
}
