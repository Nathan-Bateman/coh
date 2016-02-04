var menu = document.getElementById('menu');
var mask = document.getElementById('c-mask');
var main = document.querySelector('.container-fluid');
var drawer = document.querySelector('#drawer');
var closeMenu = document.getElementById('closeMenu');
var body = document.getElementById('#body');
var $container = $('.container-fluid');
var $drawer = $(document.querySelector('#drawer'));
var $footer = $(document.querySelector('#footerContacts'));
var menuItem = document.getElementsByTagName('li');
var $bottomSection = $(document.querySelector('.bottompics'));
var $bottomSectionLables = $(document.querySelector('.lables'));

var menuOptions = {
					'close':'<li id=' + '"closeMenu"' + 'style="border-top:none; border-bottom:none; background-color:#96BDE4" class=' +'"menuItem"'+'><a href="#COH" class="c-menu__link"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>',
					'home':'<li style="border-top:none;" class="menuItem hvr-fade"'+'><a href="https://www.google.com/" class="c-menu__link"><h5 class='+'coh' +'>Home</h5></a></li>',
					'about':'<li class="menuItem hvr-fade"'+'><a href="#COH" class="c-menu__link"><h5 class='+'coh' +'>About</h5></a></li>',
					'projects':'<li class="menuItem hvr-fade"'+'><a href="#COH" class="c-menu__link"><h5 class='+'coh' +'>Projects</h5></a></li>',
					'news':'<li class="menuItem hvr-fade"'+'><a href="#COH" class="c-menu__link"><h5 class='+'coh' +'>News</h5></a></li>',
					'donate':'<li style="border-bottom:none;" class="menuItem hvr-fade"'+'><a href="#COH" class="c-menu__link"><h5 class='+'coh' +'>Donate</h5></a></li>'			
};
var footerOptions = {
					/*'home':'<li class='+'footerItem'+'><a href="#COH"><h5 class='+'coh' +'>Home</h5></a></li>',

					'about':'<li class='+'footerItem'+'><a href="#COH"><h5 class='+'coh' +'>About</h5></a></li>',
					'projects':'<li class='+'footerItem'+'><a href="#COH"><h5 class='+'coh' +'>Projects</h5></a></li>',
					'news':'<li class='+'footerItem'+'><a href="#COH"><h5 class='+'coh' +'>News</h5></a></li>',*/
					'Insta':'<li class="footerItem"'+'><a href="https://www.instagram.com/constructionofhope/"><img class="instagram" src="images/instapiclittle.png" alt="Instagram"></a></li>',
					'COH':'<li class='+'footerItem'+'><a class="footerItem" href="index.html"><h3 class="font-roboto-light coh"' +'>Construction of Hope</h3></a></li>',
					'copyright':'<li class='+'footerItem'+'><h5 class="coh copy glyphicon glyphicon-copyright-mark"' +'>2016</h5></li>'			
};
var bottomPics = {
				   'about':'<div class="col-sm-4 space"><div class=' + '"bottomview"><a href="#" class="info"><img src="images/about3.jpg" class="img-responsive"><span class="border-box"><h4 class="bottom-title">News</h4>  <p>Read more about...</p><span></a></div></div>',
				   'projects':'<div class="col-sm-4 space"><div class=' + '"bottomview"><a href="#" class="info"><img src="images/project2.jpg" class="img-responsive"><span class="border-box"><h4 class="bottom-title">News</h4>  <p>Read more about...</p><span></a></div></div>',
				   'news':'<div class="col-sm-4 space"><div class=' + '"bottomview"><a href="#" class="info"><img src="images/news2.jpg" class="img-responsive"><span class="border-box"><h4 class="bottom-title">News</h4>  <p>Read more about...</p><span></a></div></div>'
};
//<div class="col-sm-4"><div class='block'><a href="#" class="info"><img src="images/about.jpg"><span><h2>About</h2>  <p>Read more about...</p><span></a></div></div>
/*var bottomPicsLables = {
				   'about':'<div class=' + 'col-sm-4 ' + 'bottomLable' +'><h3 class=' + 'text-center' + '>About</h3></div>',
				   'projects':'<div class=' + 'col-sm-4 ' + 'bottomLable' +'><h3 class=' + 'text-center' + '>Projects</h3></div>',
				   'news':'<div class=' + 'col-sm-4 ' + 'bottomLable' +'><h3 class=' + 'text-center' + '>News</h3></div>'
};*/

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
	for (item in bottomPics) {
		var pic = bottomPics[item];
		$bottomSection.append(pic);

	}
};
/*var postBottomPicsLables = function () {
	for (item in bottomPicsLables) {
		var lable = bottomPicsLables[item];
		$bottomSectionLables.append(lable);

	}
};
*/

menu.addEventListener('click', function(e) {
        drawer.classList.add('open');
        mask.classList.add('is-active');
        sitewrapper.classList.add('has-active-menu');
        e.stopPropagation();
      });

/*main.addEventListener('click', function() {
        drawer.classList.remove('open');
        mask.classList.remove('is-active');
        sitewrapper.classList.remove('has-active-menu');
      });*/

var hopeViewModel = function () {
  var self = this;
	postMenu();
	postFooter();
	postBottomPics();

};
ko.applyBindings(new hopeViewModel());








