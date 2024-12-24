$(function(){
  $('.menu-toggle').click(function() {
    $(this).siblings('.submenu').toggle();
    $(this).toggleClass('active')
  });
  $('.info-tab-btn a').click(function() {
    $(this).addClass('active');
    $(this).siblings('.info-tab-btn a').removeClass('active');
  });

  // modal
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
// delete modal
  $('.check-delete').click(function() {
    $('.delete-modal').fadeIn()
  });
  // add manager modal
  $('.add-manager').click(function() {
    $('.manager-modal').fadeIn()
  });
})