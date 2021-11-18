package ejemplo2.singleton.example.telCompartida;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class DemoTelefonoSTh {
    private static Map<String, Singleton> contactos = new HashMap<>();
    private static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    private static Singleton contacto;
    
    public static void main(String[] args) {
        System.out.println("Digita el numero de telefono" + "\n" +
                "Si ya esta creado usara el mismo" + "\n\n" +
                "no tendras contactos repetidos en tu agenda telefonica compartida:" + "\n");
        String number = reader.readLine();
        System.out.print("ingrese el nombre: ");
        String name = reader.readLine();
        Singleton singleton = Singleton.getInstance(number);
        System.out.println("Digita el numero de telefono" + "\n" +
                "Si ya esta creado usara el mismo" + "\n\n" +
                "no tendras contactos repetidos en tu agenda telefonica compartida:" + "\n");
        number = reader.readLine();
        Singleton anotherSingleton = Singleton.getInstance(number);
        System.out.println(singleton.value);
        System.out.println(anotherSingleton.value);
    }
}