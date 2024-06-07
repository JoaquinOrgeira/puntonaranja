jQuery(document).ready(listo);

function listo(){
	jQuery(".hamb").click(function(e){
    e.preventDefault();
    jQuery("header nav").toggleClass("open")
    jQuery(".hamb i").toggleClass("fa-skull")
	});
	jQuery("header nav a").click(function(){

    jQuery("header nav").removeClass("open")
    jQuery(".hamb i").removeClass("fa-skull")	
    var dev = jQuery(this).attr("href");
    jQuery("html,body").animate({
    	"scrollTop":jQuery(dev).offset().top
    })
	});
}
