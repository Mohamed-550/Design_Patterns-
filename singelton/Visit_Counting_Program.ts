////// Counter
class Counter {
    count: number = 0;
    private static instance: any = null;

    private constructor() { };
    static GetInstance(): any {
        if (this.instance == null) {
            return (this.instance = new Counter());
        } else {
            return this.instance;
        }
    };
    AddOne(): void {
        this.count++;
    };
}

////// Program
class Visit_Counting_Program {
    static Print_Visit_Counting(): void {

        const user_1 = Counter.GetInstance();
        user_1.AddOne();
        console.log("user_1 => " + "number of visits: " + user_1.count);

        const user_2 = Counter.GetInstance();
        user_2.AddOne();
        console.log("user_2 => " + "number of visits: " + user_2.count);

        user_1.AddOne();
        console.log("user_1 again => " + "number of visits: " + user_1.count);
    };
};

Visit_Counting_Program.Print_Visit_Counting();
