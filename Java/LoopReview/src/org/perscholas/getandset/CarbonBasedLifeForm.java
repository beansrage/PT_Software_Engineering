package org.perscholas.getandset;

public class CarbonBasedLifeForm {
     String kingdom ;
     String planet;
     int height;
     String color;
     boolean multicellular;

    public void setKingdom(String kingdom) {
        this.kingdom = kingdom;
    }

    public String getKingdom() {
        return kingdom;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public String getPlanet() {
        return planet;
    }

    public void setPlanet(String planet) {
        this.planet = planet;
    }

    public void setMulticellular(boolean multicellular) {
        this.multicellular = multicellular;
    }

    public boolean getMulticellular() {
        return multicellular;
    }
}
