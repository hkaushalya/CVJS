/*$(document).ready(function(){
    $('#ldiv').illuminate({
    'intensity': '0.3',
    'color': '#98cb00',
    'blink': 'true',
    'blinkSpeed': '1200',
    'outerGlow': 'true',
    'outerGlowSize': '30px',
    'outerGlowColor': '#98cb00'
    });
});
*/

function OnMouseIn(elem) {
    //code
    //elem.style.border = "2px solid blue";
    //elem.style.background-color = "#99CCCC" ;
    elem.style.border-color = "#ffccff";
};

function OnMouseOut(elem) {
    ele.style.border = "";
}

function changeContent(srdId, tgtId, msg) {
	console.log("In changeContent");
	var el = getElementById(srcId);
	if (el) {
		el.innerHTML = "SOMETHING NEW";
	}
}
