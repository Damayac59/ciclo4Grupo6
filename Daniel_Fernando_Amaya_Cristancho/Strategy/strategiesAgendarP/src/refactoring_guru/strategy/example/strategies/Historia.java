package refactoring_guru.strategy.example.strategies;

/**
 * Dummy credit card class.
 */
public class Historia {
    private String name;
    private String age;
    private String h;
    private String w;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return this.age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getH() {
        return this.h;
    }

    public void setH(String h) {
        this.h = h;
    }

    public String getW() {
        return this.w;
    }

    public void setW(String w) {
        this.w = w;
    }
    
    Historia(String name, String age, String h, String w) {
        this.name = name;
        this.age = age;
        this.w = w;
        this.h = h;
    }

    
}