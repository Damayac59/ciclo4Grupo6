package refactoring_guru.strategy.example.strategies;

/**
 * Common interface for all strategies.
 */
public interface AgendarStrategy {
    String cita();
    Historia collectHistoriaDetails();
    String captNombre();
}