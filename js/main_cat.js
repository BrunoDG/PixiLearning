//Creating the aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new Application({
    width: 256,
    height: 256,
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
    let cat = new Sprite(resources["img/cat.png"].texture);

    //If I want to position the cat on other position at the
    //screen, I can position it like this:
    //cat.x = 96;
    //cat.y = 96;
    
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
    cat.rotation = 0.5

    //Additionally, I can change the sprite's rotation anchor like this:
    //cat.anchor.x = 0.5;
    //cat.anchor.y = 0.5;

    //Again, I can change the anchor like this as well:
    cat.anchor.set(0.5, 0.5);

    //Also, I can change the sprite's pivot point with this function:
    //cat.pivot.set(32, 32);

    //With the pivot() function, I will change the cat's pivot 
    //rotation point to (32, 32). So when I rotate the cat, it will spin over
    //the designated point.

    //Add the cat to the stage
    app.stage.addChild(cat);

    console.log("all files loaded succesfully");
}

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