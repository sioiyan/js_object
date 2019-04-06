'use strict';

{
    class Player { //親クラス
        constructor(name, score) {
            this.name = name;
            this.score = score;
        }

        showInfo() {
            console.log(`name: ${this.name} score: ${this.score}`);
        }

    }


    class SoccerPlayer extends Player { //子クラス
        constructor(name, score, number) {
            super(name, score);
            this.number = number;
        }
        kick() {
            console.log('Gooooaaaaal!');
        }
    }

    const tsubasa = new SoccerPlayer('tsubasa', 99, 10);

    tsubasa.kick();
    console.log(tsubasa.number);
    tsubasa.showInfo();
}


