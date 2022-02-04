import { Counter } from "./singelton/Counter";


class Program {
    static PrintCounter() {
        const Counter1 = Counter.GetInstance();
        Counter1.AddOne();
        console.log("counter 1: " + Counter1.count);

        const Counter2 = Counter.GetInstance();
        Counter2.AddOne();
        console.log("counter 2: " + Counter2.count);
    }
}


Program.PrintCounter();
