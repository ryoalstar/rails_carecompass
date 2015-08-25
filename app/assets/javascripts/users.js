$(document).ready(function() {
  $('.user-profile-page div a').hover(function() {
    $(this).prepend('> ');
    $(this).css('cursor', 'pointer');
    }, function(){
      var val = $(this).text();
      $(this).html(val.substring(2, val.length));
      $(this).css('cursor', 'normal');
  });

  $('.user-profile-page .user-profile-plan span').click(function() {

  });

  $(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    $(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  });
});
