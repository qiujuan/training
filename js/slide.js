window.onload=function(){
  var ico=document.getElementById("ico");
  var btn=ico.getElementsByTagName("a");
  var slide=document.getElementById("slide");
  var ul=slide.getElementsByTagName("ul");
  var li=ul[0].getElementsByTagName("li");
  var baseWidth=li[0].offsetWidth;
  ul[0].style.width=baseWidth*li.length+"px";
  var iNow=0;
  for(var i=0;i<btn.length;i++){
    btn[i].index=i;
    btn[i].onclick=function(){
      move(this.index);
    }
  }
  var curIndex=0;
  var timeInterval=1000;
  setInterval(change,timeInterval);
  function change(){
    if(curIndex==btn.length){
      curIndex=0;
    }else{
      move(curIndex);
      curIndex+=1;
    }
  }
  function move(index){
    if(index>li.length-1){
      index=0;
      iNow=index;
    }
    if(index<0){
      index=li.length-1;
      iNow=index;
    }
    for(var n=0;n<btn.length;n++){
      btn[n].className="";
    }
    btn[index].className="active";
    ul[0].style.left=-index*baseWidth+"px"
  }
}













