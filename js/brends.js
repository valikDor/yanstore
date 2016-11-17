var li = document.createElement("li");
		brendsList.appendChild(li);
		var a = document.createElement("a");
		li.appendChild(a);
		a.innerHTML = "ВСЕ";
	for (var i = 65; i<=90; i++){
		var li = document.createElement("li");
		brendsList.appendChild(li);
		var a = document.createElement("a");
		li.appendChild(a);
		a.innerHTML = String.fromCharCode(i);
	}
	var li = document.createElement("li");
		brendsList.appendChild(li);
		var a = document.createElement("a");
		li.appendChild(a);
		a.innerHTML = "0-9";