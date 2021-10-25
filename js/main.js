$(document).ready(function(){
  var audioMenu = ['1', '2', '3', '4']
  var audioSwiper = new Swiper('.audio_content_slide', {
    direction: 'horizontal',
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.audio_nav',
      clickable: true,
      renderBullet: function(index, className){
        return `<span class="${className}">${audioMenu[index]}</span>`
      }
    },
  });

  var viewerMenu = ['1', '2', '3', '4']
  var viewerSwiper = new Swiper('.viewer_content_slide', {
    direction: 'horizontal',
    loop: true,
    observer: true,
    pagination: {
      el: '.viewer_nav',
      clickable: true,
      renderBullet: function(index, className){
        return `<span class="${className}">${viewerMenu[index]}</span>`
      }
    },
  });

  var todayMenu = ['1', '2', '3']
  var todaySwiper = new Swiper('.today_content_slide', {
    direction: 'horizontal',
    loop: true,
    observer: true,
    pagination: {
      el: '.today_nav',
      clickable: true,
      renderBullet: function(index, className){
        return `<span class="${className}">${todayMenu[index]}</span>`
      }
    },
  });

  $('.main_visu .txt_wrap').addClass('on');

  // click event
  var tab = $('.content_wrap .tab_list li');
  var content = $('.content_container .content_box');
  tab.click(function(){
    var i = $(this).index();
    tab.removeClass('on');
    content.removeClass('on');
    tab.eq(i).addClass('on');
    content.eq(i).addClass('on');
  });

  var video = $('.review_wrap video');
  video.click(function(){
    this.play();
  });

  var qna = $('.qna_wrap li');
  qna.click(function(){
    var i = $(this).index();
    qna.eq(i).find('.question').toggleClass('on');
    qna.eq(i).find('.answer').toggleClass('on');
  });
});

// sroll event
$(window).on('scroll resize', function(){
  var scrollPos = 0;
  scrollPos = $(document).scrollTop();
  
  // class add function
  function classAdd(elem){
    elem.find('.main_tit').addClass('on');
    elem.find('.main_txt').addClass('on');
  }

  // class remove function
  function classRemove(elem){
    elem.find('.main_tit').removeClass('on');
    elem.find('.main_txt').removeClass('on');
  }

  var benefit = $('.benefit_wrap');
  var benefitTop = benefit.offset().top;
  if(scrollPos > benefitTop - 270) {
    classAdd(benefit);
  } else {
    classRemove(benefit);
  }

  var books = $('.books_wrap');
  var booksTop = books.offset().top;
  if(scrollPos > booksTop - 270) {
    classAdd(books)
  } else {
    classRemove(books)
  }

  var unlimited = $('.unlimited_wrap');
  var unlimitedTop = unlimited.offset().top;
  if(scrollPos > unlimitedTop - 270) {
    classAdd(unlimited);
  } else {
    classRemove(unlimited);
  }

  var reading = $('.reading_wrap');
  var readingTop = reading.offset().top;
  if(scrollPos > readingTop - 270) {
    classAdd(reading);
  } else {
    classRemove(reading);
  }

  var price = $('.price_wrap');
  var priceTop = price.offset().top;
  if(scrollPos > priceTop - 270) {
    classAdd(price);
  } else {
    classRemove(price);
  }

  var reading = $('.reading_wrap');
  var readingTop = reading.offset().top;
  if(scrollPos > readingTop - 270) {
    classAdd(reading);
  } else {
    classRemove(reading);
  }

  var content = $('.content_wrap');
  var contentTop = content.offset().top;
  if(scrollPos > contentTop - 270) {
    classAdd(content);
  } else {
    classRemove(content);
  }

  var review = $('.review_wrap');
  var reviewTop = review.offset().top;
  if(scrollPos > reviewTop - 270) {
    classAdd(review);
  } else {
    classRemove(review);
  }

  var qna = $('.qna_wrap');
  var qnaTop = qna.offset().top;
  if(scrollPos > qnaTop - 270) {
    classAdd(qna);
  } else {
    classRemove(qna);
  }
});

  