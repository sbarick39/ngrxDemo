(function() {
    console.log(2);
    setTimeout(function(){console.log(3)}, 1000);
    setTimeout(function(){console.log(4)}, 0);
    console.log(5);
 })();
function sayHi(user) {
	delete user;
	return user.name + ' Hi';
	}
	console.log(sayHi({name: 'John'}));