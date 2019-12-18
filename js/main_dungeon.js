//Creating the aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    dungeon, explorer, treasure, door, blob, id;

//Create a Pixi Application
let app = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1
});

fillWindow(app);

//Adding the canvas...
document.body.appendChild(app.view);

//Load the tileset as a json file
loader
    .add("img/treasureHunter_2.json")
    .load(setup);

//This "setup" function will run when the image has loaded
function setup() {
    // We can access the textures from three different ways:
    
    //1 - Accessing the "TextureCache" directly
    let dungeonTexture = TextureCache["dungeon.png"];
    dungeon = new Sprite(dungeonTexture);
    app.stage.addChild(dungeon);

    //2 - Accessing the texture using through the loader's "resources":
    explorer = new Sprite(
        resources["img/treasureHunter_2.json"].textures["explorer.png"]
    );
    explorer.x = 68;

    //Center the explorer vertically
    explorer.y = app.stage.height / 2 - explorer.height / 2;
    app.stage.addChild(explorer);
    
    //3 - Creating an optional alias called "id" for all the texture alias
    //frame id textures.
    id = PIXI.loader.resources["img/treasureHunter_2.json"].textures;

    //Make the treasure box using the alias
    treasure = new Sprite(id["treasure.png"]);
    app.stage.addChild(treasure);
    
    //Position the treasure next to the right edge of the canvas
    treasure.x = app.stage.width - treasure.width - 48;
    treasure.y = app.stage.height / 2 - treasure.height / 2;
    app.stage.addChild(treasure); 

    //Make the door
    door = new Sprite(id["door.png"]);
    door.position.set(32,0);
    app.stage.addChild(door);

    //Create the blobs (slimes)
    let numberOfBlobs = 6,
        spacing = 48,
        xOffset = 150;
    
    //Make as many blobs as there are 'numberOfBlobs'

    for (let i=0; i < numberOfBlobs; i++) {

        //Make a blob
        let blob = new Sprite(id["blob.png"]);

        //Space each blob horizontally according to the 'spacing' value.
        //'xOffset' determines the point from thbe left of the screen
        //at which the first blob should be added.
        let x = spacing * i + xOffset;

        //Give the blob a random y position
        //('randomInt' is a custom function)
        let y = randomInt(0, app.stage.height - blob.height);

        //Set the blob's position
        blob.x = x;
        blob.y = y;

        //Add the blob sprite to the stage
        app.stage.addChild(blob);
    }

    //The 'randomInt' helper function
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

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
}

function fillWindow(app) {
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);
}