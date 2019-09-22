let player = new MyPlane(5, 180, 430);
let bulletes = [];
let enemies = [];

function createEnemy() {
    let num = Math.random() * 1000;
    if (num < 10) {
        let enemy = new EnemyPlane(1, this.x, -20);
        enemies.push(enemy);
    }
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].y < 500) {
            enemies[i].move();
            enemies[i].draw();
        } else {
            enemies[i].y = 0;
        }
    }
}

function createBullet() {
    let bullet = new Bullet(1, player.x + 25, 435);
    bulletes.push(bullet);
    for (let i = 0; i < bulletes.length; i++) {
        if (i % 10 === 0) {
            if (bulletes[i].y > 0) {
                bulletes[i].move();
                bulletes[i].drawBullet();
            }
        }
    }
}

// function showEnermy() {
//     for (let i = 0; i < enemies.length; i++) {
//         if (enemies[i].y >= 500) {
//             enemies.splice(i, 1);
//             i--;
//         } else {
//             enemies[i].move();
//             enemies[i].draw();
//
//         }
//     }

    function control() {
        window.addEventListener('keydown', move);
    }

    function move(value) {
        switch (value.which) {
            case 37:
                player.moveLeft();
                clearScreen();
                player.drawPlane();
                for (let i = 0; i < bulletes.length; i++) {
                    if (bulletes[i].y > 0) {
                        bulletes[i].moveLeft();
                    }
                }
                break;
            case 39:
                player.moveRight();
                clearScreen();
                player.drawPlane();
                for (let i = 0; i < bulletes.length; i++) {
                    if (bulletes[i].y > 0) {
                        bulletes[i].moveRight();
                    }
                }
                break;
        }
    }

    function clearScreen() {
        ctx.clearRect(0, 0, 400, 500);
    }

    function main() {
        clearScreen();
        createEnemy();
        // showEnermy();
        createBullet();
        player.drawPlane();
        control(player);
        requestAnimationFrame(main);
    }

    main();