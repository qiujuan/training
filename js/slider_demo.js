/**
 * Created by dell on 2015/1/18.
 */
$(function(){
  var slider=new Slider("#slider").setDuration(3000);
  slider.setSize(320,123);
  slider.fetchJson('photos.json');
  var transitions=['squares','circles','circle','diamond','verticalSunblind','verticalOpen','clock','tarnsition-flip','transition-left','transition-zoomout']
  setInterval(function(){
    var transition=transitions[Math.floor(Math.random()*transitions.length)];
    if(SliderTransitionFunctions[transition])
      slider.setTransitionFunction(SliderTransitionFunctions[transition])
    else slider.setTransition(transition);
  },5555);
});