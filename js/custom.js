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
  // class-timetable tab
  const buttons = document.querySelectorAll('.time-tab-button');
  const contents = document.querySelectorAll('.time-tab-content');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      contents.forEach(content => content.classList.remove('active'));
      const tab = button.getAttribute('data-tab');
      document.getElementById(tab).classList.add('active');
    });
  });
  // student-main tab
  const btns = document.querySelectorAll('.info-tab-btn a');
  const materials = document.querySelectorAll('.tab');
  
  btns.forEach(button => {
    button.addEventListener('click', () => {
      btns.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      materials.forEach(material => material.classList.remove('active'));
      const tabs = button.getAttribute('data-tab');
      document.getElementById(tabs).classList.add('active');
    });
  });
  
})
