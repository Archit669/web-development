let a = 5;

const app = () => {
    const func1 = () => console.log("function1",a);
    const func2 = () => {
        const a = 10;
        console.log(a);
        func1();
    }
    console.log(a);
    func1();
    func2();
}

app();
