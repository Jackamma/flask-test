
// $(function(){
//   $("#nav-placeholder").load("nav.html");
// });

// $(function(){
//   $("#infobottom").load("templates/infobottom.html");
// });

// console.log(document.cookie.indexOf('cookieNascosto=true'));

/*$('#closeBtn').click(function(){
	document.cookie = 'cookieNascosto=true';
	console.log(C'ookie aggiunto');
});*/

// function addCookie(){
// 	document.cookie = 'cookieNascosto=true';
// }

// if (document.cookie.indexOf('cookieNascosto=true') == -1){
// 	$(function(){
// 		$("#cookiesAlert").load("templates/cookies.html");
// 	});
// }

$(document).ready(function() {
	// onLoadDropdown();
	setTimeout(onLoadDropdown, 500);
});

function onLoadDropdown(){
	// console.log('Loaded!');
	// console.log($('.dropdown'));
	// Add slideDown animation to Bootstrap dropdown when expanding.
	$('.dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});

	// Add slideUp animation to Bootstrap dropdown when collapsing.
	$('.dropdown').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});
}

$("#pop").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
   $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

/*$(".dropdown").on("hide.bs.collapse", function() {
  $(this).find(".dropdown-menu").first().addClass( "sliding" )
});
$(".dropdown").on("hidden.bs.collapse", function() {
  $(this).find(".dropdown-menu").first().removeClass( "sliding" )
});
$(document).click(function() {
  $(".dropdown-menu.collapse.show").collapse("hide");
});*/


/*
$('.nav-link').mouseover(function(){
	$(this).css('text-shadow', '0px 0px 2px white');
});
$('.nav-link').mouseout(function(){
	$(this).css('text-shadow', 'none');
});	

$('.dropdown-item').mouseover(function(){
	$(this).css('background', '#343a40');
	$(this).css('text-shadow', '0px 0px 2px white');
});

$('.dropdown-item').mouseout(function(){
	$(this).css('text-shadow', 'none');
});
*/
if (screen.width > 480){
	
	// c.click(function(){

	// });
} else {
	// $('.navbar').height('200px');
	// $('.navbar').css('text-size', '20px');
}

/*var curr;
for (var i = 0; i < navItem.length; i++){
	curr = navItem.eq(i);
	// console.log(curr);
	
}
*/