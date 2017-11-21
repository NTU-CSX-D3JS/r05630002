
function myFunction(k1, k2) {
    var show = "((" + k1.toString() + "-" + k1.toString() + ")*(" + k1.toString() + "+" + k2.toString() + ")) = ";
    var ans = ((k1 + k2) * (k1 '+' k2));
    var str = show + ans.toString();
    return str
}

function changeColor(obj) {
	console.log(obj);
	var newObj = obj.setAttribute("color", "pink");
	return newobj;
}

function d3select(id) {
	return document.getElementById(id);
}