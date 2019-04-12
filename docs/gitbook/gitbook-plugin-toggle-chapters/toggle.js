require(["gitbook", "jQuery"], function(gitbook, $) {


  function expand(chapter) {
    chapter.show();
    if (chapter.parent().attr('class') != 'summary'
        && chapter.parent().attr('class') != 'book-summary'
      && chapter.length != 0
       ) {
         expand(chapter.parent());
       }
  }

  gitbook.events.bind("page.change", function() {
    $('li.chapter').children('ul.articles').hide();
    $chapter = $('li.chapter.active');
    $children = $chapter.children('ul.articles');
    $parent = $chapter.parent();
    $siblings = $chapter.siblings().children('ul.articles');

    expand($chapter);

    if ($children.length > 0) {
      $children.show();
    }

    if(getParameterByName("toggleMenu") != null){
        $(".book").removeClass("with-summary");
        console.log("Hide summary")
    }
  });

  function getParameterByName(name, url) {
  	if (!url) url = window.location.href;
  	name = name.replace(/[\[\]]/g, '\\$&');
  	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
  	results = regex.exec(url);
  	if (!results) return null;
  	if (!results[2]) return '';
  	return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

});
