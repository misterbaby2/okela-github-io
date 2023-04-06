
$(document).ready(function(){
   
    $('.sub-btn').click(function(){
      $(this).next('.sub-menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
    });

   
    $('.menu-btn').click(function(){
      $('.side-bar').addClass('active');
      $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function(){
      $('.side-bar').removeClass('active');
      $('.menu-btn').css("visibility", "visible");
    });
  });


const myText = new SplitType('#my-text')
 gsap.to('.char',{
    y:0,
    stagger:0.05,
    delay:0.2,
    duration:.2,
    
 })

 gsap.to ('#para', {opacity: 1,delay:1,duration:1,y:-20}) 
 gsap.to ('.seemore1', {opacity: 1,delay:1.5,duration:.4,y:-20}) 
 

 const myText2 = new SplitType('#my-text2')
 gsap.to('.char',{
    y:0,
    stagger:0.05,
    delay:4,
    duration:.2,
    
 })
 gsap.to ('#para2', {opacity: 1,delay:6,duration:1,y:-20}) 
 gsap.to ('.seemore2', {opacity: 1,delay:6.5,duration:.4,y:-20}) 

 const myText3 = new SplitType('#my-text3')
 gsap.to('.char',{
    y:0,
    stagger:0.05,
    delay:8.5,
    duration:.2,
    
 })
 gsap.to ('#lastp', {opacity: 1,delay:10,duration:1,y:-20}) 
 gsap.to ('.seemore3', {opacity: 1,delay:10.5,duration:.4,y:-20}) 




