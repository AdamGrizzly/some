var rend;
const res=fetch("https://cors-anywhere.herokuapp.com/http://178.128.201.38/polls/public_short_questions/", {
  method: "POST",
  body: JSON.stringify({
      	'id': 1,
  }),
  headers: {"Content-Type":"application/json,application/json",
  "Authorization":"422fb902be96ca4084a9218f14d5d664959358b1"},
 
})
.then(response=>response.json())
		.then(f=>opros=f)
		.then(rend);
		function rend(){
			console.log(opros)
		}
	    