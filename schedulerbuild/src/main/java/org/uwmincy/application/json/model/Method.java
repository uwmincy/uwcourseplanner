package org.uwmincy.application.json.model;

public class Method
{
    private String license;

    private String disclaimer;

    public String getLicense ()
    {
        return license;
    }

    public void setLicense (String license)
    {
        this.license = license;
    }

    public String getDisclaimer ()
    {
        return disclaimer;
    }

    public void setDisclaimer (String disclaimer)
    {
        this.disclaimer = disclaimer;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [license = "+license+", disclaimer = "+disclaimer+"]";
    }
}