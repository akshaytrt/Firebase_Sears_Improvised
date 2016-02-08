var myFirebaseRef = new Firebase("https://akshay101.firebaseio.com/");
		
			myFirebaseRef.child("first").on("value", function(snapshot) {
			var msg1=snapshot.val();
			document.getElementById('news1').innerHTML=msg1;
			});
			
			var myFirebaseRef = new Firebase("https://akshay101.firebaseio.com/");
		
			myFirebaseRef.child("second").on("value", function(snapshot) {
			var msg2=snapshot.val();
			document.getElementById('news2').innerHTML=msg2;
			});
			
			
			var myFirebaseRef = new Firebase("https://akshay101.firebaseio.com/");
		
			myFirebaseRef.child("third").on("value", function(snapshot) {
			var msg3=snapshot.val();
			document.getElementById('news3').innerHTML=msg3;
			});
			
			var myFirebaseRef = new Firebase("https://akshay101.firebaseio.com/");
		
			myFirebaseRef.child("fourth").on("value", function(snapshot) {
			var msg4=snapshot.val();
			document.getElementById('news4').innerHTML=msg4;
			});