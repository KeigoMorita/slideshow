let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://www.haagen-dazs.co.jp/products/uploads/images/20190601_09.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/20190601_08.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/20190601_07.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/20190601_06.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/20190601_05.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/20190601_04.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/20200310.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/20200804.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/minicup_mixed-berries-cream-cheese.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/minicup_pistachio-milk.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/minicup_chai-milk-tea.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/minicup_heavenly-caramel.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/20220201.png",
"https://www.haagen-dazs.co.jp/products/uploads/images/20210427.png",

];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 700);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
