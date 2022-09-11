function Robot() {
    this.name;
    this.act;

    this.construct = function Robot(name, act) {
        this.name = name;
        this.act = act;
    }

    this.construct("Robot", "I'm just working");
    this.work = function work() {
        console.log("I'm" + this.name + "- I'm" + this.act);
    }
}

function CoffeRobot() {
    Robot.call(this);

    this.construct("CoffeeRobot", "just make coffe");
}
function RobotDancer() {
    Robot.call(this);

    this.construct("CoffeeRobot", "just  dance");
}
function RobotCooker() {
    Robot.call(this);

    this.construct("CoffeeRobot", "just cook");
}

let robot = new Robot();
let coffeeRobot = new CoffeeRobot();
let robotCooker = new RobotCooker();
let robotDanser = new RobotDanser();

robot.work();
coffeeRobot.work();
robotCooker.work();
robotDanser.work();

console.log();

let robotArray = [];
robotArray[0] = robot;
robotArray[1] = coffeeRobot;
robotArray[2] = robotCooker;
robotArray[3] = robotDanser;

for (let i = 0; i < robotArray.length; i++) {
    robotArray[i].work();
}