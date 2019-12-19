//Creating the aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    cat, state;

//Create a Pixi Application
let app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
});

//Adding the canvas...
document.body.appendChild(app.view);

//Loading an image and running the "setup" function when it's done
loader
    .add("img/cat.png") 
    .on("progress", loadProgressHandler) //This is a loader function to show how many files are loading
    .load(setup);

function setup() {

    //Create the cat sprite
    cat = new Sprite(resources["img/cat.png"].texture);
    cat.y = 96;
    cat.vx = 0;
    cat.vy = 0;
    app.stage.addChild(cat);

    //Capture the keyboard arrow keys
    let left = keyboard("ArrowLeft"),
        up = keyboard("ArrowUp"),
        right = keyboard("ArrowRight"),
        down = keyboard("ArrowDown");
    
    //Left arrow key 'press' method
    left.press = () => {
        //Change the cat's velocity when the key is pressed
        cat.vx = -5;
        cat.vy = 0;
        console.log("key left pressed");
    };
    //Left arrow key 'release' method
    left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down
        //and the cat isn't moving vertically: Stop the cat
        if (!right.isDown && cat.vy === 0) {
            cat.vx = 0;
            console.log("key left pressed");
        }
    };

    //Right
    right.press = () => {
        cat.vx = 5;
        cat.vy = 0;
        console.log("key right pressed");
    };
    right.release = () => {
        if (!left.isDown && cat.vy === 0) {
            cat.vx = 0;
            console.log("key right pressed");
        }
    };

    //Up
    up.press = () => {
        cat.vx = 0;
        cat.vy = -5;
        console.log("key up pressed");
    };

    up.release = () => {
        if (!down.isDown && cat.vx === 0) {
            cat.vy = 0;
            console.log("key up pressed");
        }
    };

    //Down
    down.press = () => {
        cat.vx = 0;
        cat.vy = 5;
        console.log("key down pressed");
    };
    down.release = () => {
        if (!up.isDown && cat.vx === 0) {
            cat.vy = 0;
            console.log("key down released");
        }
    };

    //Set the game state
    state = play;

    //Start the game loop
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
    //Update the current game state
    state(delta);
}

function play(delta) {
    //Use the cat's velocity to make it move
    cat.x += cat.vx;
    cat.y += cat.vy;
}

function loadProgressHandler(loader, resource) {
    console.log("loading: " + resource.url);
    console.log("progress: " + loader.progress + "%");
}