 
 
   //showSlides 배너 이벤트 클릭시 이벤트 화면전환(끝)
   var slideIndex = 1;
   showSlides(slideIndex);
   

   function plusSlides(n) {
      showSlides(slideIndex += n);

   }

   function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("header_event_img");
      if (n > slides.length) {
         slideIndex = 1
      }
      if (n < 1) {
         slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
      setti
   }
   //showSlides 배너 이벤트 클릭시 이벤트 화면전환(끝)

   function showMenu(n) {
      var i;
      var menu = document.getElementsByClassName("header_event_img");
      if (n > slides.length) {
         slideIndex = 1
      }
      if (n < 1) {
         slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
      setti
   }