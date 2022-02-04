export class Counter {
    public count: number = 0;
    AddOne() {
        this.count++;
    }

    static instance: Counter = new Counter();
    static GetInstance(): Counter {
        // if*2 => protection against multi-threading
        if (Counter.instance == null) {
            if (Counter.instance == null) {
                Counter.instance = new Counter();
            }
        } else {
            return Counter.instance;
        }
    }
}
