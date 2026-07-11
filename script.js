function shortcut(s1, s2) {
  // your code here
	let s1 = "" ;
	let s2 = "" ;
	let char1 = s1.charAt(0);
	let char2 = s2.charAt(0);
	return char1 + char2 ;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2)); 
