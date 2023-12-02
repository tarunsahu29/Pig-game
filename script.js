'use strict'
let random = Math.trunc(Math.random() * 6) + 1

let scoreA = Number(document.querySelector('.score-1').textContent)
let scoreB = Number(document.querySelector('.score-2').textContent)
let score1 = Number(document.querySelector('.current-score-1').textContent)
let score2 = Number(document.querySelector('.current-score-2').textContent)
const modal = document.querySelector('.modal');
const winner = document.querySelector('.winner');
const diceImg = document.querySelector('.dice-img')
const currentBox2 = document.querySelector('.current-box2')
const currentBox1 = document.querySelector('.current-box1')
const sub2 = document.querySelector('.sub2')
const sub1 = document.querySelector('.sub1')
let temp = 0
let helper = true
diceImg.classList.add('hidden')
document.querySelector('.dice').addEventListener('click', function () {
  if (diceImg.classList.contains('hidden') && helper) {
    diceImg.classList.remove('hidden')
  }
  if (helper) {
    diceImg.src = `dice-${random}.png`
    if (random === 1) {
      temp = 0
      document.querySelector('.current-score-1').textContent = '0'
      document.querySelector('.current-score-2').textContent = '0'
      if (sub2.classList.contains('highlight')) {
        sub2.classList.remove('highlight')
        sub1.classList.add('highlight')
        currentBox2.classList.remove('new-current-box')
        currentBox1.classList.add('new-current-box')
      } else {
        sub2.classList.add('highlight')
        sub1.classList.remove('highlight')
        currentBox2.classList.add('new-current-box')
        currentBox1.classList.remove('new-current-box')
      }
    } else {
      temp += random
      if (sub2.classList.contains('highlight')) {
        document.querySelector('.current-score-1').textContent = temp
        score1 = temp
      } else {
        document.querySelector('.current-score-2').textContent = temp
        score2 = temp
      }
    }
    random = Math.trunc(Math.random() * 6) + 1
  }
})

document.querySelector('.hold').addEventListener('click', function () {
  if (!diceImg.classList.contains('hidden')) {
    if (sub2.classList.contains('highlight')) {
      scoreA = score1 + scoreA
      document.querySelector('.score-1').textContent = scoreA
      document.querySelector('.current-score-1').textContent = '0'
      if (scoreA >= 60) {
        // document.querySelector('.sub1').style.backgroundColor = '#000'
        document.querySelector('.player-1').classList.add('player-active');
        sub1.classList.add('highlight-black')
        helper = false
        diceImg.classList.add('hidden')
        modal.classList.remove('hidden');
        winner.textContent = `Player 1 wins (${scoreA}-${scoreB})`;
      } else {
        sub2.classList.remove('highlight')
        sub1.classList.add('highlight')
        currentBox2.classList.remove('new-current-box')
        currentBox1.classList.add('new-current-box')
      }
    } else {
      scoreB = score2 + scoreB
      document.querySelector('.score-2').textContent = scoreB
      document.querySelector('.current-score-2').textContent = '0'
      if (scoreB >= 60) {
        // document.querySelector('.sub2').style.backgroundColor = '#000'
        document.querySelector('.player-2').classList.add('player-active');
        sub2.classList.add('highlight-black')
        diceImg.classList.add('hidden')
        helper = false
        modal.classList.remove('hidden');
        winner.textContent = `Player 2 wins (${scoreB}-${scoreA})`;
      } else {
        sub2.classList.add('highlight')
        sub1.classList.remove('highlight')
        currentBox2.classList.add('new-current-box')
        currentBox1.classList.remove('new-current-box')
      }
    }
    score1 = 0
    score2 = 0
    temp = 0
  }
})

document.querySelector('.new-game').addEventListener('click', function () {
  currentBox2.classList.add('new-current-box')
  currentBox1.classList.remove('new-current-box')
  document.querySelector('.current-score-1').textContent = '0'
  document.querySelector('.current-score-2').textContent = '0'
  document.querySelector('.score-1').textContent = '0'
  document.querySelector('.score-2').textContent = '0'
  helper = true
  if (sub1.classList.contains('highlight-black')) {
    sub1.classList.remove('highlight-black')
    document.querySelector('.player-1').classList.remove('player-active');
  }
  if (sub2.classList.contains('highlight-black')) {
    sub2.classList.remove('highlight-black')
    document.querySelector('.player-2').classList.remove('player-active');
    // sub1.classList.remove('highlight')
    // sub2.classList.add('highlight')
  }
  sub1.classList.remove('highlight')
  sub2.classList.add('highlight')
  modal.classList.add('hidden');

  scoreA = 0
  scoreB = 0
  temp = 0
})
