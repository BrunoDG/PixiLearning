//Creating the aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    state;

let superFastSprites = new PIXI.particles.ParticleContainer(); 

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
    .add("img/animals.json") 
    .on("progress", loadProgressHandler) //This is a loader function to show how many files are loading
    .load(setup);

function setup () {
    let id = PIXI.loader.resources["img/animals.json"].textures;

    let cat = new Sprite(id["cat.png"]);
    cat.position.set(16,16);

    let hedgehog = new Sprite(id["hedgehog.png"]);
    hedgehog.position.set(32,32);

    let tiger = new Sprite(id["tiger.png"]);
    tiger.position.set(64,64);

    //create the ParticleContainer for faster sprites 
    //let superFastSprites = new ParticleContainer(maxSize, properties, batchSize, autoResize);
    /*
    let superFastSprites = new ParticleContainer (
        size,
        {
            rotation: true,
            alphaAndtint: true,
            scale: true,
            uvs: true // UV Mapping property
        }
    );
    */

    let animals = new PIXI.Container();
    animals.addChild(cat);
    animals.addChild(hedgehog);
    animals.addChild(tiger);
    animals.position.set(64,64);
    app.stage.addChild(animals);

    /*  // Getting each animal's global position on canvas
    console.log(animals.toGlobal(cat.position));
    console.log(animals.toGlobal(hedgehog.position));
    console.log(animals.toGlobal(tiger.position));
    */

    /* // Another way to get each animal's global position on canvas 
    tiger.getGlobalPosition().x;
    tiger.getGlobalPosition().y;
    */

    /* // Getting a distance between one sprite and another (using local positions) 
    console.log("Distance from tiger to hedgehog (x): " + tiger.toLocal(tiger.position, hedgehog).x);
    console.log("Distance from tiger to hedgehog (y): " +tiger.toLocal(tiger.position, hedgehog).y);
    */
}

function loadProgressHandler(loader, resource) {
    console.log("loading: " + resource.url);
    console.log("progress: " + loader.progress + "%");
}