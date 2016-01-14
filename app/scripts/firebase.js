1.   var ref = new Firebase("https://joker-app.firebaseio.com/");
2.   ref.createUser({
3.     email    : " ",
4.     password : " "
5.   }, function(error, userData) {
6.     if (error) {
7.       console.log("Error creating user:", error);
8.     } else {
9.       console.log("Successfully created user account with uid:", userData.uid);
10.    }
11.  });