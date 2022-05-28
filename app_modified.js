// For the purpose of game integrity, some functions are not included in the file. Please contact me if you would like to see the original file.

let num = 0;
let temp = 0;
let circle_coord = [];
let level = 0;
let q1 = 0;
let q2 = 0;
let q3 = 0;
let len_x = 0;
let len_y = 0;
let first_x = 0;
let first_y = 0;

function random_hints() {
    len_x = String(circle_coord[0]).length;
    len_y = String(circle_coord[1]).length;
    first_x = String(circle_coord[0])[0];
    first_y = String(circle_coord[1])[0];
    let one = []
    let two = []
    let three = []
    q1 = Math.floor(Math.random() * one.length)
    q2 = Math.floor(Math.random() * two.length)
    q3 = Math.floor(Math.random() * three.length)
    let question1 = one[q1];
    let question2 = two[q2];
    let question3 = three[q3];
    document.querySelector("#q1").innerHTML = `${question1}`
    document.querySelector("#q2").innerHTML = `${question2}`
    document.querySelector("#q3").innerHTML = `${question3}`
}

function user_hints() {
    let state = document.querySelector('#help');
    state.onclick = () => {
        temp = num;
        num = 10;
    }
    document.querySelector('#hint1').onclick = () => {
        temp = num;
        num = 10;
        document.querySelector('#popup').classList.toggle("hint1");
        document.querySelector('#ans').onclick = () => {
            temp = num;
            num = 10;
        }
        document.querySelector('#sub').onclick = () => {
            temp = num;
            num = 10;
            let val = document.querySelector('#ans').value;
            if (level === 1) {
                if (val.toLowerCase() === easy_q1a[q1]) {
                    correct_answer(1)
                }
            } else if (level === 2) {
                if (val.toLowerCase() === med_q1a[q1]) {
                    correct_answer(1)
                }
            } else if (level === 3) {
                if (val.toLowerCase() === hard_q1a[q1]) {
                    correct_answer(1)
                }
            }
        }
        document.querySelector('.close1').onclick = () => {
            temp = num;
            num = 10;
            document.querySelector('#popup').classList.toggle("hint1");
        }; 
    };
    document.querySelector('#hint2').onclick = () => {
        temp = num;
        num = 10;
        document.querySelector('#popup').classList.toggle("hint2");
        document.querySelector('#ans2').onclick = () => {
            temp = num;
            num = 10;
        }
        document.querySelector('#sub2').onclick = () => {
            temp = num;
            num = 10;
            let val = document.querySelector('#ans2').value;
            if (level === 1) {
                if (val.toLowerCase() === easy_q2a[q2]) {
                    correct_answer(2)
                }
            } else if (level === 2) {
                if (val.toLowerCase() === med_q2a[q2]) {
                    correct_answer(2)
                }
            } else if (level === 3) {
                if (val.toLowerCase() === hard_q2a[q2]) {
                    correct_answer(2)
                }
            }
        }
        document.querySelector('.close2').onclick = () => {
            temp = num;
            num = 10;
            document.querySelector('#popup').classList.toggle("hint2");
        }; 
    };
    document.querySelector('#hint3').onclick = () => {
        temp = num;
        num = 10;
        document.querySelector('#popup').classList.toggle("hint3");
        document.querySelector('#ans3').onclick = () => {
            temp = num;
            num = 10;
        }
        document.querySelector('#sub3').onclick = () => {
            temp = num;
            num = 10;
            let val = document.querySelector('#ans3').value;
            if (level === 1) {
                if (val.toLowerCase() === easy_q3a[q3]) {
                    correct_answer(3)
                }
            } else if (level === 2) {
                if (val.toLowerCase() === med_q3a[q3]) {
                    correct_answer(3)
                }
            } else if (level === 3) {
                if (val.toLowerCase() === hard_q3a[q3]) {
                    correct_answer(3)
                }
            }
        }
        document.querySelector('.close3').onclick = () => {
            temp = num;
            num = 10;
            document.querySelector('#popup').classList.toggle("hint3");
        }; 
    };
}

function compare(circle_coord, user_x, user_y, coordinate) {
    let circle_x = circle_coord[0];
    let circle_y = circle_coord[1];
    if (level === 1) {
        if (user_x >= (circle_x - 60) && user_x <= (circle_x + 60)) {
            if (user_y >= (circle_y - 60) && user_y <= (circle_y + 60)) {
                document.querySelector("#win").style.display = "block";
                coordinate.style.display = "none";
                document.querySelector("#q1a").style.display = "none";
                document.querySelector("#q2a").style.display = "none";
                document.querySelector(".center").style.display = "block";
                document.querySelector("#circle_button").style.display = "block";
                const music = new Audio('win.mp3');
                music.play();
            }
        }
    } else if (level === 2) {
        if (user_x >= (circle_x - 40) && user_x <= (circle_x + 40)) {
            if (user_y >= (circle_y - 40) && user_y <= (circle_y + 40)) {
                document.querySelector("#win").style.display = "block";
                coordinate.style.display = "none";
                document.querySelector("#q1a").style.display = "none";
                document.querySelector("#q2a").style.display = "none";
                document.querySelector(".center").style.display = "block";
                document.querySelector("#circle_button").style.display = "block";
                const music = new Audio('win.mp3');
                music.play();
            }
        }
    } else if (level === 3) {
        if (user_x >= (circle_x - 20) && user_x <= (circle_x + 20)) {
            if (user_y >= (circle_y - 20) && user_y <= (circle_y + 20)) {
                document.querySelector("#win").style.display = "block";
                coordinate.style.display = "none";
                document.querySelector("#q1a").style.display = "none";
                document.querySelector("#q2a").style.display = "none";
                document.querySelector(".center").style.display = "block";
                document.querySelector("#circle_button").style.display = "block";
                const music = new Audio('win.mp3');
                music.play();
            }
        }
    }
    console.log(user_x)
    console.log(user_y)

}

function play_game() {
    let width = screen.width;
    let height = screen.height - 80;
    let x_coord = Math.round((Math.floor(Math.random() * width)) / 10) * 10;
    let y_coord = Math.round((Math.floor(Math.random() * height)) / 10) * 10;
    if (level === 1) {
        circle_coord = [x_coord + 60, y_coord + 60];
    } else if (level === 2) {
        circle_coord = [x_coord + 40, y_coord + 40];
    } else if (level === 3) {
        circle_coord = [x_coord + 20, y_coord + 20];
    }
    console.log(circle_coord);
    document.querySelector("#circle_button").style.left = x_coord +"px";
    document.querySelector("#circle_button").style.top = y_coord + "px";
    return circle_coord;
}

function show_coordinates() {
    let coordinate = document.querySelector("#coordinates");
    let clicks = document.querySelector(".clicks");
    let counter = 3;
    let circle_coord = play_game();
    setInterval( () => {
        counter--;
        if (counter === -1) {
            coordinate.style.display = "block";
            clicks.style.display = "block";
            document.addEventListener('click', (e) => {
                let x = e.pageX;
                let y = e.pageY;
                const user_coord = `X: ${x} , Y: ${y}`;
                if (num == 7) {
                    document.querySelector("h4").innerHTML = `Past Clicks: ${num} / 7`;
                    const li = document.createElement('li')
                    li.innerHTML = user_coord;
                    document.querySelector("#gameover").style.display = "block";
                    document.querySelector("#win").style.display = "none";
                    document.querySelector("#q1a").style.display = "none";
                    document.querySelector("#q2a").style.display = "none";
                    coordinate.style.display = "none";
                    document.querySelector(".center").style.display = "block";
                    const music = new Audio('lose.mp3');
                    music.play();
                    document.querySelector("#circle_button").style.display = "block";
                    return false;
                }
                
                if (num < 10) {;
                    num++;
                    document.querySelector("h4").innerHTML = `Past Clicks: ${num} / 7`;   
                    const li = document.createElement('li')
                    li.innerHTML = user_coord;
                    document.querySelector("#click").append(li);
                    compare(circle_coord, x, y, coordinate, clicks);
                } else {
                    num = temp;
                }
            });

            document.addEventListener('mousemove', (e) => {
                coordinate.innerText = `X: ${e.pageX} , Y: ${e.pageY}`;
            });
        }
    }, 1000) 
}


function find_level() {
    document.querySelector("#easy").onclick = () => {
        document.querySelector("h3").innerHTML = `You chose Easy. Good Luck!`
        level = 1;
        timer();
        show_coordinates();
        user_hints();
        random_hints();
    }

    document.querySelector("#medium").onclick = () => {
        document.querySelector("h3").innerHTML = `You chose Medium. Good Luck!`
        level = 2;
        document.querySelector("#circle_button").style.width = "100px";
        document.querySelector("#circle_button").style.height = "100px";
        timer();
        show_coordinates();
        user_hints();
        random_hints();
    }

    document.querySelector("#hard").onclick = () => {
        document.querySelector("h3").innerHTML = `You chose Hard. Good Luck!`
        level = 3;
        document.querySelector("#circle_button").style.width = "40px";
        document.querySelector("#circle_button").style.height = "40px";
        timer();
        show_coordinates();
        user_hints();
        random_hints();
    }
}

function audio() {
    const music = new Audio('bg_music.mp3');
    music.pause();
    document.querySelector("#mus").onclick = () => {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }    
    }

}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#instructions').onclick = () => {
        document.querySelector('#popup').classList.toggle("active");
        document.querySelector('.close').onclick = () => {
            document.querySelector('#popup').classList.toggle("active");
        }; 
    };
    audio()
    find_level();
    
})
