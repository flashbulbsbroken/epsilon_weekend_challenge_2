var articleSearch = "";

$(document).ready(function() {

// function searchText() { 
	$('.submitButton').on('click', function() {
		event.preventDefault(); 
		articleSearch = $('.anything').val();
		console.log("Search on " + articleSearch);
		search(articleSearch);
	});

$('.resetButton').on('click', function() {
		event.preventDefault(); 
		$('.articles').remove();
		document.getElementById("searchValue").value = "";
	});

});

function search(query){

	$.ajax ({
		url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + encodeURI(query) + '&sort=newest&api-key=c9a3547e5faa2a00ffbbb4dc3563d33f:0:73001767',
		type: 'GET',
	 	dataType: 'json',
	    crossDomain: true,
	    json: 'json_callback'

	}).done(function(data){
		console.log(data);

		var articleList = data.response.docs;
		console.log(articleList);

		for(var i = 0; i < articleList.length; i++) {
		// event.preventDefault(); 
		$(".content-placeholder").append("<p class='articles'><a href='" + data.response.docs[i].web_url + "'>" + data.response.docs[i].snippet + "</a></p>");
		$("this").remove()
		}
});

// function clearSearch() {
// 	document.getElementById("searchValue").value = "";
// }
	
};



// search(searchText());


// });