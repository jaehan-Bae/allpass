$(function(){
  $('.menu-toggle').click(function() {
    $(this).siblings('.submenu').toggle();
    $(this).toggleClass('active')
  });
  $('.info-tab-btn a').click(function() {
    $(this).addClass('active');
    $(this).siblings('.info-tab-btn a').removeClass('active');
  });

  $('.counsel-button').click(function() {
    $('.modal').fadeIn()
  });
  $('.btn-close').click(function() {
    $('.modal').fadeOut();
  });
  $('.modal').click(function(event) {
    if ($(event.target).is('.modal')) {
      $('.modal').fadeOut();
    }
  });
})