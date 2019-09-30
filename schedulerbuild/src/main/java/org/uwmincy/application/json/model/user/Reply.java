package org.uwmincy.application.json.model.user;
public class Reply
{
    private String response;

    private boolean error;

    public String getResponse ()
    {
        return response;
    }

    public void setResponse (String response)
    {
        this.response = response;
    }

    public boolean getError ()
    {
        return error;
    }

    public void setError (boolean error)
    {
        this.error = error;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [response = "+response+", error = "+error+"]";
    }
}