package refactoring_guru.strategy.example.strategies;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

/**
 * Concrete strategy. Implements PayPal payment method.
 */
public class CControl implements AgendarStrategy {
    private final BufferedReader READER = new BufferedReader(new InputStreamReader(System.in));
    private String mmdd;
    private String name;


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


    @Override
    public Historia collectHistoriaDetails() {
        return null;
    }

    @Override
    public String captNombre() {
        try {
            System.out.print("Enter the name: ");
            name = READER.readLine();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return name;
    }

}