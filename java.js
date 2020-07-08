<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>


<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js">
  // init controller
var controller = new ScrollMagic.Controller();

// build scene
							var scene = new ScrollMagic.Scene({
												triggerElement: "#trigger1"
											})
											.setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
											.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
											.addTo(controller);

  
  </script>
