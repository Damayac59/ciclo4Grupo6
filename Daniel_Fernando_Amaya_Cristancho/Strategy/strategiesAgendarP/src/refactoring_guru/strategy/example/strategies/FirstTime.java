package refactoring_guru.strategy.example.strategies;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import refactoring_guru.strategy.example.strategies.Historia;


/**
 * Concrete strategy. Implements credit card payment method.
 */
public class FirstTime implements AgendarStrategy {
    private final BufferedReader READER = new BufferedReader(new InputStreamReader(System.in));
    private Historia historia;
    private String mmdd;

    /**
     * Collect credit card data.
     */
    @Override
    public Historia collectHistoriaDetails() {
        try {
            System.out.print("Enter the name: ");
            String name = READER.readLine();
            System.out.print("Enter the age: ");
            String age = READER.readLine();
            System.out.print("Enter the Heigh: ");
            String h = READER.readLine();
            System.out.print("Enter the Weigh: ");
            String w = READER.readLine();
            historia = new Historia(name, age, h,w);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return historia;
    }

    /**
     * After card validation we can charge customer's credit card.
     */
    @Override
    public String cita() {
        try {
            System.out.print("Enter the month: ");
            String month = READER.readLine();
            System.out.print("Enter the day: ");
            String day = READER.readLine();
            mmdd = month +"/"+day;
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return mmdd;
    }
    private boolean historiaIsPresent() {
        return historia != null;
    }

    @Override
    public String captNombre() {
        // TODO Auto-generated method stub
        return null;
    }
}