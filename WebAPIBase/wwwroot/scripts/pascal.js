window.onload = function () {
    initPascal(10);
};

var initPascal = function (n) {
    for (var sor = 0; sor < 10; sor++) {
        var ujDiv = document.createElement("div")
        ujDiv.classList.add("sor");//új div osztálylistájához add hozzá a "sor"-t
        document.getElementById("pascal").appendChild(ujDiv);//új div-et add hozzá a "pascal" gyermekeihez

        
        
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujElem = document.createElement("div")//új div létrehozása az új elemnek
            ujElem.classList.add("elem");//új elem div osztálylistájához add hozzá az "elem"-et
            //ujElem.innerHTML = sor + ';' + oszlop;//teszteléshet .innerHTML = `${sor}:${oszlop}`
            ujElem.innerHTML = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop));
            //legyen az innerHTML a megfelelő szám
            ujDiv.appendChild(ujElem);//új elem div-et vedd fel a sor elemei közé
        }
    }
}
var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
};
