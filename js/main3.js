//Creating the aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle,
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

/*
//Loading an image and running the "setup" function when it's done
loader
    .add("tileset", "img/tileset.png") 
    .on("progress", loadProgressHandler) //This is a loader function to show how many files are loading
    .load(setup);
*/

//Load the tileset as a json file
loader
    .add("img/treasureHunter_2.json")
    .load(setup);

//This "setup" function will run when the image has loaded
function setup() {
    //Create the tileset sprite
    //let texture = TextureCache.tileset;
   
    //create the blob sprite from the json file used before
    let texture = TextureCache["blob.png"];

    //Since we've used the loader, try to load the json
    let id = PIXI.loader.resources["img/treasureHunter_2.json"].textures;
    
    let sprite = new Sprite(
        id["blob.png"];
    );

    /*
    //Create a rectangle object that defines the position and
    //size of the sub-image you want to extract from the texture
    //("Rectangle" is an alias for "PIXI.Rectangle") 
    let rect = new Rectangle(192, 128, 64, 64);
    //Obs: Here we can see that the starting point of the sprite we 
    //want to get from the tileset is at position x: 192 and y: 128. 
    //The size of the sprite is width: 64 and height: 64.

    //Tell the texture to use that rectangular section
    texture.frame = rect;

    //Create the sprite from the texture
    let rocket = new Sprite(texture);

    //Position the rocket sprite on the canvas
    rocket.position.set(32, 32);

    //Add the Rocket to the stage
    app.stage.addChild(rocket);
    */

    //Render the stage
    app.renderer.render(app.stage);

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