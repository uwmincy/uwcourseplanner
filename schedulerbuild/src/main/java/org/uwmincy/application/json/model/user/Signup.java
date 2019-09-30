package org.uwmincy.application.json.model.user;

public class Signup
{
    private String request;

    private User user;

    public String getRequest ()
    {
        return request;
    }

    public void setRequest (String request)
    {
        this.request = request;
    }

    public User getUser ()
    {
        return user;
    }

    public void setUser (User user)
    {
        this.user = user;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [request = "+request+", user = "+user+"]";
    }
}

