var player,animal,food,water,juice,vitamin,sword,ground1,animalgroup,gameState,ground2,ground3,healthbar,hungerbar;
var thirstbar,e,f;
var health,hunger,thirst,a,b,c,d,coin,coinimg,playerimg,player1img,ground_1,ground_2,ground_3,ground_4,ground_5;
var appleimg,goldappleimg,waterimg,juiceimg,player_img,player_img1,foodgroup,groundgroup,o,g,foodgroup2,foodgroup3,foodgroup4,foodgroup5;
var tiger,wolf,grass,desert,snow,jungle,sea,ground6,jet,jetimg,ground_6,paanigroup;
var paanigroup2,paanigroup3,paanigroup4,paanigroup5,p,score,octopus,dog,unicorn;
var ar=[0];
var monster1,monster1img,monster2,monster2img,monster3,monster3img,monster4,monster4img;
var monster5,monster5img,monster6,monster6img,alien;
var fireball,fireballimg,fireball2,fireball3,fireball4,fireball5,fireball6,crab,gun,gunimg,gunl;
var bullet,bulletimg,bulletl,eats;
var framekey;
var flat=0;
var cv=0;
var lives=3;
var aa=0;
var bb=0;
var cc=0;
var dd=0;
var ee=2;
var start,play,playimg;
var op=1;
var bulletg;

function preload()
{
   coinimg=loadAnimation("images/coin1.png","images/coin2.png")
   playerimg=loadAnimation("images/player1.png","images/player2.png","images/player3.png","images/player4.png","images/player5.png","images/player6.png","images/player7.png","images/player8.png");
   player1img=loadImage("images/player1.png");
   appleimg=loadImage("images/apple.png");
   goldapple=loadImage("images/goldapple.png");
   waterimg=loadImage("images/water.png");
   juiceimg=loadImage("images/juice.png");
   player_img=loadAnimation("images/player1_1.png","images/player2_2.png","images/player3_3.png","images/player4_4.png","images/player5_5.png","images/player6_6.png","images/player7_7.png","images/player8_8.png");
   player_img1=loadImage("images/player1_1.png");
  tiger=loadImage("images/TIGER.gif");
  wolf=loadImage("images/WOLF2.gif");
  grass=loadImage("images/grass.png");
  desert=loadImage("images/desert.png");
  snow=loadImage("images/snow.png");
  sea=loadImage("images/sea.png");
  jungle=loadImage("images/jungle.png");
  space=loadImage("images/space.png");
  jetimg=loadImage("images/rocket.png")
  octopus=loadImage("images/octopus.gif");
  dog=loadImage("images/dog.gif");
  unicorn=loadImage("images/unicorn.gif");
  monster1img=loadImage("images/monster.png");
  monster2img=loadImage("images/monster5.png");
  monster3img=loadImage("images/monster6.png");
  monster4img=loadImage("images/monster2.png");
  monster5img=loadImage("images/monster3.png");
  monster6img=loadImage("images/monster4.jpg");
  alien=loadImage("images/alien.gif");
  fireballimg=loadImage("images/fireball.png");
  crab=loadImage("images/crab.gif");
  gunimg=loadImage("images/gun.png");
  gunl=loadImage("images/gunl.png");
  bulletimg=loadImage("images/bullet.png");
  bulletl=loadImage("images/bulletl.png");
  start=loadImage("images/start.jpeg")
  playimg=loadImage("images/play.png");
}


function setup()
{
    canvas=createCanvas(1000,650);
   // console.log(displayWidth);
   player = createSprite(100,530,300,300);
    
    //player.addAnimation("player",playerimg);
    player.addImage("player",player1img);
    ground1 = createSprite(3500,540,7000,20);
    ground1.shapeColor="lightgreen";
    //ground1.visible=false;
    ground_1 = createSprite(3500,555,7000,20);
    ground_1.visible=false;
    
  //  ground.x=ground.width/2;
    ground2=createSprite(10500,540,7000,20);
    ground2.shapeColor="blue";
    monster2=createSprite(7000+ground2.width-100,400,100,100);
    monster2.addImage("monster",monster2img);
    monster2.scale=0.2;
   // ground2.visible=false;
    ground_2 = createSprite(10500,555,7000,20);
    ground_2.visible=false;
    ground3=createSprite(17500,540,7000,20);
    ground3.shapeColor="orange";
    monster1=createSprite(ground1.width-100,400,100,100);
    monster1.addImage("monster",monster1img);
    monster1.scale=0.3;
   // ground3.visible=false;
    ground_3 = createSprite(17500,555,7000,20);
    ground_3.visible=false;
    ground4=createSprite(24500,540,7000,20);
    ground4.shapeColor="darkgreen";
    monster3=createSprite(14000+ground3.width-100,400,100,100);
    monster3.addImage("monster3",monster3img);
    monster3.scale=0.8;
    //ground4.visible=false;
    ground_4 = createSprite(24500,555,7000,20);
    ground_4.visible=false;
    ground5=createSprite(31500,540,9000,20);
    ground5.shapeColor="white";
    monster5=createSprite(26500+ground5.width-100,375,100,100);
    monster5.addImage("monster5",monster5img);
    monster5.scale=0.5;
    //ground5.visible=false;
    ground_5 = createSprite(31500,555,9000,20);
    ground_5.visible=false;
    ground6 = createSprite(39600,-200,7000,20);
    monster4=createSprite(21000+ground4.width-100,400,100,100);
    monster4.addImage("monater4",monster4img);
    monster4.scale=0.6;
    ground_6 = createSprite(39600,-185,7000,20);
    ground_6.visible=false;
    animalgroup = new Group();
    gameState="start";
    health = createSprite(100,100,50,175);
    thirst = createSprite(660,100,50,175);
    healthbar = createSprite(100,100,50,175);
    healthbar.shapeColor="red";
    hunger = createSprite(600,100,50,175);
    hungerbar = createSprite(600,100,50,175);
    hungerbar.shapeColor="yellow";
    thirstbar = createSprite(660,100,50,175);
    thirstbar.shapeColor="blue";
    jet=createSprite(35960,570);
    jet.addImage(jetimg);
    jet.scale=0.5;
    monster6=createSprite(34000+ground5.width-100,-320,100,100);
    monster6.addImage("monster6",monster6img);
    monster6.scale=0.3;
    //coin=createSprite(300,400,50,50);
    //coin.addAnimation("coin",coinimg);
   // coin.scale=0.1;
   o=0;
   fireball=createSprite(6900,random(400,550),10,10);
    fireball.addImage("fireball",fireballimg);
    fireball.scale=0.1;
    fireball.visible=false;
    fireball2=createSprite(monster2.x,random(400,550),10,10);
    fireball2.addImage("fireball",fireballimg);
    fireball2.scale=0.1;
    fireball2.visible=false;
    fireball3=createSprite(monster3.x,random(400,550),10,10);
    fireball3.addImage("fireball",fireballimg);
    fireball3.scale=0.1;
    fireball3.visible=false;
    fireball4=createSprite(monster4.x,random(400,550),10,10);
    fireball4.addImage("fireball",fireballimg);
    fireball4.scale=0.1;
    fireball4.visible=false;
    fireball5=createSprite(monster5.x,random(400,550),10,10);
    fireball5.addImage("fireball",fireballimg);
    fireball5.scale=0.1;
    fireball5.visible=false;
    fireball6=createSprite(monster6.x,random(-230,-300),10,10);
    fireball6.addImage("fireball",fireballimg);
    fireball6.scale=0.1;
    fireball6.visible=false;
 //   bullet.addImage("bullet",bulletimg);
    gun = createSprite(player.x+30,player.y-50,10,10);
    gun.addImage("gun",gunimg);
    gun.scale=0.04;
    gun.visible=false;
   foodgroup=new Group();
   foodgroup2=new Group();
   foodgroup3=new Group();
   foodgroup4=new Group();
   foodgroup5=new Group();
   paanigroup=new Group();
   paanigroup2=new Group();
   paanigroup3=new Group();
   paanigroup4=new Group();
   paanigroup5=new Group();
   groundgroup=new Group();
    a=1;
    b=2.5;
    c=1;
    d=3.0;
    e=5;
    f=15;
    g=10;
    k=1;
    score=0;
    lives=3;
    button=createButton("respawn");
    button.position(500,300);
   button.hide();
   play=createSprite(50,500,50,50);
   play.addImage("play",playimg);
   play.scale=0.1;
   bullet=createSprite(50,500,10,10);
        bullet.scale=0.03;
        bullet.visible=false;
        bullet.x=player.x;
        bullet.y=gun.y-10;
        var bulletg=createGroup();
        bulletg.add(bullet);
}

function draw()
{
    background("black");

   player.setCollider("circle",0,0,70);

   if (gameState==="start")
   {
    background(start);
       player.visible=false;
       ground1.visible=false;
       animalgroup.destroyEach();
       foodgroup.destroyEach();
       foodgroup2.destroyEach();
       foodgroup3.destroyEach();
       foodgroup4.destroyEach();
       foodgroup5.destroyEach();
       hunger.visible=false;
       hungerbar.visible=false;
       health.visible=false;
       healthbar.visible=false;
       thirst.visible=false;
       thirstbar.visible=false;
       paanigroup.destroyEach();
       paanigroup2.destroyEach();
       paanigroup3.destroyEach();
       paanigroup4.destroyEach();
       paanigroup5.destroyEach();
   }
   if (mousePressedOver(play))
   {
       gameState="grassland";
       player.visible=true;
       ground1.visible=true;
       hunger.visible=true;
       hungerbar.visible=true;
       health.visible=true;
       healthbar.visible=true;
       thirst.visible=true;
       thirstbar.visible=true;
       play.destroy();
       healthbar.height=health.height;
       thirstbar.height=thirst.height;
       hungerbar.height=hunger.height;
   }

    rectMode(CENTER);

    if (a===0 && thirstbar.height===0 || hungerbar.height===0)
    {
        
    healthbar.height=healthbar.height-20;
    healthbar.y=healthbar.y+g;
    }

    if (frameCount%50===0&&a===1&&gameState!="death"||lives===2&&frameCount%50===0||lives===3&&frameCount%50===0&&a===1)
    {
    hungerbar.height=hungerbar.height-5;
    hungerbar.y=hungerbar.y+b;
    }

    if (frameCount%50===0&&a===1&&gameState!="death")
    {
    thirstbar.height=thirstbar.height-5;
    thirstbar.y=thirstbar.y+d;
    }
     //console.log(hungerbar.y);

     //console.log(hungerbar.height);

    if (hungerbar.height===0)
    {
        
       /// hungerbar.y===150;
        a=0;
        }

        if (thirstbar.height===0)
        {
            
           /// thirstbar.y===150;
            c=0;
            }
//console.log(hungerbar.height);
            if (a===0)
            {
                hungerbar.visible=false;
               
                //thirstbar.height=thirstbar.height-10;
            }

            if (c===0)
            {
                thirstbar.visible=false;
              
            }

            if (healthbar.height<15)
            {
                healthbar.visible=false;
                k=0;
            }

            if (k===0)
            {
                healthbar.height=15;
                healthbar.visible=false;
            }

            if (frameCount%100===0&&player.x>6430)
            {
                fireball.visible=true;
                fireball.velocityX=-8;
            }

            if (fireball.x<6200)
            {
                fireball.x=6900;
                fireball.y=random(550,300);
            }
            
            if (frameCount%100===0&&player.x>13470)
            {
                fireball2.visible=true;
                fireball2.velocityX=-8;
            }

            if (fireball2.x<13000)
            {
                fireball2.x=monster2.x;
                fireball2.y=random(550,300);
            }

            if (frameCount%100===0&&player.x>20380)
            {
                fireball3.visible=true;
                fireball3.velocityX=-8;
            }

            if (fireball3.x<20000)
            {
                fireball3.x=monster3.x;
                fireball3.y=random(550,300);
            }

            if (frameCount%100===0&&player.x>27308)
            {
                fireball4.visible=true;
                fireball4.velocityX=-8;
            }

            if (fireball4.x<27000)
            {
                fireball4.x=monster4.x;
                fireball4.y=random(550,300);
            }

            if (frameCount%100===0&&player.x>34900)
            {
                fireball5.visible=true;
                fireball5.velocityX=-8;
            }

            if (fireball5.x<34600)
            {
                fireball5.x=monster5.x;
                fireball5.y=random(550,300);
            }

            if (frameCount%100===0&&player.x>42372)
            {
                fireball6.visible=true;
                fireball6.velocityX=-8;
            }

            if (fireball6.x<42000)
            {
                fireball6.x=monster6.x;
                fireball6.y=random(-230,-300);
            }
         

 //   ground.velocityX=-10;
 //   ground2.velocityX=-10;
 //   ground3.velocityX=-10;
 //   ground4.velocityX=-10;
 //   ground5.velocityX=-10;

    camera.position.x=player.x;
    camera.position.y=player.y-150;

    healthbar.x=player.x-300;
    health.x=player.x-300;

    hungerbar.x=player.x+300;
    hunger.x=player.x+300;

    thirstbar.x=player.x+240;
    thirst.x=player.x+240;

    if (player.x>ground1.width+500){
      //  ground.x = ground.width/2;
      //ground1.x=ground5.x+7000;
      //ground_1.x=ground_5.x+7000;
      gameState="water";
      }

      if (ground2.x<player.x-5000)
      {
          //ground2.x=ground1.x+7000;
          //ground_2.x=ground_1.x+7000;
          gameState="desert";
      }

      if (ground3.x<player.x-5000)
      {
          //ground3.x=ground2.x+7000;
          //ground_3.x=ground_2.x+7000;
          gameState="jungle";
      }

      if (ground4.x<player.x-5000)
      {
         // ground4.x=ground3.x+7000;
         // ground_4.x=ground_3.x+7000;
          gameState="snow";
      }

      if (ground5.x<player.x-4000)
      {
         // ground5.x=ground4.x+7000;
          //ground_5.x=ground_4.x+7000;
          gameState="null";
      }

      if (player.x>36115)
      {
          gameState="space";
      }

  //    console.log(player.x);
  //    console.log(player.y);

   // console.log(ground.x);

   spawn_animal();


   if (keyDown("space")&&player.y>450&&player.y<550&&gameState==="grassland"||keyDown("space")&&player.y>450&&player.y<550&&gameState==="water"||keyDown("space")&&player.y>450&&player.y<550&&gameState==="desert"||keyDown("space")&&player.y>450&&player.y<550&&gameState==="jungle"||keyDown("space")&&player.y>450&&player.y<550&&gameState==="snow"||keyDown("space")&&player.y>450&&player.y<550&&gameState==="space"||keyDown("space")&&player.y>450&&player.y<550&&gameState==="null")
   {
       player.velocityY=-10;
      // player.velocityX=0;
   }

    if (player.y<550)
    {
        player.velocityY=player.velocityY+0.5;
    }

    //gun.debug=true;

    player.collide(ground_1);
    player.collide(ground_2);
    player.collide(ground_3);
    player.collide(ground_4);
    player.collide(ground_5);
    player.collide(ground_6);
/*
    groundgroup.add(ground1);
    groundgroup.add(ground2);
    groundgroup.add(ground3);
    groundgroup.add(ground4);
    groundgroup.add(ground5);
*/
    spawn_food();
 
    foodgroup.collide(ground1);
    foodgroup.collide(ground2);
    foodgroup.collide(ground3);
    foodgroup.collide(ground4);
    foodgroup.collide(ground5);
    foodgroup.collide(ground6);

    foodgroup2.collide(ground1);
    foodgroup2.collide(ground2);
    foodgroup2.collide(ground3);
    foodgroup2.collide(ground4);
    foodgroup2.collide(ground5);
    foodgroup2.collide(ground6);
    
    foodgroup3.collide(ground1);
    foodgroup3.collide(ground2);
    foodgroup3.collide(ground3);
    foodgroup3.collide(ground4);
    foodgroup3.collide(ground5);
    foodgroup3.collide(ground6);

    foodgroup4.collide(ground1);
    foodgroup4.collide(ground2);
    foodgroup4.collide(ground3);
    foodgroup4.collide(ground4);
    foodgroup4.collide(ground5);
    foodgroup4.collide(ground5);

    foodgroup5.collide(ground1);
    foodgroup5.collide(ground2);
    foodgroup5.collide(ground3);
    foodgroup5.collide(ground4);
    foodgroup5.collide(ground5);
    foodgroup5.collide(ground6);

    paanigroup.collide(ground1);
    paanigroup.collide(ground2);
    paanigroup.collide(ground3);
    paanigroup.collide(ground4);
    paanigroup.collide(ground5);
    paanigroup.collide(ground6);

    paanigroup2.collide(ground1);
    paanigroup2.collide(ground2);
    paanigroup2.collide(ground3);
    paanigroup2.collide(ground4);
    paanigroup2.collide(ground5);
    paanigroup2.collide(ground6);

    paanigroup3.collide(ground1);
    paanigroup3.collide(ground2);
    paanigroup3.collide(ground3);
    paanigroup3.collide(ground4);
    paanigroup3.collide(ground5);
    paanigroup3.collide(ground6);

    paanigroup4.collide(ground1);
    paanigroup4.collide(ground2);
    paanigroup4.collide(ground3);
    paanigroup4.collide(ground4);
    paanigroup4.collide(ground5);
    paanigroup4.collide(ground6);

    paanigroup5.collide(ground1);
    paanigroup5.collide(ground2);
    paanigroup5.collide(ground3);
    paanigroup5.collide(ground4);
    paanigroup5.collide(ground5);
    paanigroup5.collide(ground6);

    if (foodgroup.isTouching(player)){
        hungerbar.height=hungerbar.height+10;
        hungerbar.y=hungerbar.height-e;
       // eats.play();
       //playSound(eats,false);
        foodgroup.destroyEach();
    }

    if (foodgroup2.isTouching(player)){
        hungerbar.height=hungerbar.height+30;
        hungerbar.height=hungerbar.height-f;
       // playSound(eats,false);
       // eats.play();
        foodgroup2.destroyEach();
    }

    if (foodgroup3.isTouching(player)){
        hungerbar.height=hungerbar.height+10;
        hungerbar.height=hungerbar.height-e;
       // playSound(eats,false);
       // eats.play();
        foodgroup3.destroyEach();
    }

    if (foodgroup4.isTouching(player)){
        hungerbar.height=hungerbar.height+10;
        hungerbar.y=hungerbar.height-e;
      //  playSound(eats,false);
       // eats.play();
        foodgroup4.destroyEach();
    }

    if (foodgroup5.isTouching(player)){
        hungerbar.height=hungerbar.height+10;
        hungerbar.y=hungerbar.height-e;
      //  playSound(eats,false);
        //eats.play();
        foodgroup5.destroyEach();
    }

    if (paanigroup.isTouching(player)){
        thirstbar.height=thirstbar.height+10;
        thirstbar.y=thirstbar.height-e;
        paanigroup.destroyEach();
    }

    if (paanigroup2.isTouching(player)){
        thirstbar.height=thirstbar.height+10;
        thirstbar.y=thirstbar.height-f;
        paanigroup2.destroyEach();
    }

    if (paanigroup3.isTouching(player)){
        thirstbar.height=thirstbar.height+10;
        thirstbar.y=thirstbar.height-e;
        paanigroup3.destroyEach();
    }

    if (paanigroup4.isTouching(player)){
        thirstbar.height=thirstbar.height+10;
        thirstbar.y=thirstbar.height-e;
        paanigroup4.destroyEach();
    }

    if (paanigroup5.isTouching(player)){
        thirstbar.height=thirstbar.height+10;
        thirstbar.y=thirstbar.height-e;
        paanigroup5.destroyEach();
    }

    if (foodgroup.y>500){
        
            if (frameCount%100===0)
            {
                foodgroup.destroyEach();
            }
        }
        
    

    if (foodgroup2.y>500){
        
            if (frameCount%100===0)
            {
                foodgroup2.destroyEach();
            }
        }
        
    

    if (foodgroup3.y>500){
        
            if (frameCount%100===0)
            {
                foodgroup3.destroyEach();
            }
        }
        
    

    if (foodgroup4.y>500){
        
            if (frameCount%100===0)
            {
                foodgroup4.destroyEach();
            }
        }
        
    

    if (foodgroup5.y>500){
        
            if (frameCount%100===0)
            {
                foodgroup5.destroyEach();
            }
        }
        
    

    //text(p,player.x+100,400);c

/*   if (frameCount%500===0)
   {
       animalgroup.destroyEach();
   }*/

   if (gameState==="grassland")
   {
    hunger.y=player.y-300;
    hungerbar.y=player.y-300;
    thirst.y=player.y-300;
    thirstbar.y=player.y-300;
    health.y=player.y-300;
    healthbar.y=player.y-300;
       background(grass);
   }

   if (gameState==="desert")
   {
    hunger.y=player.y-300;
    hungerbar.y=player.y-300;
    thirst.y=player.y-300;
    thirstbar.y=player.y-300;
    health.y=player.y-300;
    healthbar.y=player.y-300;
       background(desert);
   }

   if (gameState==="snow")
   {
    hunger.y=player.y-300;
    hungerbar.y=player.y-300;
    thirst.y=player.y-300;
    thirstbar.y=player.y-300;
    health.y=player.y-300;
    healthbar.y=player.y-300;
       background(snow);
   }

   if (gameState==="water")
   {
    hunger.y=player.y-300;
    hungerbar.y=player.y-300;
    thirst.y=player.y-300;
    thirstbar.y=player.y-300;
    health.y=player.y-300;
    healthbar.y=player.y-300;
       background(sea);
   }

   if (gameState==="jungle")
   {
    hunger.y=player.y-300;
    hungerbar.y=player.y-300;
    thirst.y=player.y-300;
    thirstbar.y=player.y-300;
    health.y=player.y-300;
    healthbar.y=player.y-300;
       background(jungle);
   }

   if (gameState==="space")
   {
       hunger.y=player.y-300;
       hungerbar.y=player.y-300;
       thirst.y=player.y-300;
       thirstbar.y=player.y-300;
       health.y=player.y-300;
       healthbar.y=player.y-300;
       player.collide(ground5);
       player.collide(ground_5);
       if (keyDown("space")&&player.y>-300)
   {
       player.velocityY=-10;
      // player.velocityX=0;
   }
       background(space);
   }

   if (keyDown("space")&&player.isTouching(jet))
   {
       jet.velocityY=-5;
       player.y=player.y+10;
   }
   spawn_water();

  // animal.y=animal.y-0.3;

   player.collide(jet);

   if (frameCount%350===0)
{
    coin = createSprite(random(player.x+400,player.x-400),random(player.y-5,player.y-50),10,10);
    ar.push(coin);
  //  console.log(a);
        coin.addAnimation("coin",coinimg);
  //  coin.debug=true;
    coin.scale=0.1;
}
for (var i = 1;i<ar.length;i++)
    {
    if (player.isTouching(ar[i]))
    {
        score=score+10;
        ar[i].destroy();
   //     console.log("hsau");
    }
    if (gameState==="start")
    {
        ar[i].visible=false;
    }
    if (gameState==="death")
    {
        ar[i].destroy();
    }
}
    text("SCORE : "+score,player.x+350,player.y-300);

    animalgroup.y=animalgroup.y-0.3;
    if (frameCount%30===0)
    {
    if (keyDown("s"))
    {
        bullet=createSprite(gun.x,gun.y-10,10,10);
        bullet.scale=0.03;
        bullet.visible=false;
        var bulletg=createGroup();
        bulletg.add(bullet);
      gun.visible=true;
      bullet.visible=true;
      op=0;
      
    
      if (bullet.x===player.x+30)
      {
          bullet.addImage("bullet",bulletimg)
       bullet.y=gun.y-10;
          bullet.velocityX=20;
         // bullet.x=bullet.x;
        // gun.visible=true;
      }
    
      else if(bullet.x===player.x-30)
      {
         bullet.addImage("bullet",bulletl);
       bullet.y=gun.y-10;
          bullet.velocityX=-20;
         // bullet.x=bullet.x;
          console.log(bullet.x);
      }
      if (bullet.isTouching(animalgroup))
      {
          ee=ee-1;
         bullet.x=gun.x;
      }
    }
    }
    
   // console.log(healthbar.height);
   // console.log(player.x);
    

  /*  if (bullet.velocityX===5&&frameCount%150===0||bullet.velocityX===-5&&frameCount%150===0)
    {
        bullet.velocityX=0;
        bullet.x=gun.x;
       bullet.y=gun.y-10;
    }*/

    if (keyWentUp("s"))
    {
        gun.visible=false;
    }

    if (player.collide(fireball))
{
healthbar.height=healthbar.height-15;
fireball.x=monster1.x;
}

if (player.collide(fireball2))
{
healthbar.height=healthbar.height-15;
fireball2.x=monster2.x;
}

if (player.collide(fireball3))
{
healthbar.height=healthbar.height-15;
fireball3.x=monster3.x;
}

if (player.collide(fireball4))
{
healthbar.height=healthbar.height-15;
fireball4.x=monster4.x;
}

if (player.collide(fireball5))
{
healthbar.height=healthbar.height-15;
fireball5.x=monster5.x;
}

if (player.collide(fireball6))
{
healthbar.height=healthbar.height-15;
fireball6.x=monster6.x;
}

if (animalgroup.isTouching(player)&&frameCount%20===0)
{
healthbar.height=healthbar.height-10;
}

if (hungerbar.height>40&&frameCount%20===0||thirstbar.height>40&&frameCount%20===0)
{
healthbar.height=healthbar.height+5;
if (healthbar.height>health.height){
healthbar.height=health.height;
}
}
console.log(gameState);
if (hungerbar.height<5)
{
    hungerbar.visible=false;
}

if (healthbar.height<5&&gameState==="grassland"||healthbar.height<5&&gameState==="water"||healthbar.height<5&&gameState==="desert"||healthbar.height<5&&gameState==="jungle"||healthbar.height<5&&gameState==="snow"||healthbar.height<5&&gameState==="space")
{
    gameState="death";
}

if (gameState==="death")
{   
    cv=1;
    hunger.visible=false;
    hungerbar.visible=false;
    thirst.visible=false;
    thirstbar.visible=false;
    health.visible=false;
    healthbar.visible=false;
    foodgroup.destroyEach();
    foodgroup2.destroyEach();
    foodgroup3.destroyEach();
    foodgroup4.destroyEach();
    foodgroup5.destroyEach();
    paanigroup.destroyEach();
    paanigroup2.destroyEach();
    paanigroup3.destroyEach();
    paanigroup4.destroyEach();
    paanigroup5.destroyEach();
    animalgroup.destroyEach();
    player.velocityX=0;
    background("black");
    fireball.visible=false;
    fireball2.visible=false;
    fireball3.visible=false;
    fireball4.visible=false;
    fireball5.visible=false;
    fireball6.visible=false;
    monster1.visible=false;
    monster2.visible=false;
    monster3.visible=false;
    monster4.visible=false;
    monster5.visible=false;
    monster6.visible=false;
   // ar[i].destroyEach();
}    
if (cv===9)
{
    hunger.visible=true;
    hungerbar.visible=true;
    thirst.visible=true;
    thirstbar.visible=true;
    health.visible=true;
    healthbar.visible=true;
    
    if (a===0 && thirstbar.height===0 || hungerbar.height===0)
    {
        
    healthbar.height=healthbar.height-20;
    healthbar.y=healthbar.y+g;
    }

    if (frameCount%50===0&&a===1&&gameState!="death"||lives===2&&frameCount%50===0||lives===3&&frameCount%50===0&&a===1)
    {
    hungerbar.height=hungerbar.height-5;
    hungerbar.y=hungerbar.y+b;
    }

    if (frameCount%50===0&&a===1&&gameState!="death")
    {
    thirstbar.height=thirstbar.height-5;
    thirstbar.y=thirstbar.y+d;
    }

    if (hungerbar.height===0)
    {
        
       /// hungerbar.y===150;
        a=0;
        }

        if (thirstbar.height===0)
        {
            
           /// thirstbar.y===150;
            c=0;
            }
//console.log(hungerbar.height);
            if (a===0)
            {
                hungerbar.visible=false;
               
                //thirstbar.height=thirstbar.height-10;
            }

            if (c===0)
            {
                thirstbar.visible=false;
              
            }
            
}
    if (gameState==="death")
    {
        c=1;
        cv=1;
    hunger.visible=false;
    hungerbar.visible=false;
    thirst.visible=false;
    thirstbar.visible=false;
    health.visible=false;
    healthbar.visible=false;
    player.visible=false;
    player.velocityX=0;
    foodgroup.destroyEach();
    foodgroup2.destroyEach();
    foodgroup3.destroyEach();
    foodgroup4.destroyEach();
    foodgroup5.destroyEach();
    paanigroup.destroyEach();
    paanigroup2.destroyEach();
    paanigroup3.destroyEach();
    paanigroup4.destroyEach();
    paanigroup5.destroyEach();
    animalgroup.destroyEach();
    fireball.visible=false;
    fireball2.visible=false;
    fireball3.visible=false;
    fireball4.visible=false;
    fireball5.visible=false;
    fireball6.visible=false;
    monster1.visible=false;
    monster2.visible=false;
    monster3.visible=false;
    monster4.visible=false;
    monster5.visible=false;
    monster6.visible=false;
    background("black");
        button.show();
    button.mousePressed(()=>
    {
        lives=lives-1;
       if(player.x<7000)
       {
           gameState="grassland";
       }
       else if (player.x>7000)
       {
           gameState="water";
       }
       else if (player.x>14000)
       {
           gameState="desert";
       }
       else if (player.x>21000)
       {
           gameState="jungle";
       }
       else if (player.x>28000)
       {
           gameState="snow";
       }
       else if (player.x>36115)
       {
           gameState="null";
       }
       else if (player.x<36115)
       {
           gameState="space";
       }
       
       hunger.y=player.y-300;
       hungerbar.y=player.y-300;
       thirst.y=player.y-300;
       thirstbar.y=player.y-300;
       health.y=player.y-300;
       healthbar.y=player.y-300;
       hunger.visible=true;
       hungerbar.visible=true;
       thirst.visible=true;
       thirstbar.visible=true;
       health.visible=true;
       healthbar.visible=true;
       healthbar.height=health.height;
       thirstbar.height=thirst.height;
       hungerbar.height=hunger.height;
       fireball.velocityX=fireball.velocityX;
       fireball2.velocityX=fireball2.velocityX;
       fireball3.velocityX=fireball3.velocityX;
       fireball4.velocityX=fireball4.velocityX;
       fireball5.velocityX=fireball5.velocityX;
       fireball6.velocityX=fireball6.velocityX;
       fireball.visible=true;
    fireball2.visible=true;
    fireball3.visible=true;
    fireball4.visible=true;
    fireball5.visible=true;
    fireball6.visible=true;
    monster1.visible=true;
    monster2.visible=true;
    monster3.visible=true;
    monster4.visible=true;
    monster5.visible=true;
    monster6.visible=true;
    player.visible=true;
       player.velocityX=player.velocityX;
       console.log(healthbar.height);
       button.hide();
       k=1;
       cv=9;
       a=1;
    }
    )}

if (animalgroup.x>monster1.x-250)
{
    animalgroup.destroyEach();
}

if (animalgroup.x>monster2.x-250)
{
    animalgroup.destroyEach();
}

if (animalgroup.x>monster3.x-250)
{
    animalgroup.destroyEach();
}

if (animalgroup.x>monster4.x-250)
{
    animalgroup.destroyEach();
}

if (animalgroup.x>monster5.x-250)
{
    animalgroup.destroyEach();
}

if (animalgroup.x>monster6.x-250)
{
    animalgroup.destroyEach();
}
move_player();

if (ee===0)
{
    animalgroup.destroyEach();
    ee=2;
}

    drawSprites();
    text("LIVES : "+lives,player.x,player.y-300);
    text("bullets = "+op,player.x+30,player.y+50);
}

function spawn_animal()
{
    if (frameCount%300===0)
    {
     animal=createSprite(player.x-400,460,50,50);
     animal.y=animal.y-0.3;
     groundgroup.collide(animal);
     animal.debug=true;
     animal.setCollider("rectangle",0,0,500,500);
     if (gameState==="grassland")
     {
     animal.addImage("dog",dog);
     animal.scale=0.3;
     }
     else if(gameState==="water")
     {
         animal.addImage("octopus",octopus);
         animal.scale=0.7;
     }
     else if(gameState==="jungle")
     {
       animal.addImage("tiger",tiger)
       animal.scale=0.3;
     }
     else if (gameState==="snow")
     {
         animal.addImage("unicorn",unicorn);
         animal.scale=0.6;
     }
     else if (gameState==="space")
     {
        animal.addImage("alien",alien);
        animal.scale=0.7;
        animal.y=animal.y-30;
        animal.y=-310;
     }
     else if (gameState==="desert")
     {
         animal.addImage("crab",crab);
         animal.scale=0.5;
         animal.y=500;
     }
     else if (gameState==="null")
     {
         animal.destroy();
     }
     //animal.scale=0.3;
     animal.shapeColor="red";
     animal.velocityX=5;
     animalgroup.add(animal);
    }

}

function spawn_food()
{
    if (frameCount%200===0)
    {
        var y = random(400,750);
        var z = random(80,300);
       var apple = createSprite(random(player.x-250,player.x+250),player.y-150,50,50);
       var r = Math.round(random(1,5));
       switch (r) 
       {
           case 1 : apple.addImage("goldapple",goldapple);
           o=o+2
           foodgroup2.add(apple);
           break;
           case 2 : apple.addImage("apple",appleimg);
           o=o+20
           foodgroup.add(apple);
           break; 
           case 3 : apple.addImage("apple",appleimg);
           o=o+50
           foodgroup3.add(apple);
           break; 
           case 4 : apple.addImage("apple",appleimg);
           o=o+100
           foodgroup4.add(apple);
           break; 
           case 5 : apple.addImage("apple",appleimg);
           o=o+500
           foodgroup5.add(apple);
           break; 
           default:break;
       }
       apple.y=apple.y-0.3;
       apple.velocityY=8;
      // groundgroup.collide(apple);
      // apple.addImage("apple",appleimg);
       apple.scale=0.08;
    }
}

function spawn_water()
{
    if (frameCount%160===0)
    {
        var q = random(400,750);
        var x = random(80,300);
       var paani = createSprite(random(player.x-250,player.x+250),player.y-150,50,50);
       var rand = Math.round(random(1,5));
       switch (rand) 
       {
           case 1 : paani.addImage("juice",juiceimg);
           p=p+2
           paanigroup2.add(paani);
           break;
           case 2 : paani.addImage("water",waterimg);
           p=p+20
           paanigroup.add(paani);
           break; 
           case 3 : paani.addImage("water",waterimg);
           p=p+50
           paanigroup3.add(paani);
           break; 
           case 4 : paani.addImage("water",waterimg);
           p=p+100
           paanigroup4.add(paani);
           break; 
           case 5 : paani.addImage("water",waterimg);
           p=p+500
           paanigroup5.add(paani);
           break; 
           default:break;
       }
       paani.y=paani.y-0.3;
       paani.velocityY=8;
      // groundgroup.collide(apple);
      // apple.addImage("apple",appleimg);
      paani.scale=0.08;
    }
}

function move_player()
{
    if (keyDown("left_Arrow")&&gameState==="grassland"&&healthbar.height>0||keyDown("left_Arrow")&&gameState==="water"&&healthbar.height>0||keyDown("left_Arrow")&&gameState==="desert"&&healthbar.height>0||keyDown("left_Arrow")&&gameState==="jungle"&&healthbar.height>0||keyDown("left_Arrow")&&gameState==="snow"&&healthbar.height>0||keyDown("left_Arrow")&&gameState==="space"&&healthbar.height>0||keyDown("left_Arrow")&&gameState==="null"&&healthbar.height>0)
   {
       console.log("jijipglhai");
    player.addAnimation("player",player_img);
    gun.addImage("gun",gunl);
       player.velocityX=-5;
       player.height=player.height-0.2;
       player.velocityY=0;
       gun.velocityX=-5;
       gun.x=player.x-30;
       gun.y=player.y;
       }
    
   gun.y=player.y;

  /* if (keyUp("left_Arrow"))
   {
    player.addImage("player",player_img1);
       player.velocityX=-8;
       player.velocityY=0;
       gun.velocityX=0;
       camera.position.x=player.position.x;
   }
*/
   if (keyDown("right_Arrow")&&gameState==="grassland"&&healthbar.height>0||keyDown("right_Arrow")&&gameState==="water"&&healthbar.height>0||keyDown("right_Arrow")&&gameState==="desert"&&healthbar.height>0||keyDown("right_Arrow")&&gameState==="jungle"&&healthbar.height>0||keyDown("right_Arrow")&&gameState==="snow"&&healthbar.height>0||keyDown("right_Arrow")&&gameState==="space"&&healthbar.height>0||keyDown("right_Arrow")&&gameState==="null"&&healthbar.height>0)
   {      
    player.addAnimation("player",playerimg);
    gun.addImage("gun",gunimg);
       player.velocityX=5;
       player.velocityY=0;
       player.height=player.height-0.2;
       gun.velocityX=5;
       gun.x=player.x+30;
      
   }

 /*  if (keyWentUp("right_Arrow"))
   {
    player.addImage("player",player1img);
       player.velocityX=0;
       player.velocityY=0;
       gun.velocityX=0;
   }
*/
}

function hide()
{
    button.hide();
}
function bullet(x,y)
{
    bullet=createSprite(10,10,10,10);
    bullet.scale=0.03;
    bullet.visible=false;
    bullet.x=x;
    bullet.y=y;
}