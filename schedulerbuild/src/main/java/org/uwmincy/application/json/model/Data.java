package org.uwmincy.application.json.model;
public class Data
{
    private String class_number;

    private String note;

    private String enrollment_capacity;

    private String last_updated;

    private String related_component_2;

    private String related_component_1;

    private String subject;

    private String campus;

    private String waiting_total;

    private Classes[] classes;

    private String enrollment_total;

    private String section;

    private Reserves[] reserves;

    private String units;

    private String[] held_with;

    private String title;

    private String catalog_number;

    private String academic_level;

    private String topic;

    private String associated_class;

    private String term;

    private String waiting_capacity;

    public String getClass_number ()
    {
        return class_number;
    }

    public void setClass_number (String class_number)
    {
        this.class_number = class_number;
    }

    public String getNote ()
    {
        return note;
    }

    public void setNote (String note)
    {
        this.note = note;
    }

    public String getEnrollment_capacity ()
    {
        return enrollment_capacity;
    }

    public void setEnrollment_capacity (String enrollment_capacity)
    {
        this.enrollment_capacity = enrollment_capacity;
    }

    public String getLast_updated ()
    {
        return last_updated;
    }

    public void setLast_updated (String last_updated)
    {
        this.last_updated = last_updated;
    }

    public String getRelated_component_2 ()
    {
        return related_component_2;
    }

    public void setRelated_component_2 (String related_component_2)
    {
        this.related_component_2 = related_component_2;
    }

    public String  getRelated_component_1 ()
{
    return related_component_1;
}

    public void setRelated_component_1 (String  related_component_1)
    {
        this.related_component_1 = related_component_1;
    }

    public String getSubject ()
    {
        return subject;
    }

    public void setSubject (String subject)
    {
        this.subject = subject;
    }

    public String getCampus ()
    {
        return campus;
    }

    public void setCampus (String campus)
    {
        this.campus = campus;
    }

    public String getWaiting_total ()
    {
        return waiting_total;
    }

    public void setWaiting_total (String waiting_total)
    {
        this.waiting_total = waiting_total;
    }

    public Classes[] getClasses ()
    {
        return classes;
    }

    public void setClasses (Classes[] classes)
    {
        this.classes = classes;
    }

    public String getEnrollment_total ()
    {
        return enrollment_total;
    }

    public void setEnrollment_total (String enrollment_total)
    {
        this.enrollment_total = enrollment_total;
    }

    public String getSection ()
    {
        return section;
    }

    public void setSection (String section)
    {
        this.section = section;
    }

    public Reserves[] getReserves ()
    {
        return reserves;
    }

    public void setReserves (Reserves[] reserves)
    {
        this.reserves = reserves;
    }

    public String getUnits ()
    {
        return units;
    }

    public void setUnits (String units)
    {
        this.units = units;
    }

    public String[] getHeld_with ()
    {
        return held_with;
    }

    public void setHeld_with (String[] held_with)
    {
        this.held_with = held_with;
    }

    public String getTitle ()
    {
        return title;
    }

    public void setTitle (String title)
    {
        this.title = title;
    }

    public String getCatalog_number ()
    {
        return catalog_number;
    }

    public void setCatalog_number (String catalog_number)
    {
        this.catalog_number = catalog_number;
    }

    public String getAcademic_level ()
    {
        return academic_level;
    }

    public void setAcademic_level (String academic_level)
    {
        this.academic_level = academic_level;
    }

    public String  getTopic ()
{
    return topic;
}

    public void setTopic (String  topic)
    {
        this.topic = topic;
    }

    public String getAssociated_class ()
    {
        return associated_class;
    }

    public void setAssociated_class (String associated_class)
    {
        this.associated_class = associated_class;
    }

    public String getTerm ()
    {
        return term;
    }

    public void setTerm (String term)
    {
        this.term = term;
    }

    public String getWaiting_capacity ()
    {
        return waiting_capacity;
    }

    public void setWaiting_capacity (String waiting_capacity)
    {
        this.waiting_capacity = waiting_capacity;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [class_number = "+class_number+", note = "+note+", enrollment_capacity = "+enrollment_capacity+", last_updated = "+last_updated+", related_component_2 = "+related_component_2+", related_component_1 = "+related_component_1+", subject = "+subject+", campus = "+campus+", waiting_total = "+waiting_total+", classes = "+classes+", enrollment_total = "+enrollment_total+", section = "+section+", reserves = "+reserves+", units = "+units+", held_with = "+held_with+", title = "+title+", catalog_number = "+catalog_number+", academic_level = "+academic_level+", topic = "+topic+", associated_class = "+associated_class+", term = "+term+", waiting_capacity = "+waiting_capacity+"]";
    }
}