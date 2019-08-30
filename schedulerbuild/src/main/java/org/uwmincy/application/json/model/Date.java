package org.uwmincy.application.json.model;
public class Date
{
    private String  end_date;

    private String is_tba;

    private String start_time;

    private String weekdays;

    private String end_time;

    private String is_cancelled;

    private String  start_date;

    private String is_closed;

    public String  getEnd_date ()
{
    return end_date;
}

    public void setEnd_date (String  end_date)
    {
        this.end_date = end_date;
    }

    public String getIs_tba ()
    {
        return is_tba;
    }

    public void setIs_tba (String is_tba)
    {
        this.is_tba = is_tba;
    }

    public String getStart_time ()
    {
        return start_time;
    }

    public void setStart_time (String start_time)
    {
        this.start_time = start_time;
    }

    public String getWeekdays ()
    {
        return weekdays;
    }

    public void setWeekdays (String weekdays)
    {
        this.weekdays = weekdays;
    }

    public String getEnd_time ()
    {
        return end_time;
    }

    public void setEnd_time (String end_time)
    {
        this.end_time = end_time;
    }

    public String getIs_cancelled ()
    {
        return is_cancelled;
    }

    public void setIs_cancelled (String is_cancelled)
    {
        this.is_cancelled = is_cancelled;
    }

    public String  getStart_date ()
{
    return start_date;
}

    public void setStart_date (String  start_date)
    {
        this.start_date = start_date;
    }

    public String getIs_closed ()
    {
        return is_closed;
    }

    public void setIs_closed (String is_closed)
    {
        this.is_closed = is_closed;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [end_date = "+end_date+", is_tba = "+is_tba+", start_time = "+start_time+", weekdays = "+weekdays+", end_time = "+end_time+", is_cancelled = "+is_cancelled+", start_date = "+start_date+", is_closed = "+is_closed+"]";
    }
}
