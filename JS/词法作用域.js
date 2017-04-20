function foo(a) {
	var b = a * 2;
	
	function bar(c) {
		console.log(a,b,c);
	}
	bar(b*2);
}

foo(2);
