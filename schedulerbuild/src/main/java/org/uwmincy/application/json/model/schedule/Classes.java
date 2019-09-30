package org.uwmincy.application.json.model.schedule;
public class Classes
{
    private Date date;

    private Location location;

    private String[] instructors;

    public Date getDate ()
    {
        return date;
    }

    public void setDate (Date date)
    {
        this.date = date;
    }

    public Location getLocation ()
    {
        return location;
    }

    public void setLocation (Location location)
    {
        this.location = location;
    }

    public String[] getInstructors ()
    {
        return instructors;
    }

    public void setInstructors (String[] instructors)
    {
        this.instructors = instructors;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [date = "+date+", location = "+location+", instructors = "+instructors+"]";
    }
}