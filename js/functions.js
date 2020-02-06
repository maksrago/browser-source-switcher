var URLs = [
  "URL1",
  "URL2"
];
var currURL = 0;
var activeIFrame = document.getElementById("iFrameA");
var oldIFrame = document.getElementById("iFrameB");
var temp;

function cycle() {
  currURL = (currURL + 1) % URLs.length;
  activeIFrame.src = URLs[currURL];
  activeIFrame.onload = function() {
    activeIFrame.classList.remove("fadeIn");
    activeIFrame.classList.remove("fadeOut");
    activeIFrame.classList.add("fadeIn");
    oldIFrame.classList.remove("fadeIn");
    oldIFrame.classList.remove("fadeOut");
    oldIFrame.classList.add("fadeOut");
    activeIFrame.style.zIndex = "2";
    oldIFrame.style.zIndex = "1";
    temp = activeIFrame;
    activeIFrame = oldIFrame;
    oldIFrame = temp;
    setTimeout(cycle, 10000);
  }
}

cycle();
