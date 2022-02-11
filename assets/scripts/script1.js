$(document).ready(function(){
  //initialisation TinyMCE
  /*tinymce.init(
    {
      selector:'#user-message'
    }); N'affiche pas les data saisies du toile-select*/

  // ************************ Showcase FP
  HideAll('.caroussel');
  $('#slide1').show();

  $('.thumbs').click(function(){
    let slideID = $('#slide' + $(this).attr('id'));

    HideAll('.caroussel');

    $('.thumbs').css({
      opacity: 1,
      transition: 'opacity 1s ease-in-out'
    });

    $(slideID).css({
      opacity: 0.3,
      transition: 'opacity 1s ease-in-out'
    });
    $(slideID).show();
    $(slideID).css('opacity', '1')

    $(this).css('opacity', '0.5')
  })

  function HideAll(el){
    $(el).each(function(i, obj){
      obj.style.display='none';
    });
  }

  // *********************** Articles ARTISTES
  HideAll('.bio');

  let displayed = false;
  $('.button1').click(function(){
    let element = $('#' + $(this).next().attr('id'));
    if (!displayed){
      $(element).slideDown(800);
      displayed = true;
    }else {
      $(element).slideUp(500);

      displayed = false;
    }
  });

  /*******************ASIDE EVENTS *******************/
  // Afficher année
  let date = new Date();
  let y = date.getFullYear();
  $('.eventsYear, .copyYear').html(y);

  // Différence entre maintenant et le jour de l'événement

  let arrDateEvent = [];
  $('.dateBox').each(function(i){
    let d = arrDateEvent[i] = this.innerHTML.substring(0, 2);
    /*console.log(d);*/
    let m = arrDateEvent[i] = this.innerHTML.substring(3, 5);
    /*console.log(m);*/
    let now = new Date();
    let eventDate = new Date(y + '-' + m + '-' + d)
    /*console.log(eventDate);
    console.log(now);*/
    let diff = new Date(eventDate - now);
    jours = Math.floor(diff/1000/60/60/24) + 1;
    /*console.log(jours);*/
    $('#countdown' + (i+1)).html(jours + ' jours !');
  });

  /************************ FORM ********************/
  /**************** prenom***************************/
  $('#prenom').on('keydown', function(event){
    console.log(event.which);

    if((event.which < 65 || event.which > 90) &&
    (event.which < 97 || event.which > 122) &&
    (event.which != 32 &&
      event.which != 189 &&
      event.which != 8 &&
      event.which != 16 &&
      event.which != 188))
      {
        event.preventDefault();
    }
  });
 /****************** prenom style *************/
  $("#prenom").on("keyup", function (event) {
    if($("#prenom").val().trim().length > 0){
      $("#prenom").css('border', '2px solid green');
    }else{
      $("#prenom").css('border', '2px solid red');
    }
  });

  $("#prenom").on("focusout", function (){
        $("#prenom").css('border', '1px solid black');
  })

  /***************** NOM *************/
  $('#nom').on('keydown', function(event){
    /*console.log(event.which);*/

    if((event.which < 65 || event.which > 90) &&
    (event.which < 97 || event.which > 122) &&
    (event.which != 32 &&
      event.which != 189 &&
      event.which != 8 &&
      event.which != 16 &&
      event.which != 188))
      {
        event.preventDefault();
    }
  });
  /******************* Nom style **********************/
  $("#nom").on("keyup", function (event) {
    if($("#nom").val().trim().length > 0){
      $("#nom").css('border', '2px solid green');
    }else{
      $("#nom").css('border', '2px solid red');
    }
  });

  $("#nom").on("focusout", function (){
        $("#nom").css('border', '1px solid black');
  })

  /***************** EMAIL *************/
  $('#email').on('keydown', function(event){
    console.log(event.which);

    if((event.which < 65 || event.which > 90) &&
    (event.which < 48 || event.which > 57) &&
    (event.which != 32 &&
      event.which != 189 &&
      event.which != 190 &&
      event.which != 8 &&
      event.which != 16 &&
      event.which != 50 &&
      event.which != 188))
      {
        event.preventDefault();
    }
  });
  /******************* Email style **********************/
  $("#email").on("keyup", function (event) {
    if($("#email").val().trim().length > 0 &&
     $('#email').val().includes('@') &&
      $('#email').val().includes('.')){
      $("#email").css('border', '2px solid green');
    }else{
      $("#email").css('border', '2px solid red');
    }
  });

  $("#email").on("focusout", function (){
        $("#email").css('border', '1px solid black');
  })


  /************* Interêt toile ******************/

  $('#interet-pe').on('click', function(){
    const defaultmessage = 'Votre message...';
    $('#reponse-pe').show();
    $('#question-artiste').hide();
    if($('#user-message').html() != defaultmessage){
      $('#user-message').html(defaultmessage);
    }
  })

  $('#interet-oui').on('click', function(){
    $('#question-artiste').show();
    $('#reponse-pe').hide();
  })

  $('#select-toile').on('click',function(){
      $('#user-message').html('Bonjour, je suis interessé par ces toiles: ' + $('#select-toile').val());
      $('#user-message').focus();
  });

  /**** Envoi du formulaire */
  $('#envoi').click(function(){
    if($('#prenom').val() == ""){
      $("#prenom").css('border', '2px solid red');

    }else if ($('#nom').val() == "") {
      $("#nom").css('border', '2px solid red');

    }else if ($('#email').val() == "") {
      $("#email").css('border', '2px solid red');

    }else{
      alert('Merci pour votre message, nous répondrons sous peu.');
    }
  });

}); /*End of .ready*/
