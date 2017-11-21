function myFunction(c1, c2) {
    var show = "((" + c1.toString() + "-" + c1.toString() + ")*(" + c1.toString() + "+" + c2.toString() + ")) = ";
    var ans = ((c1 - c2) * (c1 + c2));
    var str = show + ans.toString();
    return str
}

function d3select(id) {
	return document.getElementById(id);
}

function changeColor(id) {
	return document.getElementById(id).setAttribute("style", "color:pink;");
}