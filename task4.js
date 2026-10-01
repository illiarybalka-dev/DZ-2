let car = {
    model: "BMW",
    speed: 100,
    run() {
        console.log(this.model + " їде зі швидкістю " + this.speed);
    },
    stop() {
        console.log(this.model + " зупинилася");
    }
};
