
// Get City of Olympia News
// var rssURL = 'https://rss2json.com/api.json?rss_url=http%3A%2F%2Folympiawa.gov%2FRSS%2Fnews-releases.aspx';
var rssURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeedity.com%2Folympiawa-gov%2FW1tVW1NR.rss';
$.getJSON( rssURL, function foo(data) {
	var stories = data.items.reverse();
	$.each(stories, function (i, post) {

		// var title = post.link.replace('http://olympiawa.gov/news-and-faq-s/news-releases/', '');
		// title = title.replace('.aspx', '');
		// title = title.replace('-', ' ');
	    // $('.cityNews').append('<a href="'+post.link+'" class="list-group-item">'+title+'</a>');
	   	$('.cityNews').append('<li><a href="'+post.guid+'" class="list-group-item">'+post.title+'</a></li>');
		if (i > 3) {
			return false; // limit to 5 stories
		}
	});
});
