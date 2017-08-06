enchant();


window.onload = function() {
    var size = 600
    var core = new Core(size, size);
    core.preload('chara1.png','effect0.png','map0.png');
    core.keybind( 65, 'a' );
    core.keybind( 83, 's' );
    core.keybind( 68, 'd' );
    core.keybind( 87, 'w' );
    core.onload = function() {
        var map = new Map(16, 16);
    map.image = core.assets['map0.png'];
    var baseMap = [
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
      [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]


    ];
    map.loadData(baseMap);
     
    core.rootScene.addChild(map);


        var attack = Class.create(Sprite,{
            initialize: function(x,y,key){
                Sprite.call(this,16,16);
                this.x=x;
                this.y=y;
                this.alive=1;
                this.frame=1;
                this.speed=20;
                this.image = core.assets['effect0.png'];
                this.on('enterframe', function() {
                    this.frame = this.age % 2;
                    if(key=='d')
                        this.x+=this.speed;
                    if(key=='a')
                        this.x-=this.speed;
                    if(key=='s')
                        this.y+=this.speed;
                    if(key=='w')
                        this.y-=this.speed;
                    if(this.age>50){
                        core.rootScene.removeChild(this);
                        this.alive=0;
                    }

                });
                core.rootScene.addChild(this);
            }
        });


        var bear = new Sprite(32, 32);
        bear.frame = 1;
        bear.image = core.assets['chara1.png'];
        bear.x = size/2;
        bear.y = size/2;
        bear.fire=100;
        core.rootScene.addChild(bear);
        bear.on('enterframe', function() {
            if(this.x<0)
                this.x=0;
            if(this.y<0)
                this.y=0;
            if(this.x>size-36)
                this.x=size-36;
            if(this.y>size-36)
                this.y=size-36;

            if (core.input.left) {
                this.x -= 7;
                this.frame = this.age % 3;
                if(this.scaleX==1)
                    this.scale(-1.00, 1.00); 
            }
            if (core.input.right) {
                this.x += 7;
                this.frame = this.age % 3;
                if(this.scaleX==-1)
                    this.scale(-1.00, 1.00);
            }
            if (core.input.up){
                this.y -= 7;
                this.frame = this.age % 3;
            }
            if (core.input.down){
                this.y += 7;
                this.frame = this.age % 3;
            }
            if (core.input.a && this.fire>0){
                this.fire--;
                attacks.push(new attack(this.x,this.y,'a'));
            }
            else if (core.input.s&& this.fire>0){
                this.fire--;
                 attacks.push(new attack(this.x,this.y,'s'));
            }
            else if (core.input.d&& this.fire>0){
                this.fire--;
                 attacks.push(new attack(this.x,this.y,'d'));
            }
            else if (core.input.w&& this.fire>0){
                this.fire--;
                 attacks.push(new attack(this.x,this.y,'w'));
            }
            for(var i=0;i<monsters.length;i++)
                {
                    if (this.within(monsters[i], 7) && monsters[i].alive==1) {
                        core.rootScene.removeChild(this);
                        core.stop();
                        alert("You have survived for "+(core.frame / core.fps).toFixed(2) +"sec");
                    }
                    
                }
        });

        bear.on('touchstart', function() {
            core.rootScene.removeChild(this);
        });

/*        var monster = new Sprite(32,32);
        monster.frame=1;
        monster.image = core.assets['chara1.png'];
        monster.x = 500;
        monster.y = 500;
        core.rootScene.addChild(monster);
        monster.on('enterframe', function() {
            if (this.x>bear.x) {
                this.x -= 2;
                this.frame = this.age % 3 + 5 ;
                if(this.scaleX==1)
                    this.scale(-1.00, 1.00); 
            }
            if (this.x<bear.x) {
                this.x += 2;
                this.frame = this.age % 3+ 5;
                if(this.scaleX==-1)
                    this.scale(-1.00, 1.00);
            }
            if (this.y>bear.y){
                this.y -= 2;
                this.frame = this.age % 3+ 5;
            }
            if (this.y<bear.y){
                this.y += 2;
                this.frame = this.age % 3+ 5;
            }
        });*/
    

        var monster = Class.create(Sprite, {
            initialize: function(x, y) {
                Sprite.call(this, 32, 32);
                this.x = x;
                this.y = y;
                this.ax = 0;
                this.ay = 0;
                this.frame=5;
                this.alive=1;
                this.image = core.assets['chara1.png'];
                this.on('enterframe', function() {
                    this.x = this.x + this.ax;
                    this.y = this.y + this.ay;
                    if(this.ax>3)this.ax=3;
                    if(this.ay>3)this.ay=3;
                    if(this.ax<-3)this.ax=-3;
                    if(this.ay<-3)this.ay=-3;
                    if (this.x>bear.x) {
                        this.ax -= 1;
                        this.frame = this.age % 3 + 5 ;
                        if(this.scaleX==1)
                            this.scale(-1.00, 1.00); 
                    }
                    if (this.x<bear.x) {
                        this.ax += 1;
                        this.frame = this.age % 3+ 5;
                        if(this.scaleX==-1)
                            this.scale(-1.00, 1.00);
                    }
                    if (this.y>bear.y){
                        this.ay -= 1;
                        this.frame = this.age % 3+ 5;
                    }
                    if (this.y<bear.y){
                        this.ay += 1;
                        this.frame = this.age % 3+ 5;
                    }
                    for(var i=0;i<attacks.length;i++)
                    if (this.within(attacks[i], 30) && attacks[i].alive==1) {
                        core.rootScene.removeChild(this);
                        this.alive=0;
                        attacks[i].alive=0;
                        core.rootScene.removeChild(attacks[i]);
                    }
                });
                core.rootScene.addChild(this);
            }
        });
    
        var monsters = [];
        var attacks =[];

        var label = new Label();
        label.x = 2*size/3 -20;
        label.y = 5;
        label.color = 'red';
        label.font = '14px "Arial"';
        label.text = '0';
        label.on('enterframe', function() {
            label.text = (core.frame / core.fps).toFixed(2);
            monsters.push(new monster(size/2*Math.random()+size*Math.floor(2*Math.random()),size*Math.floor(2*Math.random())));
        });

        core.rootScene.addChild(label);

        var firenum = new Label();
        firenum.x = size/3 -20;
        firenum.y = 5;
        firenum.color = 'red';
        firenum.font = '14px "Arial"';
        firenum.text = '0';
        firenum.on('enterframe', function() {
            if(Math.random()>0.5)bear.fire++;
            firenum.text = "Bullets : "+bear.fire;
        });

        core.rootScene.addChild(firenum);
    };
    
    core.fps = 15;

    core.start();

};


