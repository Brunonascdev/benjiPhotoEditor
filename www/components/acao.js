$(document).on("click","#tirar", function(){
  $(".segundoConteudo").show();
  $(".primeiroConteudo").css('display', 'none');
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('photo');
    image.src = imageURI;
}

function onFail(message) {
    function alertDismissed() {
}

navigator.notification.alert(
    message,  // message
    alertDismissed,         // callback
    'Erro!',            // title
    'Ok'                  // buttonName
);
}
});

