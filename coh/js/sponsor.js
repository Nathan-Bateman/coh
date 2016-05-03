//object with array of news letter objects
	var sponsorship = {
    "kids": [
        {
            "name": "Kaang",
            "age": 9,
            "image": "http://placehold.it/195x250",
            "hometown": "Rural village outside of Phnom Penh, Cambodia",
            "story": "Kaang's parents are both working construction in Thailand. Theavy, the tutor for the children living at the church, is his aunt and has taken him (as well as his sister) in as foster children.",
            "grade": "Kaang is starting school this year",
            "interests": "TBA"
        },
        {
            "name": "Mary",
            "age": 13,
            "image": "http://placehold.it/195x250",
            "hometown": "Rural village in Ta Keo Province ",
            "story": "Mary is Li Hou's cousin, and she was first connected with Pastor Somnang during a visit to Li Hou's distant relatives in her hometown in Ta Keo. Later, Pastor Somnang found Mary sleeping outside in a Phnom Penh slum. With no living mother and an abusive father, Mary was taken in by Pastor Somnang and the church.",
            "grade": "Mary is currently learning basic literacy skills in preparation to enter formal schooling",
            "interests": "Mary loves to play with other children and enjoys learning"
        },
        {
            "name": "Li Huah",
            "age": 8,
            "image": "http://placehold.it/195x250",
            "hometown": "Rural village in Ta Keo Province ",
            "story": "Li Huah was rescued from an abusive home where her stepfather forced her to beg on the streets to support his alcohol and gambling addictions. When she first came to the church, the left side of her face was badly bruised from a recent beating.",
            "grade": "Li Huah is currently learning basic literacy skills in preparation to enter formal schooling",
            "interests": "Li Huah loves to swing on the swings at the local park, and sing at church. loves to play with other children and enjoys learning"
        },
          {
            "name": "Piseth",
            "age": 10,
            "image": "http://placehold.it/195x250",
            "hometown": "Rural village outside of Phnom Penh, Cambodia",
            "story": "Piseth is Pastor Somnang's nephew. The pastor's sister was raising him alone in an impoverished village where he did not have the opportunity to attend school.",
            "grade": "Piseth is starting school this year.",
            "interests": "TBA"
        },
          {
            "name": "Gao",
            "age": 11,
            "image": "http://placehold.it/195x250",
            "hometown": "Rural village outside of Phnom Penh, Cambodia",
            "story": "Gao's parents are both working construction in Thailand. Theavy, the tutor for the children living at the church, is her aunt and has taken her (as well as her brother) in as foster children.",
            "grade": "Gao is starting school this year.",
            "interests": "Gao loves to sing and wants to be a banker when she gets older."
        },
        {
            "name": "Vanna",
            "age": 8,
            "image": "http://placehold.it/195x250",
            "hometown": "Unknown",
            "story": "Pastor Somnang first met Vanna begging on a sidewalk in Bangkok, while the church was on a mission trip to Thailand.  After stopping to try and help him, Pastor Somnang realized Vanna was from Cambodia. His mother, who was begging near him along with a baby, took Pastor Somnang's information and then two months later came to the church in Phnom Penh to seek a place for Vanna to receive proper care and education.",
            "grade": "Vanna is currently learning basic literacy skills in preparation to enter formal schooling.",
            "interests": "Vanna loves to play anything that requires being active and moving around. We are looking forward to learning more about Vanna as he becomes more comfortable in the church and we get to know him better."
        },
         {
            "name": "Savy",
            "age": 10,
            "image": "http://placehold.it/195x250",
            "hometown": "Rural village in Battambong, Cambodia",
            "story": "Savy is learning how to play the guitar, and enjoys playing soccer, and studying Khmer and English at the church. She hopes to be a teacher one day.",
            "grade": "Savy is currently studying in preparation to enter school in October.",
            "interests": "Savy is learning how to play the guitar, and enjoys playing soccer, and studying Khmer and English at the church. She hopes to be a teacher one day."
        },
        {
            "name": "Yalee",
            "age": 7,
            "image": "http://placehold.it/195x250",
            "hometown": "Rural village in Battambong, Cambodia",
            "story": "Yalee spent most of her life on construction sites, and is the newest member of the church family.",
            "grade": "Yalee will begin studying at the church in anticipation of entering school in October.",
            "interests": "Yalee hopes to learn how to read and write in Khmer, and to one day become a teacher."
         },
         {
            "name": "Yrose (Ja)",
            "age": 12,
            "image": "http://placehold.it/195x250",
            "hometown": "Rural village in Siam Reap, Cambodia",
            "story": "Ja spent most of her childhood on construction sites in Thailand.",
            "grade": "Ja is currently studying in grade four. Her favorite subject is English, but Ja also just loves learning in general.",
            "interests": "Although very shy, Ja loves to help people, which is evident in how she helps the younger children at the church in their studies. She hopes to one day be a doctor."
        },
        {
            "name": "Vachana (Jua)",
            "age": 12,
            "image": "http://placehold.it/195x250",
            "hometown": "Rural village in Siam Reap, Cambodia",
            "story": "Jua spent most of his childhood on construction sites in Thailand.",
            "grade": "Jua is currently studying in grade four, and his favorite subjects are English and Thai.",
            "interests": "Jua is learning how to play the drums. When he gets older, Jua wants to be an evangelist in Thailand."
        }]

    };
var sponsorAChild = function () {
    var children = sponsorship.kids;
    var $postDivs = $('#sponsorship-page');
    //var openRowCol = '<div class="row"><div class="class=col-sm-12">';
    var closeRowCol = '</div></div>';
                
    var count = 0;
    for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var childMarkup = '<div class=' + "col-sm-4" + '>';
                childMarkup += '<span data-toggle=' + "modal" + 'data-target="#sponsorChild" data-title="' + child.name +'"';
                childMarkup += 'data-img="' + child.image + '"'; 
                childMarkup += 'data-caption="' + child.story + '"';
                childMarkup += 'data-hometown="'+ child.hometown + '"';
                childMarkup += 'data-grade="'+ child.grade + '"';
                childMarkup += 'data-interests="'+ child.interests + '">';
                childMarkup += '<img class="img-responsive" src="http://placehold.it/195x250">';
                childMarkup += '<h4>' + child.name + '</h4>';
                childMarkup += '</span></div>';

                if (count % 3 === 0 && count !=0) {
                    $postDivs.append(closeRowCol);
                }
                if (count % 3 === 0) {
                    var openRowCol = '<div class="row"><div class="col-sm-12' + ' row-'+ count +'">';
                    var classToString = '.row-' + count.toString();
                    $postDivs.append(openRowCol);
                    var $postChildren = $( "div" ).closest( classToString ); 
                    //var $postChildren = $( openRowCol ).find( classToString );   
                }  

            //console.log($postChildren);
            $postChildren.append(childMarkup);

                if (count === children.length - 1) {
                        $postDivs.append(closeRowCol);
                    }
            count +=1;
    };

};
var sponsorModal = $('#sponsorChild').on('show.bs.modal', function (event) {
  var imgClicked = $(event.relatedTarget); // Button that triggered the modal
  var imgFiletoLoad = imgClicked.data('img'); // Extract info from data-* attributes
  var captionToLoad = imgClicked.data('caption');
  var titleToLoad = imgClicked.data('title');
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find('.modal-title').text(titleToLoad);
  modal.find('.modal-body p').text(captionToLoad);
  modal.find('.modal-body img').attr("src",imgFiletoLoad);
});
sponsorAChild();
