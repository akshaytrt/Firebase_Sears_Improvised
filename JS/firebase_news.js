var1=window.location.hash.substring(1);
		if(var1=="news1")
		{
				var myFirebaseRef = new Firebase("https://akshay101.firebaseio.com/");
				
					myFirebaseRef.child("first").on("value", function(snapshot) {
					var msg1=snapshot.val();
					document.getElementById('news11').innerHTML=msg1;
					});
			
		}

		 else if(var1=="news2")
		{
				var myFirebaseRef = new Firebase("https://akshay101.firebaseio.com/");
				
					myFirebaseRef.child("second").on("value", function(snapshot) {
					var msg1=snapshot.val();
					document.getElementById('news11').innerHTML=msg1;
					});
			
		}
		
		
		else if(var1=="news3")
		{
				var myFirebaseRef = new Firebase("https://akshay101.firebaseio.com/");
				
					myFirebaseRef.child("third").on("value", function(snapshot) {
					var msg1=snapshot.val();
					document.getElementById('news11').innerHTML=msg1;
					});
			
		}

		
		 else if(var1=="news4")
		{
				var myFirebaseRef = new Firebase("https://akshay101.firebaseio.com/");
				
					myFirebaseRef.child("fourth").on("value", function(snapshot) {
					var msg1=snapshot.val();
					document.getElementById('news11').innerHTML=msg1;
					});
			
		}
