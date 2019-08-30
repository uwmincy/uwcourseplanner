package org.uwmincy.application.json.model;
public class Meta
{
    private Method method;

    private String method_id;

    private String requests;

    private String message;

    private String timestamp;

    private String status;

    public Method getMethod ()
    {
        return method;
    }

    public void setMethod (Method method)
    {
        this.method = method;
    }

    public String getMethod_id ()
    {
        return method_id;
    }

    public void setMethod_id (String method_id)
    {
        this.method_id = method_id;
    }

    public String getRequests ()
    {
        return requests;
    }

    public void setRequests (String requests)
    {
        this.requests = requests;
    }

    public String getMessage ()
    {
        return message;
    }

    public void setMessage (String message)
    {
        this.message = message;
    }

    public String getTimestamp ()
    {
        return timestamp;
    }

    public void setTimestamp (String timestamp)
    {
        this.timestamp = timestamp;
    }

    public String getStatus ()
    {
        return status;
    }

    public void setStatus (String status)
    {
        this.status = status;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [method = "+method+", method_id = "+method_id+", requests = "+requests+", message = "+message+", timestamp = "+timestamp+", status = "+status+"]";
    }
}