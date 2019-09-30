package org.uwmincy.application;

import java.sql.*;
public class Main2{
    public static void main(String args[]){
        System.out.println("something like that\n");
        try{
            Class.forName("com.mysql.jdbc.Driver");
            Connection con=DriverManager.getConnection(
                    "jdbc:mysql://uwmincytest.csw1ycb5tovh.us-east-2.rds.amazonaws.com:3306/uwmincy","uwmincy","uwmincy123");
//here sonoo is database name, root is username and password
            Statement stmt=con.createStatement();
            ResultSet rs=stmt.executeQuery("select * from emp");
            while(rs.next())
                System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3));
            con.close();
        }catch(Exception e){
            System.out.println(e);
        }
    }
}