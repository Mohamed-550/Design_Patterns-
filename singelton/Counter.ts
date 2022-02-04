export class Counter {

    public count = 0;
    private static instance = new Counter();

    static GetInstance() {
        if (Counter.instance == null) {
            Counter.instance = new Counter();
        } else {
            return Counter.instance;
        }
    }
    AddOne() {
        this.count++;
    }
}

