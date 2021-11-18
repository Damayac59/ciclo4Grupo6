package refactoring_guru.strategy.example.strategies;

import refactoring_guru.strategy.example.strategies.Agendar;
import refactoring_guru.strategy.example.strategies.FirstTime;
import refactoring_guru.strategy.example.strategies.CControl;
import refactoring_guru.strategy.example.strategies.AgendarStrategy;
import refactoring_guru.strategy.example.strategies.Historia;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

/**
 * World first console e-commerce application.
 */
public class Demo {
    private static Map<String, String> cita = new HashMap<>();
    private static Map<String , Historia> historias = new HashMap<>();
    private static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    private static Agendar agendar = new Agendar();
    private static AgendarStrategy strategy;

    public static void main(String[] args) throws IOException {
        while (!agendar.isClosed()) {
            int cost;

            String continueChoice;
            System.out.print("Please, select a type of appointment:" + "\n" +
                        "1 - First Time" + "\n" +
                        "2 - Control" + "\n"
                        );
            String choice = reader.readLine();
            if (choice.equals("1")) {
                    strategy = new FirstTime();
                    Historia historia = strategy.collectHistoriaDetails();
                    historias.put(historia.getName(),historia);
                    String ddmm= strategy.cita();
                    cita.put(historia.getName(),ddmm);
            } else {
                    strategy = new CControl();
                    String name= strategy.captNombre();
                    Historia historia =historias.get(name);
                    String ddmm= strategy.cita();
                    cita.put(name,ddmm);
            }
            System.out.print("Do you want to add another appointment yes: or np: n?");
            String proceed = reader.readLine();
            if (proceed.equalsIgnoreCase("n")) {
                agendar.setClosed();
            } 
            
        }
    }
}
