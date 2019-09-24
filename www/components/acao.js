function editar (){
  var gs = $("#gs").val();
  var blur =$("#blur").val();
  var op = $("#op").val();
  var saturate = $("#sat").val();

  var filter = 'grayscale(' + gs + '%) blur(' + blur + 'px) opacity(' + op + '%) saturate(' + saturate +'%)';
 
  $("#img").css("filter", filter);
}
$("input[type=range]").change(editar).mousemove(editar);
$(document).on("click", "#camera", function(){
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('img');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
});