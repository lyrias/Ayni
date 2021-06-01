function getData(){
var demo1 = document.getElementsByName("p1");
	if (demo1[0].checked) {
		p1 = parseInt("60");
	}else if (demo1[1].checked) {
		p1 = parseInt("1");
	}
var demo2 = document.getElementsByName("p2");
	if (demo2[0].checked) {
		p2 = parseInt("15");
	}else if (demo2[1].checked) {
		p2 = parseInt("1");
	}
var demo3 = document.getElementsByName("p3");
	if (demo3[0].checked) {
		p3 = parseInt("15");
	}else if (demo3[1].checked) {
		p3 = parseInt("1");
	}
var demo4 = document.getElementsByName("p4");
	if (demo4[0].checked) {
		p4 = parseInt("1");
	}else if (demo4[1].checked) {
		p4 = parseInt("1");
	}
var demo5 = document.getElementsByName("p5");
	if (demo5[0].checked) {
		p5 = parseInt("1");
	}else if (demo5[1].checked) {
		p5 = parseInt("1");
	}
var demo6 = document.getElementsByName("p6");
	if (demo6[0].checked) {
		p6 = parseInt("29");
	}else if (demo6[1].checked) {
		p6 = parseInt("1");
	}

var demo7 = document.getElementsByName("p7");
	if (demo7[0].checked) {
		p7 = parseInt("1");
	}else if (demo7[1].checked) {
		p7 = parseInt("1");
	}
var demo8 = document.getElementsByName("p8");
	if (demo8[0].checked) {
		p8 = parseInt("-15");
	}else if (demo8[1].checked) {
		p8 = parseInt("1");
	}
var total = p1+p2+p3+p4+p5+p6+p7+p8;

if (total>=35) {
	getTest('compatible');
}else{
	getTest('nocompatible');
}
}
/** funciones para iteraccion con el ususairo*/
function muestra_inicio(){
		var	inicio = document.getElementById('test');
		inicio.style.display = (inicio.style.display == 'none')?'block':'none';
		var	pagina = document.getElementById('compatible');
		pagina.style.display = (pagina.style.display == 'none')?'block':'none';
		var	pagina = document.getElementById('nocompatible');
		pagina.style.display = (pagina.style.display == 'none')?'block':'none';
}
function muestra_test (id) {
	if (document.getElementById) {
		var	pagina = document.getElementById(id);
		pagina.style.display = (pagina.style.display == 'none')?'block':'none';
		var	inicio = document.getElementById('inicio');
		inicio.style.display = (inicio.style.display == 'none')?'block':'none';
	}
}
// reseteo de los valores del test
function muestra_test_compatible(id) {
	if (document.getElementById) {
		var	pagina = document.getElementById(id);
		pagina.style.display = (pagina.style.display == 'none')?'block':'none';
		var	inicio = document.getElementById('compatible');
		inicio.style.display = (inicio.style.display == 'none')?'block':'none';
	}
}
function muestra_test_nocompatible(id) {
	if (document.getElementById) {
		var	pagina = document.getElementById(id);
		pagina.style.display = (pagina.style.display == 'none')?'block':'none';
		var	inicio = document.getElementById('nocompatible');
		inicio.style.display = (inicio.style.display == 'none')?'block':'none';
	}
}
//
function getTest (id) {
	if (document.getElementById) {
		var	pagina = document.getElementById(id);
		pagina.style.display = (pagina.style.display == 'none')?'block':'none';
		var	inicio = document.getElementById('test');
		inicio.style.display = (inicio.style.display == 'none')?'block':'none';
	}
}
window.onload = function(){
	muestra_inicio();		
}