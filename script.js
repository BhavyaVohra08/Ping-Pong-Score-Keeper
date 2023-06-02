const btn1 = document.querySelector('#btn1');

const btn2 = document.querySelector('#btn2');

const reset = document.querySelector('#btn3');

const p1Display = document.querySelector('#p1Display');

const p2Display = document.querySelector('#p2Display');

const winningScoreSelect = document.querySelector('#winningScore');

let winningScore = 5;

let p1Score = 0;
let p2Score = 0;

let isGameOver = false;

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    rest();
})

btn1.addEventListener('click', ()=>{
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            btn1.disabled = true;
            btn2.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

btn2.addEventListener('click', ()=>{
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('has-text-danger');
            p2Display.classList.add('has-text-success');
            btn1.disabled = true;
            btn2.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

reset.addEventListener('click', rest)

function rest() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.classList.remove('has-text-danger', 'has-text-success')
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    btn1.disabled = false;
    btn2.disabled = false;
}



