$(function(){
  $('.menu-toggle').click(function() {
    $(this).siblings('.submenu').toggle();
    $(this).toggleClass('active')
  });
  $('.info-tab-btn a').click(function() {
    $(this).addClass('active');
    $(this).siblings('.info-tab-btn a').removeClass('active');
  });
})
