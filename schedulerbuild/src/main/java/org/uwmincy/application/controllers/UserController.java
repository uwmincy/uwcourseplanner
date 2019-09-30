package org.uwmincy.application.controllers;

import at.favre.lib.crypto.bcrypt.BCrypt;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.uwmincy.application.json.model.user.Reply;
import org.uwmincy.application.json.model.user.Signup;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;


//Rest Controller annotations
@RestController
@RequestMapping(value="/user")
public class UserController {

    public static ObjectMapper objectMapper = new ObjectMapper();

    public static final String wrongRequest = "WRONG_REQUEST";
    public static final String incompleteRequest = "INCOMPLETE_REQUEST";

    //signup error
    public static final String duplicateRequest = "DUPLICATE_USERNAME_REQUEST";
    //signup success
    public static final String completeRequest = "COMPLETE_SIGNUP_REQUEST";

    //login error
    public static final String unknownRequest = "UNKNOWN_USERNAME_REQUEST";
    public static final String incorrectRequest = "INCORRECT_PASSWORD_REQUEST";
    //login success
    public static final String correctRequest = "CORRECT_PASSWORD_REQUEST";



    @RequestMapping(value = "/login",method=RequestMethod.GET)
    public Reply login (@RequestBody Signup body){
        try{
            if(body.getUser()==null && body.getRequest()==null){
                return returnUserError(incompleteRequest);
            }
            System.out.println("Getting login body:");
            System.out.println(objectMapper.writeValueAsString(body));


            if(body.getRequest().toLowerCase().trim().equals("login")){

                Class.forName("com.mysql.jdbc.Driver");

                //make sure to seperate this from the source code when made public...
                Connection con= DriverManager.getConnection(
                        "jdbc:mysql://uwmincy-test.cjyriwvxpzt6.us-east-1.rds.amazonaws.com:3306/uwmincy",
                        "uwmincy",
                        "uwmincy123");

                Statement stmt=con.createStatement();
                ResultSet rs=stmt.executeQuery("select * from logins where idlogins = '" + body.getUser().getUsername()+"';");
                if(rs.next()) {
                    if(BCrypt.verifyer().verify(body.getUser().getPassword().toCharArray(),rs.getString(2)).verified){
                        Reply response = new Reply();
                        response.setError(false);
                        response.setResponse(correctRequest);
                        return response;
                    }else{
                        con.close();
                        return returnUserError(incorrectRequest);
                    }

                }else{
                    con.close();
                    return returnUserError(unknownRequest);
                }


            }else{
                return returnUserError(wrongRequest);
            }
        }catch(Exception e){
            System.out.println("JAVA EXECEPTION IN login:");
            e.printStackTrace();
            return returnUserError("UNKNOWN EXCEPTION IN SERVER:\n" + e.toString());
        }
    }

    @RequestMapping(value = "/signup", method= RequestMethod.POST)
    public Reply signUp (@RequestBody Signup body){
        try{
            if(body.getUser()==null && body.getRequest()==null){
                return returnUserError(incompleteRequest);
            }
            System.out.println("Getting signup body:");
            System.out.println(objectMapper.writeValueAsString(body));


            if(body.getRequest().toLowerCase().trim().equals("signup")){

                Class.forName("com.mysql.jdbc.Driver");

                //make sure to seperate this from the source code when made public...
                Connection con= DriverManager.getConnection(
                        "jdbc:mysql://uwmincy-test.cjyriwvxpzt6.us-east-1.rds.amazonaws.com:3306/uwmincy",
                        "uwmincy",
                        "uwmincy123");

                Statement stmt=con.createStatement();
                ResultSet rs=stmt.executeQuery("select * from logins where idlogins = '" + body.getUser().getUsername()+"';");
                if(rs.next()) {
                    return returnUserError(duplicateRequest);
                }


                //hash pass
                String bcryptHash = BCrypt.withDefaults().hashToString(12,body.getUser().getPassword().toCharArray());

                //send to server
                stmt.executeUpdate("insert into logins (idlogins, idpassword) values ('"+
                        body.getUser().getUsername() +
                        "', '"+
                        bcryptHash
                        +"')");



                con.close();

                Reply response = new Reply();
                response.setError(false);
                response.setResponse(completeRequest);
                return response;
            }else{
                return returnUserError(wrongRequest);
            }
        }catch(Exception e){
            System.out.println("JAVA EXECEPTION IN signup:");
            e.printStackTrace();
            return returnUserError("UNKNOWN EXCEPTION IN SERVER:\n" + e.toString());
        }
    }
    public static Reply returnUserError(String error){
        Reply errorResponse = new Reply();
        errorResponse.setError(true);
        errorResponse.setResponse(error);
        return errorResponse;
    }
}
