var shapes = [];
var direction = [];
var numSides = [3, 4, 6, 8, 99];
var keyData = {
    q : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/bubbles.mp3']
        })
    },
    
    w : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/clay.mp3']
        })
    },
    
    e : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/confetti.mp3']
        })
    },

    r : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/corona.mp3']
        })
    },
    
    t : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/dotted-spiral.mp3']
        })
    },
    
    y : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/flash-1.mp3']
        })
    },
    
    u : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/flash-2.mp3']
        })
    },
    
    i : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/flash-3.mp3']
        })
    },
    
    o : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/glimmer.mp3']
        })
    },
    
    p : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/moon.mp3']
        })
    },
    
    l : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/pinwheel.mp3']
        })
    },
    
    k : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/piston-1.mp3']
        })
    },
    
    j : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/piston-2.mp3']
        })
    },
    
    h : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/piston-3.mp3']
        })
    },
    
    g : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/prism-1.mp3']
        })
    },
    
    f : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/prism-2.mp3']
        })
    },
    
    d : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/prism-3.mp3']
        })
    },
    
    s : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/splits.mp3']
        })
    },
    
    a : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/squiggle.mp3']
        })
    },
    
    z : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/strike.mp3']
        })
    },
    
    x : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/suspension.mp3']
        })
    },
    
    c : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/timer.mp3']
        })
    },
    
    v : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/ufo.mp3']
        })
    },
    
    b : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/veil.mp3']
        })
    },
    
    n : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/wipe.mp3']
        })
    },
    
    m : {
        color : randomColor(),
        sides : numSides[Math.floor(Math.random() * numSides.length)],
        sound : new Howl({
            src : ['assets/sounds/zig-zag.mp3']
        })
    }
};

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function onKeyDown(e){
    if(keyData[e.key]){
        keyData[e.key].sound.play();
        var maxPoint = new Point(view.size.width, view.size.height);
        var point = maxPoint * Point.random();
        var newShape;
        if(shapes.length % 2 === 0){
            newShape = new Path.RegularPolygon(point, keyData[e.key].sides, 5);
            direction.push("+");
        }
        else{
            newShape = new Path.RegularPolygon(point, keyData[e.key].sides, 800);
            direction.push("-");
        }
        newShape.fillColor = keyData[e.key].color;
        shapes.push(newShape);
    }
}

function onFrame(e){
    for(var i = 0; i < shapes.length; i++){
        shapes[i].fillColor.hue += 1;
        var scale = direction[i] === '+' ? 1.15 : 0.9;
        shapes[i].scale(scale);
        shapes[i].rotate(3);
        if((shapes[i].area > 2000000) || (shapes[i].area < 20)){
            shapes[i].remove(); // remove the shape from the canvas
            shapes.splice(i, 1); // remove the shape from the array
            direction.splice(i, 1);
            i--; // decrement i so that the loop doesn't skip a shape because of .splice()
        }
    }
}