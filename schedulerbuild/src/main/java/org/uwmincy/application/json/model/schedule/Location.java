package org.uwmincy.application.json.model.schedule;
public class Location
{
    private String building;

    private String room;

    public String getBuilding ()
    {
        return building;
    }

    public void setBuilding (String building)
    {
        this.building = building;
    }

    public String getRoom ()
    {
        return room;
    }

    public void setRoom (String room)
    {
        this.room = room;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [building = "+building+", room = "+room+"]";
    }
}