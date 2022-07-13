var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c666216f-47ed-4d2d-a6aa-244622423371","7bb348eb-5a44-4493-8cea-2b8bff0b09ce","1d3dc86b-2b29-409f-a17b-60b3fbfbec31","89daf322-e16b-494c-9979-f7a4832b93cc","163abd0b-ba55-4384-a410-d446add0c13e","18cd48f2-ac84-48f9-9944-b5ad727b54f2","2006bd97-03cc-47cd-a792-ed6cf1412908"],"propsByKey":{"c666216f-47ed-4d2d-a6aa-244622423371":{"name":"man","sourceUrl":"assets/api/v1/animation-library/gamelab/1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U/category_people/gameplayadventure_06.png","frameSize":{"x":271,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":271,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U/category_people/gameplayadventure_06.png"},"7bb348eb-5a44-4493-8cea-2b8bff0b09ce":{"name":"bg1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"1d3dc86b-2b29-409f-a17b-60b3fbfbec31":{"name":"moon","sourceUrl":"assets/v3/animations/L2UMcIUtcH5z3ZqYg8ce-6IemPYJoLCdbry1626BbN0/1d3dc86b-2b29-409f-a17b-60b3fbfbec31.png","frameSize":{"x":300,"y":334},"frameCount":1,"looping":true,"frameDelay":4,"version":"aLlKkblU2c5PDIj4RU4cU1I04SlJ.Yu3","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":334},"rootRelativePath":"assets/v3/animations/L2UMcIUtcH5z3ZqYg8ce-6IemPYJoLCdbry1626BbN0/1d3dc86b-2b29-409f-a17b-60b3fbfbec31.png"},"89daf322-e16b-494c-9979-f7a4832b93cc":{"name":"alian1","sourceUrl":"assets/api/v1/animation-library/gamelab/0mBdF4CIKQ1gd.o4ue064YJMj_2gN4Aq/category_animals/creature_10.png","frameSize":{"x":185,"y":393},"frameCount":1,"looping":true,"frameDelay":2,"version":"0mBdF4CIKQ1gd.o4ue064YJMj_2gN4Aq","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":185,"y":393},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0mBdF4CIKQ1gd.o4ue064YJMj_2gN4Aq/category_animals/creature_10.png"},"163abd0b-ba55-4384-a410-d446add0c13e":{"name":"alian2","sourceUrl":"assets/api/v1/animation-library/gamelab/0mBdF4CIKQ1gd.o4ue064YJMj_2gN4Aq/category_animals/creature_10.png","frameSize":{"x":185,"y":393},"frameCount":1,"looping":true,"frameDelay":2,"version":"0mBdF4CIKQ1gd.o4ue064YJMj_2gN4Aq","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":185,"y":393},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0mBdF4CIKQ1gd.o4ue064YJMj_2gN4Aq/category_animals/creature_10.png"},"18cd48f2-ac84-48f9-9944-b5ad727b54f2":{"name":"star1","sourceUrl":"assets/api/v1/animation-library/gamelab/Eid4juFajMQCx0dItpnaJIQtX2Q1._7d/category_animals/creature_05.png","frameSize":{"x":392,"y":374},"frameCount":1,"looping":true,"frameDelay":2,"version":"Eid4juFajMQCx0dItpnaJIQtX2Q1._7d","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":374},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Eid4juFajMQCx0dItpnaJIQtX2Q1._7d/category_animals/creature_05.png"},"2006bd97-03cc-47cd-a792-ed6cf1412908":{"name":"bee","sourceUrl":"assets/api/v1/animation-library/gamelab/N602_cNy0LoPLXkwaUfCp2XJWPo86SUw/category_animals/bee.png","frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":2,"version":"N602_cNy0LoPLXkwaUfCp2XJWPo86SUw","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":50},"rootRelativePath":"assets/api/v1/animation-library/gamelab/N602_cNy0LoPLXkwaUfCp2XJWPo86SUw/category_animals/bee.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var life = 5;

var gameState = "start"


//create background
var bg1 = createSprite(200,200,400,200);
bg1.setAnimation("bg1");

//create seperations 
var wall1 = createSprite(215, 266, 360,5);
wall1.shapeColor="#000033"

// create queen
var queen = createSprite(330,370,15,15);
queen.setAnimation("man");
queen.scale=0.1

//create moon
var moon = createSprite(200, 30, 20,20)
moon.setAnimation("moon")
moon.scale=0.15

//create 4 alian
var alian1=createSprite(100,340,20,20)
alian1.setAnimation("alian1")
alian1.scale=0.1
var alian2=createSprite(240,380,20,20)
alian2.setAnimation("alian1")
alian2.scale=0.1

  alian1.velocityY=+5
  alian2.velocityY=-4

//create bee
var bee1=createSprite(370,20,10,10)
bee1.setAnimation("bee")
bee1.scale=0.5
var bee2=createSprite(20,20,10,10)
bee2.setAnimation("bee")
bee2.scale=0.5

  bee1.velocityY=+6
  bee2.velocityY=+4

//create laser beam
var laser1 = createSprite(50,50,100,2)
laser1.shapeColor="red"
var laser2 = createSprite(350,250,100,2)
laser2.shapeColor="red"
var laser3 = createSprite(70,210,2,100)
laser3.shapeColor="red"
var laser4 = createSprite(320,50,2,100)
laser4.shapeColor="red"

   laser1.velocityY=3
   laser2.velocityY=-3
   laser3.velocityX=3
   laser4.velocityX=-3


//create star abstockles
var star1=createSprite(150,110,20,20)
star1.setAnimation("star1")
star1.scale=0.08

  star1.velocityY=-3


 fill("yellow");
textSize(20);





function draw() {
 background("white");



 
   
  if (queen.isTouching(alian1)||(queen.isTouching)(alian2)||(queen.isTouching(bee2)||(queen.isTouching(bee1)))){
    playSound("assets/category_puzzle/puzzle_game_charm_magic_01.mp3")
    life-=1
    queen.x=330
    queen.y=370
  }
   if (queen.isTouching(laser1)||(queen.isTouching)(laser2)||(queen.isTouching(laser3)||(queen.isTouching(laser4)))){
    playSound("assets/category_puzzle/puzzle_game_charm_magic_01.mp3")
    life-=1
    queen.x=60
    queen.y=360
  }
  

                
  
   
   
  drawSprites();
  
 
  
  //Lives display
  fill("yellow");
  textSize(25);
  text("Lives: " +life, 250, 30);
  
  if (gameState="start"){
  fill("white");
  textSize(20);
  text("Welcome!! Use arrow keys to move", 10, 380);
  text("Help queen to reach moon", 70, 65);
  if (keyDown("left")){
     queen.x=queen.x-3
   }
   
  if (keyDown("right")){
    queen.x=queen.x+3
  }
if (keyDown("up")){
    queen.y=queen.y-3
  }
  if (keyDown("down")){
    queen.y=queen.y+3
  }
  
  }

    if (life == 0 ){
      gameState = "end"
      fill("green")
      textSize(25)
      text("Game Over!!!", 110, 200);
      bee1.velocityY=0
      bee2.velocityY=0
      alian1.velocityY=0
      alian2.velocityY=0
      star1.velocityY=0
      laser1.velocity=0
      laser2.velocity=0
      laser3.velocitX=0
      laser4.velocitX=0
      gameState="end"
    }
    
    if (queen.isTouching(moon)){
      fill("green")
      textSize(25)
      text("Thank you for your help", 25, 130);
      bee1.velocityY=0
      bee2.velocityY=0
      alian1.velocityY=0
      alian2.velocityY=0
      star1.velocityY=0
      laser1.velocity=0
      laser2.velocity=0
      laser3.velocitX=0
      laser4.velocitX=0
      
    }
   
  
  createEdgeSprites()
  
   // laser points bounceoff edges
  laser1.bounceOff(edges)
  laser2.bounceOff(edges)
  laser3.bounceOff(edges)
  laser4.bounceOff(edges)
  laser1.bounceOff(wall1)
  laser2.bounceOff(wall1)
  laser3.bounceOff(wall1)
  laser4.bounceOff(wall1)
  
  //alian bounceoff wall
    alian1.bounceOff(wall1)
    alian2.bounceOff(wall1)
    
    //alian bounceoff edges
  alian1.bounceOff(edges)
  alian2.bounceOff(edges)
    
  //queen bounceoff edges and wall
  queen.bounceOff(edges)
  queen.bounceOff(wall1)
  
  
  //star bounceoff edges
  star1.bounceOff(edges)
  star1.bounceOff(wall1)
  
  //bees bounce off edges
  bee1.bounceOff(edges)
  bee2.bounceOff(edges)
  
  
  
  if (queen.isTouching(moon)){
    laser1.velocityX=0
    laser2.velocityX=0
    laser3.velocityY=0
    laser4.velocityY=0
    
    }
   
   
   


  
  
  
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
