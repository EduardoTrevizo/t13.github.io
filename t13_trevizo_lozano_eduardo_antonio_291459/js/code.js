$(document).ready(function(){
  $('tr th button').click(function(){
      var id = $('#id').val();
      var mat = $('#mat').val();
      var nom = $('#nom').val();
      var ape = $('#ape').val();
      var con = $('#con').val();
      $('tbody').append('<tr><td>'+id+'</td><td>'+mat+'</td><td>'
      +nom+'</td><td>'+ape+'</td><td>'+con+
      '</td><td><button>-</button></td></tr>');
  });
  $(document).on('click','td button', function(){
        $(this).parent().parent().remove();
        });
});
