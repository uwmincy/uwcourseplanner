package org.uwmincy.application.json.model;
public class Reserves
{
    private String enrollment_capacity;

    private String reserve_group;

    private String enrollment_total;

    public String getEnrollment_capacity ()
    {
        return enrollment_capacity;
    }

    public void setEnrollment_capacity (String enrollment_capacity)
    {
        this.enrollment_capacity = enrollment_capacity;
    }

    public String getReserve_group ()
    {
        return reserve_group;
    }

    public void setReserve_group (String reserve_group)
    {
        this.reserve_group = reserve_group;
    }

    public String getEnrollment_total ()
    {
        return enrollment_total;
    }

    public void setEnrollment_total (String enrollment_total)
    {
        this.enrollment_total = enrollment_total;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [enrollment_capacity = "+enrollment_capacity+", reserve_group = "+reserve_group+", enrollment_total = "+enrollment_total+"]";
    }
}