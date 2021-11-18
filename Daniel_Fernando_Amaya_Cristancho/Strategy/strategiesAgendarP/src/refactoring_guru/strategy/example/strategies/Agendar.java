package refactoring_guru.strategy.example.strategies;

import refactoring_guru.strategy.example.strategies.AgendarStrategy;

/**
 * Order class. Doesn't know the concrete payment method (strategy) user has
 * picked. It uses common strategy interface to delegate collecting payment data
 * to strategy object. It can be used to save order to database.
 */
public class Agendar {
    private int totalCost = 0;
    private boolean isClosed = false;

    public void processAgendar(AgendarStrategy strategy) {
        strategy.collectHistoriaDetails();
        // Here we could collect and store payment data from the strategy.
    }

    public void setTotalCost(int cost) {
        this.totalCost += cost;
    }

    public int getTotalCost() {
        return totalCost;
    }

    public boolean isClosed() {
        return isClosed;
    }

    public void setClosed() {
        isClosed = true;
    }
}