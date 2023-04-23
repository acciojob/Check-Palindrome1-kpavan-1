// complete the given function

function palindrome(str){
	int n=str.length;
for(var i=0;i<str.length/2;i++){
	if(str.charAt(i)!=str.charAt(n-i-1)){
		return false;
	}
}
	return true;
}
module.exports = palindrome
