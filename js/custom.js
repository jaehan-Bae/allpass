$(document).ready(function() {
  /* ====== conslut.html ====== */
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
  
  /* ====== manage-teacher.html ====== */
  // delete modal
  $('.check-delete').click(function() {
    $('.delete-modal').fadeIn();
  });
    // add manager modal
    $('.add-manager').click(function() {
      $('.manager-modal').fadeIn();
    });
    
    /* ====== book-result.html ====== */
    // book-result modal
    $('.book-result-btn').click(function() {
      $('.book-result-modal').fadeIn();
    });
    
    /* ====== manage-sms.html ====== */
    // word-modify modal
    $('#word-modify').click(function() {
      $('.sms-modal').fadeIn();
    });
    // point-charge modal
    $('#check-point').click(function() {
      $('.point-modal').fadeIn();
    });
    
    /* ====== sidebar.html ====== */
    // side bar menu toggle
    $(document).on('click', '.sidebar-item .menu-toggle', function() {
      $(this).next('.submenu').stop().slideToggle(300);
      $(this).toggleClass('active');
    });
    
    $('.sidebar-item .submenu').click(function(){
      $(this).stop().slideUp(300);
    });
    $('.sidebar-item .submenu li').click(function(e) {
      e.stopPropagation(); // 이벤트 전파 방지
    });

    // 수정 필요
    // $(document).on('click', '.submenu li', function() {
    //   $(this).addClass('active').siblings().removeClass('active');
    // });
    
    // $('.info-tab-btn a').click(function() {
    //   $(this).addClass('active');
    //   $(this).siblings('.info-tab-btn a').removeClass('active');
    // });

    /* ====== student-main.html ====== */
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

    /* ====== bfclass.html ====== */
    // class-timetable tab
  //   const switchs = document.querySelectorAll('.class-before-after a');
  //   const substance = document.querySelectorAll('.ctab')

  // switchs.forEach(button => {
  //   button.addEventListener('click', () => {
  //     switchs.forEach(btn => btn.classList.remove('active'));
  //     button.classList.add('active');
  //     substance.forEach(substance => substance.classList.remove('active'));
  //     const switchs = button.getAttribute('data-tab');
  //     document.getElementById(switchs).classList.add('active');
  //   })
  // })

    const tabButtons = document.querySelectorAll('.class-before-after a');
    const tabContents = document.querySelectorAll('.ctab');

      tabButtons.forEach(button => {
      button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      tabContents.forEach(content => content.classList.remove('active'));
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

    /* ====== class-timetable.html ====== */
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
    // timetable information change -> schedule-btn modal
    $('.schedule-btn').click(function() {
      $('.time-change-modal').fadeIn();
    });

    
    
  });
  
  
  /* ====== order.html ====== */
  // custom-spinner
  document.addEventListener('DOMContentLoaded', () => {
    // 모든 spinner 처리
    document.querySelectorAll('.custom-spinner').forEach((spinner) => {
      const inputField = spinner.querySelector('input[type="number"]');
      const incrementButton = spinner.querySelector('.spinner-buttons button:first-child');
      const decrementButton = spinner.querySelector('.spinner-buttons button:last-child');
  
      // 요소가 모두 존재하는지 확인
      if (inputField && incrementButton && decrementButton) {
        // 증가 버튼 이벤트
        incrementButton.addEventListener('click', () => {
          inputField.stepUp();
        });
  
        // 감소 버튼 이벤트
        decrementButton.addEventListener('click', () => {
          inputField.stepDown();
        });
      } else {
        console.error('Spinner 구성 요소를 찾을 수 없습니다.', spinner);
      }
    });
  });