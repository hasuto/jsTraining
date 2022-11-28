$(function () {
    $('#openModal').click(function(){
      console.log('a');
        $('#modalArea').fadeIn();
    });
    $('#closeModal , #modalBg').click(function(){
      $('#modalArea').fadeOut();
    });
  });