//Creating the aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    cat;

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

/*
//If I want to add a name to this unique resource, I can.
//So it would stay as something like this:
loader
    .add("catImage", "img/cat.png")
    .load(setup);
//And then, on the setup function, I could add it as an alias for the Resource, like:
    let cat = new Sprite(resources.catImage.texture);

//With this, it's easier to set up new resources as I can use aliases for each different sprite, 
//while I can use the same sprite without having to type the same path for the image over and over again
    let catSprite = resources.catImage
    let cat = new Sprite(catSprite.texture);
//Of course, I have to be careful to not mess up with the names of the different sprites and textures.
*/

//This "setup" function will run when the image has loaded
function setup() {
    //Create the cat sprite
    cat = new Sprite(resources["img/cat.png"].texture);

    //If I want to position the cat on other position at the
    //screen, I can position it like this:
    //cat.x = 96;
    cat.y = 96;
    cat.vx = 0;
    cat.vy = 0;
    
    //or, like this:
    cat.position.set(96, 96);

    //Additionally, I can change the sprite's width and height like this:
    //cat.width = 80;
    //cat.height = 120;

    //Also, I can change the scale (on x and y) of the sprite:
    //cat.scale.x = 2;
    //cat.scale.y = 2;

    //I can do it like this as well:
    //cat.scale.set(0.5, 0.5);

    //I can spin the sprite with the rotation property:
    //cat.rotation = 0.5

    //Additionally, I can change the sprite's rotation anchor like this:
    //cat.anchor.x = 0.5;
    //cat.anchor.y = 0.5;

    //Again, I can change the anchor like this as well:
    //cat.anchor.set(0.5, 0.5);

    //Also, I can change the sprite's pivot point with this function:
    //cat.pivot.set(32, 32);

    //With the pivot() function, I will change the cat's pivot 
    //rotation point to (32, 32). So when I rotate the cat, it will spin over
    //the designated point.

    //Add the cat to the stage
    app.stage.addChild(cat);

    console.log("all files loaded succesfully");


    /*We can use two ways of animating sprites: */
    // 1)
    //Start the game loop by adding the 'gameLoop' function to 
    //Pixi's 'ticker' and provoking it with a 'delta' argument
    app.ticker.add(delta => gameLoop(delta));

    // 2)
    //Calling the function on setup and then making the animation
    //happen on the refresh of the screen (60 frames per second)
    //this way, we don't need to use the 'ticker'.
    //gameLoop()
}

//The Loop function (using delta)
function gameLoop(delta) {
    //Update the cat's velocity
    cat.vx = 1;
    cat.vy = 1;    
    
    //Apply the velocity values to the cat's 
    //postition to make it move
    cat.x += cat.vx;
    cat.y += cat.vy;
}

//The Loop function (not using delta)
/*function gameLoop() {
    //Call this 'gameLoop' function on the next screen refresh
    //(which happens 60 times per second)
    requestAnimationFrame(gameLoop);

    //Move the cat 1 pixel
    cat.x += 1;
}*/

//Function to show the loading progress of the whole program
//and, in addition to it, you can use it as a way to implement
//a loading bar on your game or application

function loadProgressHandler(loader, resource) {
    //Display the file "url" currently being loaded
    console.log("loading: " + resource.url);

    //Display the percentage of files currently loaded
    console.log("progress: " + loader.progress + "%");

    //If you gave your files names as the first argument
    //of the "add" method, you can access them like this:
    //console.log("loading: " + resource.name);
}