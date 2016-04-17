var menu = document.getElementById('menu');
var container = document.getElementById('container');
var mask = document.getElementById('c-mask');
var main = document.querySelector('.container-fluid');
var drawer = document.querySelector('#drawer');
var closeMenu = document.getElementById('closeMenu');
var wrap = document.querySelector('.sitewrapper');
var body = document.getElementById('#body');
var $container = $('.container-fluid');
var $drawer = $(document.querySelector('#drawer'));
var $footer = $(document.querySelector('#footerContacts'));
var menuItem = document.getElementsByTagName('li');
var $bottomSection = $(document.querySelector('.bottompics'));
var $bottomSectionLables = $(document.querySelector('.lables'));
var banner = document.querySelector('.banner');
var clientWidth = $(window).width();
var $title = $( "title" ).text();


var randomfromarray = function (array){
  return array[Math.floor(Math.random() * array.length)]
};



var menuOptions = {
					'close':'<li id=' + '"closeMenu"' + 'style="border-top:none; border-bottom:none; background-color:#96BDE4" class=' +'"menuItem"'+'><a href="#COH" class="c-menu__link"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>',
					'home':'<li style="border-top:none;" class="menuItem hvr-fade"'+'><a href="index.php" class="c-menu__link"><h5 class='+'coh' +'>Home</h5></a></li>',
					'about':'<li class="menuItem hvr-fade"'+'><a href="about.php" class="c-menu__link"><h5 class='+'coh' +'>About</h5></a></li>',
					'projects':'<li class="menuItem hvr-fade"'+'><a href="projects.php" class="c-menu__link"><h5 class='+'coh' +'>Projects</h5></a></li>',
					'news':'<li class="menuItem hvr-fade"'+'><a href="news.php" class="c-menu__link"><h5 class='+'coh' +'>News</h5></a></li>',
					'donate':'<li style="border-bottom:none;" class="menuItem hvr-fade"'+'><a href="#COH" class="c-menu__link"><h5 class='+'coh' +'>Donate</h5></a></li>'			
};
var footerOptions = {
					/*'home':'<li class='+'footerItem'+'><a href="#COH"><h5 class='+'coh' +'>Home</h5></a></li>',

					'about':'<li class='+'footerItem'+'><a href="#COH"><h5 class='+'coh' +'>About</h5></a></li>',
					'projects':'<li class='+'footerItem'+'><a href="#COH"><h5 class='+'coh' +'>Projects</h5></a></li>',
					'news':'<li class='+'footerItem'+'><a href="#COH"><h5 class='+'coh' +'>News</h5></a></li>',*/
					'Ytube':'<li class="footerItem"'+'><a class="footerItem" href="https://www.youtube.com/channel/UC8nhHT1xudHfwUHnRHivSmA"><img class="youtube" src="images/youtube.png" alt="Youtube"></a></li>',
					'Insta':'<li class="footerItem"'+'><a class="footerItem" href="https://www.instagram.com/constructionofhope/"><img class="instagram" src="images/instapiclittle.png" alt="Instagram"></a></li>',
					'COH':'<li class='+'footerItem'+'><a class="footerItem" href="index.html"><h3 class="font-roboto-light coh"' +'>Construction of Hope</h3></a></li>',
					'copyright':'<li class='+'footerItem'+'><h5 class="coh copy glyphicon glyphicon-copyright-mark"' +'>2016</h5></li>'			
};
var bottomPics = {
				   'about':'<div class="col-sm-4 space"><div class=' + '"bottomview"><a href="about.php" class="info"><img src="images/about3.jpg" class="img-responsive fader center"><span class="border-box darken center"><h4 class="bottom-title text-center">About</h4>  <p class="text-center"> Mission  |  Folks </p><span></a></div></div>',
				   'projects':'<div class="col-sm-4 space"><div class=' + '"bottomview"><a href="projects.php" class="info"><img src="images/project2.jpg" class="img-responsive fader center"><span class="border-box darken center"><h4 class="bottom-title text-center">Projects</h4>  <p class="text-center"> BKK Thailand  |  PNH Cambodia </p><span></a></div></div>',
				   'news':'<div class="col-sm-4 space"><div class=' + '"bottomview"><a href="news.php" class="info"><img src="images/news2.jpg" class="img-responsive fader center"><span class="border-box darken center"><h4 class="bottom-title text-center">News</h4>  <p class="text-center"> Updates  |  Media </p><span></a></div></div>'
};

var quotes = ['<div class="center-content text-center"><p>"I was once close to starvation, almost ready to die waiting on food from morning till midnight, but now I have no fear"<p></p><p>- Li Hou -</p></div>',
				'<div class="center-content text-center"><p>"If I fear to hold another to the highest goal because it is so much easier to avoid doing so, then I know nothing of Calvary love"<p></p><p>- Amy Carmichael -</p></div>',
				'<div class="center-content text-center"><p>"Are the things of God, the honor of his name, the welfare of his church, the conversion of sinners, and the profit of your own soul, your chief aim?"<p></p><p>- George Muller -</p></div>'

				]

var postMenu = function () {
	for (item in menuOptions) {
		var listElement = menuOptions[item];
		$drawer.append(listElement);
	}
};
//var $toggleOverlay = $(drawer).click(function() {
//  $( this ).toggleClass( "c-mask" );
//});
var postFooter = function () {
	for (item in footerOptions) {
		var listElement = footerOptions[item];
		$footer.append(listElement);
	}
};
var postBottomPics = function () {
	var quote = randomfromarray(quotes);
	
	if($title === 'COH') {
		for (item in bottomPics) {
			var pic = bottomPics[item];
			$bottomSection.append(pic);
		}
	}else {
		 $bottomSection.append(quote);
	}
};

var projectModal = $('#ministry').on('show.bs.modal', function (event) {
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

var randomBanner = function (x) {
	// var bannerPics = ['images/banner_1.jpg','images/banner_2.png', 'images/banner_3.jpg','images/banner_4.jpg'];
	var bannerPics = ['http://placehold.it/1800x450'];
	var images = randomfromarray(bannerPics);
	$( ".banner" ).append( '<img src="' + images +'" class="img-responsive centerImage border stackorder">' );
};

menu.addEventListener('click', function(e) {
        drawer.classList.add('open');
        mask.classList.add('is-active');
        body.classList.add('has-active-menu');
        e.stopPropagation();
      });

main.addEventListener('click', function() {
        drawer.classList.remove('open');
        mask.classList.remove('is-active');
        body.classList.remove('has-active-menu');

      });

var hopeViewModel = function () {
  var self = this;

  	self.show = ko.observable(false);
	self.documentReady = ko.observable(false);
	self.regscreen = ko.observable(true);
	self.oneActive = ko.observable(true);
	self.twoActive = ko.observable(false);
	self.threeActive = ko.observable(false);
	self.changeOne = function () {
		self.oneActive(true);
		self.twoActive(false);
		self.threeActive(false);
		
	};
	self.changeTwo = function () {
		self.oneActive(false);
		self.twoActive(true);
		self.threeActive(false);
		
	};
//check the size of the viewport continuously to call alternate header if too small
	var checkSize = function (width) {
		if (width <= 315) {
			self.regscreen(false)
		} else {
			self.regscreen(true)
		}
	};

	var resize = function () { $(document).ready(function(){
		var winWidth = $(window).width();
  		 checkSize(winWidth);
	}); $(window).resize(function() {
  		var winWidth = $(window).width();
  		 checkSize(winWidth);
		});
		};

//delays the timing of the initial animation on the page
  	var onloadAnimation = function() { $( document ).ready(function() {
        console.log( "document loaded" );
        self.documentReady(true);
        if (window.location.pathname === '/index.php') {
        setTimeout(function(){ self.show(true) }, 1200);
        setTimeout(function(){document.querySelector('.btn-main-coh').classList.add('glow')}, 2900);
        		} else {
        			self.show(true);
        		};
    		});
	};
	resize();
	onloadAnimation();
	postMenu();
	postFooter();
	postBottomPics();
	randomBanner();
	

	};
ko.applyBindings(new hopeViewModel());








