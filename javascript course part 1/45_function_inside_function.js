const app = () => {
    const func1 = () => console.log("hello from func1");
    const func2 = () => console.log("hello from func2");
    const func3 = () => console.log("hello from func3");
    console.log("inside function");
    func1();
    func2();
    func3();
}
app();