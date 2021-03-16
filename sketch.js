var gameState;

var rockImg;
var paperImg;
var scissorsImg;
var akinayta1Img;
var akinayta2Img;
var akinayta3Img;
var akinaytaWinImg;
var akinaytaDrawImg;
var akinaytaLoseImg;

var speachBubble;
var options;
var playerChoice;
var akinaytaChoice;

function preload()
{
    rockImg = loadImage('rock.png');
    paperImg = loadImage('paper.png');
    scissorsImg = loadImage('scissors.png');
    akinayta1Img = loadImage('akinayta1.png');
    akinayta2Img = loadImage('akinayta2.png');
    akinayta3Img = loadImage('akinayta3.png');
    akinaytaWinImg = loadImage('akinaytawin.png');
    akinaytaDrawImg = loadImage('akinaytadraw.png');
    akinaytaLoseImg = loadImage('akinaytalose.png');
    speachBubble = loadImage('speechbubble.png');
}

function setup()
{
    createCanvas(1600, 900);
    options = [rockImg,paperImg,scissorsImg];
    startGame();
}

function draw()
{

}

function mouseClicked()
{
    if(mouseX >0 && mouseX < width && mouseY >0 && mouseY < height)
    {
        if(gameState == 0)
        {
            fill(70,0,50);
            rect(50,50,1500,800);
            fill(0);
            textSize(50);
            text("Make your choice:", 550, 280);
            image(rockImg, 400, 500, 200, 200);
            image(paperImg, 650, 500, 200, 200);
            image(scissorsImg, 900, 500, 200, 200);
            image(akinayta2Img, 50, 50, 300);

            
            gameState = 1;
            return;
        }

        if(gameState == 1)
        {
            
            if(mouseX > 400 && mouseX < 600 && mouseY > 500 && mouseY < 700)
            {
                playerChoice = 'rock';
            }
            if(mouseX > 650 && mouseX < 850 && mouseY > 500 && mouseY < 700)
            {
                playerChoice = 'paper';
            }
            if(mouseX > 900 && mouseX < 1100 && mouseY > 500 && mouseY < 700)
            {
                playerChoice = 'scissors';
            }

            if(playerChoice == 'rock')
            {
                fill(70,0,50);
                rect(50,50,1500,800);
                fill(0);
                textSize(50);
                text("You chose:", 900, 500);
                image(rockImg, 1200, 400, 200, 200);
                image(akinayta3Img, 50, 50, 300);
                text("Click to continue.", 530, 800);
            }
            if(playerChoice == 'paper')
            {
                fill(70,0,50);
                rect(50,50,1500,800);
                fill(0);
                textSize(50);
                text("You chose:", 900, 500);
                image(paperImg, 1200, 400, 200, 200);
                image(akinayta3Img, 50, 50, 300);
                text("Click to continue.", 530, 800);
            }
            if(playerChoice == 'scissors')
            {
                fill(70,0,50);
                rect(50,50,1500,800);
                fill(0);
                textSize(50);
                text("You chose:", 900, 500);
                image(scissorsImg, 1200, 400, 200, 200);
                image(akinayta3Img, 50, 50, 300);
                text("Click to continue.", 530, 800);
            }
            gameState = 2;
            return;
        }
        if(gameState == 2)
        {
            if(playerChoice == 'rock')
            {
                fill(70,0,50);
                rect(50,50,1500,800);
                fill(0);
                textSize(50);
                text("You chose:", 900, 500);
                image(rockImg, 1200, 400, 200, 200);
                text("Akinayta chose:", 100, 700);

                akinaytaChoice = random(options);

                image(akinaytaChoice, 500, 600, 200, 200);

                if(akinaytaChoice == paperImg)
                {
                    image(akinaytaWinImg, 50, 50, 300);
                    image(speachBubble,200,-100);
                    text('EZ N00B', 400,170);
                }
                else if(akinaytaChoice == rockImg)
                {
                    image(akinaytaDrawImg, 50, 50, 300);
                    image(speachBubble,200,-100);
                    text("It's a draw...", 400,170);
                }
                else if(akinaytaChoice == scissorsImg)
                {
                    image(akinaytaLoseImg, 50, 50, 300);
                    image(speachBubble,200,-100);
                    text("You will", 390,150);
                    text("regret this.", 390,200);
                }

                
                text("Click to play again.", 700, 800);
                
            }
            if(playerChoice == 'paper')
            {
                fill(70,0,50);
                rect(50,50,1500,800);
                fill(0);
                textSize(50);
                text("You chose:", 900, 500);
                image(paperImg, 1200, 400, 200, 200);
                text("Akinayta chose:", 100, 700);

                akinaytaChoice = random(options);

                image(akinaytaChoice, 500, 600, 200, 200);

                if(akinaytaChoice == scissorsImg)
                {
                    image(akinaytaWinImg, 50, 50, 300);
                    image(speachBubble,200,-100);
                    text('EZ N00B', 400,170);
                }
                else if(akinaytaChoice == paperImg)
                {
                    image(akinaytaDrawImg, 50, 50, 300);
                    image(speachBubble,200,-100);
                    text("It's a draw...", 400,170);
                }
                else if(akinaytaChoice == rockImg)
                {
                    image(akinaytaLoseImg, 50, 50, 300);
                    image(speachBubble,200,-100);
                    text("You will", 390,150);
                    text("regret this.", 390,200);
                }

                text("Click to play again.", 700, 800);
                
            }
            if(playerChoice == 'scissors')
            {
                fill(70,0,50);
                rect(50,50,1500,800);
                fill(0);
                textSize(50);
                text("You chose:", 900, 500);
                image(scissorsImg, 1200, 400, 200, 200);
                text("Akinayta chose:", 100, 700);

                akinaytaChoice = random(options);

                image(akinaytaChoice, 500, 600, 200, 200);

                if(akinaytaChoice == rockImg)
                {
                    image(akinaytaWinImg, 50, 50, 300);
                    image(speachBubble,200,-100);
                    text('EZ N00B', 400,170);
                }
                else if(akinaytaChoice == scissorsImg)
                {
                    image(akinaytaDrawImg, 50, 50, 300);
                    image(speachBubble,200,-100);
                    text("It's a draw...", 400,170);
                }
                else if(akinaytaChoice == paperImg)
                {
                    image(akinaytaLoseImg, 50, 50, 300);
                    image(speachBubble,200,-100);
                    text("You will", 390,150);
                    text("regret this.", 390,200);

                }

                text("Click to play again.", 700, 800);
                
            }
            gameState = 3;
            return;
        }
        if(gameState == 3)
        {
            startGame();
        }

    }
}

function startGame()
{
    background(50);
    gameState = 0;

    fill(70,0,50);
    rect(50,50,1500,800);
    fill(0);
    textSize(50);
    text("Let's play Rock, Paper, Scissors!", 400, 280);
    text("Click to continue.", 530, 800);
    image(akinayta1Img, 50, 50, 300);
}