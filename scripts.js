var articleSearch = "";

$(document).ready(function() {

// function searchText() { 
	$('.submitButton').on('click', function() {
		event.preventDefault(); 
		articleSearch = $('.searchQuery').val();
		console.log("Search on " + articleSearch);
		search(articleSearch);
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
		event.preventDefault(); 
		$(".content-placeholder").append("<li><a href='" + data.response.docs[i].web_url + "'>" + data.response.docs[i].snippet + "</a></li>");

		}
});
	
};



// search(searchText());


// });