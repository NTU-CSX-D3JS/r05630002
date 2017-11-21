function myFunction(p1, p2) {
    var show = "((" + p1.toString() + "-" + p1.toString() + ")*(" + p1.toString() + "-" + p2.toString() + ")) = ";
    var ans = ((p1 - p2) * (p1 - p2));
    var str = show + ans.toString();
    return str
}

function d3select(id) {
	return document.getElementById(id);
}

function changeColor(id) {
	return document.getElementById(id).setAttribute("color", "pink");
}

