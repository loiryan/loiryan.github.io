jQuery(document).ready(function($){
$(&#39;.popup-trigger&#39;).on(&#39;click&#39;, function(event){event.preventDefault();$(&#39;.popup&#39;).addClass(&#39;is-visible&#39;);});	
$(&#39;.popup&#39;).on(&#39;click&#39;, function(event){if( $(event.target).is(&#39;.popup-close&#39;) || $(event.target).is(&#39;.popup&#39;) ) {event.preventDefault();$(this).removeClass(&#39;is-visible&#39;);}});
$(document).keyup(function(event){if(event.which==&#39;27&#39;){$(&#39;.popup&#39;).removeClass(&#39;is-visible&#39;);}});});