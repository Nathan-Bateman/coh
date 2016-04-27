//object with array of news letter objects
	var newsLetters = {
    "issues": [
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "January/February",
            "year": 2016
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "December",
            "year": 2015
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "October/November",
            "year": 2015
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "September",
            "year": 2015
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "August",
            "year": 2015
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "April",
            "year": 2015
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "March",
            "year": 2015
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "January - February",
            "year": 2015
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "December",
            "year": 2014
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "September - October",
            "year": 2014
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "August",
            "year": 2014
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "June - July",
            "year": 2014
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "March - May",
            "year": 2014
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "February",
            "year": 2014
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "January",
            "year": 2014
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "December",
            "year": 2013
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "November",
            "year": 2013
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "October",
            "year": 2013
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "September",
            "year": 2013
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "August",
            "year": 2013
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "July",
            "year": 2013
        },
        {
            "title": "Neighborhood Map",
            "link": "https://drive.google.com/file/d/0B8CCkvdFSll6LWw5REFPTF9qNDg",
            "month": "June",
            "year": 2013
        }]

    };
var monthlyUpdates = function () {
	var d = new Date();
	var n = d.getFullYear();
	var posts = newsLetters.issues;
	var $postRecent = $('.monthly-updates-recent');
	var $postArchive = $('.monthly-updates-archive');
	var yearHeading = [];
	for (var i = 0; i < posts.length; i++) {
	 	var newsItem = posts[i];
	 	var newsLink = newsItem.link;
	 	var newsMonth = newsItem.month;
	 	var newsYear = newsItem.year;
	 	var postMarkUp = '<li><a href="' + newsLink + '">' + newsMonth + ' - ' + newsYear + '</a></li>';
	 	//var headingExists = (posts.indexOf(newsItem) > 3) ? ((yearHeading.indexOf(newsYear) === -1) ? (yearHeading.push(newsYear)$postArchive.append(newsYear)) : (null)) : (null);
	 	if (posts.indexOf(newsItem) > 3) {
	 		if (yearHeading.indexOf(newsYear) === -1) {
	 			$postArchive.append('<h3>' + newsYear + '</h3><ul class="' + newsYear + '"></ul>');
	 			yearHeading.push(newsYear);
	 		} else {
	 			var newsYearClass = '.' + newsYear.toString();
	 			$(newsYearClass).append(postMarkUp);

	 		}
	 		//var archiveYear = (yearHeading.indexOf(newsYear) === -1) ? (yearHeading.push(newsYear)) : (null);
	 		// $postArchive.append(postMarkUp);	
	 	} else {
	 		$postRecent.append('<p>' + postMarkUp + '</p>');
	 	}
	};
}
monthlyUpdates();