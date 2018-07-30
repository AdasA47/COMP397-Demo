(function(){
    
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let helloLabel: createjs.Text;

    function Init(){
        console.log("Initialization started...");
        Start();
    }

    function Start(){
        console.log("Starting Application...");

        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick",Update);
        Main();
    }
    
    function Update(){
        helloLabel.rotation +=1;
        stage.update();

    }

    function Main(){
        console.log("Game Started...");

        helloLabel = new createjs.Text("Hello, World!", "40px Consolas", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;
        stage.addChild(helloLabel);
    }

    window.onload = Init;
})();