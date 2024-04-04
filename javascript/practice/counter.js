const dc = document.getElementById("dc");
const rs = document.getElementById("rs");
const inc = document.getElementById("inc");
const cnt = document.getElementById("cnt");
let count = 0;


inc.onclick = function() {
    count++;
    cnt.textContent = count;
}


rs.onclick = function() {
    count = 0;
    cnt.textContent = count;
}

dc.onclick = function() {
    count--;
    cnt.textContent = count;
}
