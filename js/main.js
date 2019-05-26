let message= alert('Bienvenu');
setTimeout(message,3000);

function myFunction() {
  document.body.style.backgroundColor = "#00BCD4";
}

function myFunction1(myBtn1) {
 //document.getElementById("myBtn1").value="New Text";
 document.getElementById("myBtn1").style.color="rgba(255,0,0,0.6)";
}

function myFunction2(myBtn) {
	if( document.getElementById("myBtn").style.fontWeight!="bold")
	{
 		document.getElementById("myBtn").style.fontWeight="bold";
 	}
 	else
 	document.getElementById("myBtn").style.fontWeight="normal";	
}

function myFunction3(myBtn) {
	 if(document.getElementById("myBtn").style.fontStyle!="italic")	
	 {	
	 	document.getElementById("myBtn").style.fontStyle="italic";
	 }
	 else
	 document.getElementById("myBtn").style.fontStyle="inherit";	

}

function myFunction4(myBtn) {
	if(document.getElementById("myBtn").style.textDecoration!="underline")
	{
		document.getElementById("myBtn").style.textDecoration="underline";
	}
	else
 	document.getElementById("myBtn").style.textDecoration="initial";
}

/*document.getElementById('font-change').addEventListener('change', function() {
    document.getElementById('myBtn').className = this.value;
});*/

function changeFont(n) {
    var f = document.getElementById('myBtn');
    f.style.fontFamily = n.value
}

function changeSize(n) {
    var s = document.getElementById('myBtn');
    s.style.fontSize = n.value + 'px'
}





