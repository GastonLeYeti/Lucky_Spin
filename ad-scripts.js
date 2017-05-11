var go = true;
window.addEventListener("load", function() {
    tool_1();
});
window.addEventListener("resize", tool_1);

function tool_1(){ //centrer l'ad
    var hauteur=document.getElementById("spin").offsetHeight,
        largeur=document.getElementById("spin").offsetWidth,
        hauteur_body=document.body.scrollHeight,
        largeur_body=document.body.scrollWidth,
        marge_cote=(largeur_body-largeur)/2+'px',
        marge_haut=(hauteur_body-hauteur)/2+'px';
    document.getElementById('spin').style.left = marge_cote;
    document.getElementById('spin').style.top = marge_haut;
        
}

function choose(){
    if(go){
    var div = document.getElementById('roue'),
        deg = Math.round((Math.random() * 360) * 5),
        deg_modulo = deg % 30,
        deg_final = deg - deg_modulo + 15;

    div.style.webkitTransform = 'rotate('+deg_final+'deg)'; 
    div.style.transform       = 'rotate('+deg_final+'deg)'; 
    console.log(deg);
    console.log(deg_modulo);
    console.log(deg_final);
    go=false;
    }
}

