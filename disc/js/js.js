let vez = 1
let xo = ['','','',
          '','','', 
          '','',''
]

function p1(){
let jogo = document.querySelector('div#play1')
if(vez == 1 && xo[0] == '') {
  xo[0] = 'X'
  vez += 1
  jogo.innerText = `${xo[0]}`
}else if (vez == 2 && xo[0] == '') {
  xo[0] = 'O'
  vez -= 1
  jogo.innerText = `${xo[0]}`
}
 
}

function p2(){
let jogo = document.querySelector('div#play2')
if(vez == 1 && xo[1] == '') {
  xo[1] = 'X'
  vez += 1
  jogo.innerText = `${xo[1]}`
}else if (vez == 2 && xo[1] == '') {
  xo[1] = 'O'
  vez -= 1
  jogo.innerText = `${xo[1]}`
}

}

function p3(){
let jogo = document.querySelector('div#play3')
if(vez == 1 && xo[2] == '') {
  xo[2] = 'X'
  vez += 1
  jogo.innerText = `${xo[2]}`
}else if (vez == 2 && xo[2] == '') {
  xo[2] = 'O'
  vez -= 1
  jogo.innerText = `${xo[2]}`
}
 
}

function p4(){
let jogo = document.querySelector('div#play4')
if(vez == 1 && xo[3] == '') {
  xo[3] = 'X'
  vez += 1
  jogo.innerText = `${xo[3]}`
}else if (vez == 2 && xo[3] == '') {
  xo[3] = 'O'
  vez -= 1
  jogo.innerText = `${xo[3]}`
}

}

function p5(){
let jogo = document.querySelector('div#play5')
if(vez == 1 && xo[4] == '') {
  xo[4] = 'X'
  vez += 1
  jogo.innerText = `${xo[4]}`
}else if (vez == 2 && xo[4] == '') {
  xo[4] = 'O'
  vez -= 1
  jogo.innerText = `${xo[4]}`
}


}

function p6(){
let jogo = document.querySelector('div#play6')
if(vez == 1 && xo[5] == '') {
  xo[5] = 'X'
  vez += 1
  jogo.innerText = `${xo[5]}`
}else if (vez == 2 && xo[5] == '') {
  xo[5] = 'O'
  vez -= 1
  jogo.innerText = `${xo[5]}`
}

}

function p7(){
let jogo = document.querySelector('div#play7')
if(vez == 1 && xo[6] == '') {
  xo[6] = 'X'
  vez += 1
  jogo.innerText = `${xo[6]}`
}else if (vez == 2 && xo[6] == '') {
  xo[6] = 'O'
  vez -= 1
  jogo.innerText = `${xo[6]}`
}

}

function p8(){
let jogo = document.querySelector('div#play8')
if(vez == 1 && xo[7] == '') {
  xo[7] = 'X'
  vez += 1
  jogo.innerText = `${xo[7]}`
}else if (vez == 2 && xo[7] == '') {
  xo[7] = 'O'
  vez -= 1
  jogo.innerText = `${xo[7]}`
}

}

function p9(){
let jogo = document.querySelector('div#play9')
if(vez == 1 && xo[8] == '') {
  xo[8] = 'X'
  vez += 1
  jogo.innerText = `${xo[8]}`
}else if (vez == 2 && xo[8] == '') {
  xo[8] = 'O'
  vez -= 1
  jogo.innerText = `${xo[8]}`
}

}

