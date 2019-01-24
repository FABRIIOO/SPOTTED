  var one = 0; //one e uma variavel de controle de upload, para que o ajax nao 
  //faça mais que uma requisição por foto, utilizamos uma variavel global para 
  //liberar a funcao somente quando ela for one == 0, assim que executada a funcao
  //ela passa a receber o valor 1, assim ela nao executa a funcao que pede a condicional
  //one == 0

  var app = new Framework7();
    var $$ = Dom7;
    
    // msg for inputs 
    var input_vazio = app.toast.create({
      text: 'Por favor, preencha todos os campos obrigatórios.',
      position: 'top',
      closeTimeout: 2500,
    });

    // select img profile 
    var photo_perfil = app.toast.create({
      text: 'Por favor, selecione uma foto de perfil.',
      position: 'top',
      closeTimeout: 2500,
    });

      // select wallpaper 
    var photo_wallp = app.toast.create({
      text: 'Por favor, selecione uma foto de fundo.',
      position: 'top',
      closeTimeout: 2500,
    });
      
    // password incomplet 
    var quant_senha = app.toast.create({
      text: 'A senha deve possuir entre 8 a 10 dígitos.',
      position: 'top',
      closeTimeout: 2500,
    }); 
    
    // email  
    var alertemail = app.toast.create({
      text: 'Digite um e-mail valido.',
      position: 'top',
      closeTimeout: 2500,
    });

    // email ja existe   
    var EmailExistente = app.toast.create({
      text: 'Este E-mail já está cadastrado.',
      position: 'top',
      closeTimeout: 2500,
    });

    // tipo imagem  
    var AlertImg = app.toast.create({
      text: '<h3>Insira somente imagens.</h3>',
      position: 'top',
      closeTimeout: 2500,
    });

     // inserir image,  
    var AlertInsIMG = app.toast.create({
      text: '<h3>Insira uma imagem.</h3>',
      position: 'top',
      closeTimeout: 2500,
    });
    // Create notification with close button
    var notificationWithButton = app.notification.create({
      icon: '',
      title: 'SPOTTED',
      subtitle: '<h3>Importante!</h3>',
      text: 'Diga nos algumas informações pessoais sobre você. Isso é muito importante, pois outras pessoas iram te encontrar através dessas características',
      closeButton: true,
      closeTimeout: 5000,
    });
    
    // Create toast with icon
    var toastIcon = app.toast.create({
      text: '<h3 style="color:white">Falta Pouco!</h3>',
      position: 'center',
      closeTimeout: 2000,
    });
    
    //usuario e/ou senha incorretos 
    var msg_login = app.toast.create({
      text: '<p>Usuário e ou senhas inválido.</p>',
      position: 'top',
      closeTimeout: 2500,
    });

    //numero alto de caractere no email 
    var carac_email = app.toast.create({
      text: '<p>Número elevado de caractere no e-mail.</p>',
      position: 'top',
      closeTimeout: 2500,
    });

    //numero alto de caractere na senha 
    var carac_senha = app.toast.create({
      text: '<p>Número elevado de caractere na senha.</p>',
      position: 'top',
      closeTimeout: 2500,
    });

    //mensagem de carregamento
    // Create center toast
    var toastCenter = app.toast.create({
      text: '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>',
      position: 'center',
      // closeTimeout: 2000,
    });

     // email vazio   
    var insira_email = app.toast.create({
      text: 'Insira um e-mail.',
      position: 'top',
      closeTimeout: 2500,
    });
  
     // senha vazio   
    var insira_senha = app.toast.create({
      text: 'Insira uma senha.',
      position: 'top',
      closeTimeout: 2500,
    });

     // entrando no spotted   
    var entrando = app.toast.create({
      text: 'Entrando...',
      position: 'center',
      closeTimeout: 2500,
    });

    //nao consta universidade 
    var univer_false = app.toast.create({
      text: '<p>Sua universidade não consta em nosso banco de dados. Faça um pedido por e-mail.</p>',
      position: 'top',
      closeTimeout: 3500,
    });


    //nao consta universidade nesta cidade 
    var univer_false_busca = app.toast.create({
      text: '<p>Não existe nenhuma universidade, na cidade selecionada.</p>',
      position: 'top',
      closeTimeout: 3500,
    });
    
    //erro de conexao 
    var erroconexao = app.toast.create({
      text: '<i class="fa fa-wifi" aria-hidden="true"></i><span class="sr-only">Erro de conexão</span>',
      position: 'center',
      closeTimeout: 1500,
    });

//botao do "proximo" da primeira tela de cadastro
function nextstep () 
/***/{ 
/****/$('#dentro_ul').scrollTop(0);
/****/$('#div').scrollTop(0); 
/****/var estado_m = $("#estado_m").val();
/****/var cidade_m = $("#cidade_m").val();
/****/var estado_e = $("#estado_e").val();
/****/var cidade_e = $("#cidade_e").val();
/****/var univer = $("#univer").val();
/****/var curso = $("#curso").val();
/****/if (estado_m == '0' || 
/*******/cidade_m == '0' ||
/*******/estado_e == '0' ||
/*******/cidade_e == '0' ||
/*******/univer == '0' ||
/*******/curso == '0') 
/*********/{
/***********/input_vazio.open();
/***********/return 0;
/*********/}
/*******/$("#voltar").html("<a class='link tab-link' href='#tab1' onclick='voltar()'>Voltar</a>");
/******/document.getElementById('tabe2').click();
/***/}

//funcao para bloquear numeros no nome 
/***/document.getElementById("nome").onkeypress = function(e) {
/***/var chr = String.fromCharCode(e.which);
/*****/if (" .qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
/*******/return false;
/*****/};

//funcao para bloquear aspas no email
/***/document.getElementById("email").onkeypress = function(e) {
/***/var chr = String.fromCharCode(e.which);
/*****/if ("._0123456789@&-[]{}=+()?;:^~#%*qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
/*******/return false;
/*****/};

//funcao para bloquear caracteres especiais no nome edit
/***/document.getElementById("nome_edit").onkeypress = function(e) {
/***/var chr = String.fromCharCode(e.which);
/*****/if (" .qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
/*******/return false;
/*****/};

//funcao para bloquear caracteres especiais na senha
/***/document.getElementById("senha").onkeypress = function(e) {
/***/var chr = String.fromCharCode(e.which);
/*****/if ("0123456789.qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
/*******/return false;
/*****/};

//botao do "proximo" da segunda pagina 
/**/function nextstep2 () 
/***/{
/****/document.getElementById("cabelo").autofocus;
/****/var nome = $("#nome").val(); 
/****/var email = $("#email").val(); 
/****/var senha = $("#senha").val(); 
/****/var sexo = $("#sexo").val(); 
/****/var estado_civil = $("#estado_civil").val();       
//armazena para logar assim que a conta e criada 
/****/localStorage.setItem('email',email); 
/****/localStorage.setItem('senha',senha);
//condiçoes de entrada 
/****/if (nome == '' || email == '' || senha == '' || sexo == '0' || estado_civil == '0') {
/********/input_vazio.open();
/********/return 0;
/*****/}else {
/********/if (email) {
/***********/var email = $("#email").val();
/*************/if (email.value == "" || email.indexOf('@',0) == -1 || email.indexOf('.',0) == -1) {
/***************/alertemail.open();
/***************/$("#email").focus();
/***************/return 0; 
/**************/}
/*************/else {
/**************/if (senha.length < 8 || senha.length > 10) {
/******************/quant_senha.open();   
/******************/return 0;
/**************/}
/************/}
/**********/}
/********/} 
//ajax para verificar email existente 
/********/$.ajax({
/**********/url : "http://social-spotted.com",
/**********/dataType: 'JSON',
/**********/type : 'post',
/**********/data : {
/************/"F":"EmailExiste",
/************/"email" : email
/**********/},
/***********/beforeSend : function(){
/*************/console.log("Enviando requisição...");
/*************/toastCenter.open();
/***********/}
/********/}).done(function(msg){
/*********/var jsonData = msg;
/*********/var flag = 0;
/**********/for (var i = 0; i < jsonData.length; i++) {
/***********/if (jsonData[i].email) {
/*************/flag += 1;
/************/} 
/***********/}
/**********/if(flag > 0) {
/************/EmailExistente.open();
/***********/return false; 
/**********/}else {
/************/document.getElementById('tabe3').click();
/************/$("#voltar").html("<a class='link tab-link' href='#tab2' onclick='voltar2()'>Voltar</a>");
/************/notificationWithButton.open();
/***********/}
/**********/toastCenter.close();
/*********/}).fail(function(jqXHR, textStatus, msg){
/********/erroconexao.open();
/*******/return 0;
/******/});      
/*****/}

//insere o voltar na tela foto de perfil para voltar para a tela de caracteristicas
/**/function nextstep3 () 
/***/{
/****/var tam_cabelo = $("input[type=radio][name='cabelo']:checked").val();
/****/var cor_cabelo = $("input[type=radio][name='cor_cabelo']:checked").val();
/****/var cor_pele = $("input[type=radio][name='pele']:checked").val();
/****/var relogio = $("input[type=radio][name='relogio']:checked").val();
/****/var dente = $("input[type=radio][name='dente']:checked").val();
/*****/if (tam_cabelo == undefined || cor_cabelo == undefined || cor_pele == undefined || relogio == undefined || dente == undefined) {
/*******/input_vazio.open();
/*******/return 0;
/****/} else {
/*****/toastIcon.open();
/*****/document.getElementById("tabe4").click();
/*****/$("#voltar").html("");
/*****/$(".title").html('Escolha uma foto de perfil.');
//funcao para recortar imagem de perfil 
/*****/$(document).ready(function(){
/*******/$image_crop = $('#image_demo').croppie({
/*******/url:'img/perfil.png',
/*******/enableExif: true,
/*******/viewport: {
/*********/width:288,
/*********/height:288,
/*********/type:'circle', //square
/******/},
/******/boundary:{
/********/width: "100%",
/********/height: 450,
/*******/},
/******/showZoomer: false,
/*****/});

//funcao para buscar a imagem, que esta no input
/******/$('#upload_image').on('change', function(){
/******/var img = $('#upload_image').val();
/******/img = img.substr(-4);
/******/if (img == "jpeg" || 
/********/img == ".jpg" ||
/********/img == ".png" ||
/********/img == "JPEG" ||
/********/img == ".JPG" ||
/********/img == ".PNG") {         
/******/var reader = new FileReader();
/******/reader.onload = function (event) {
/******/$image_crop.croppie('bind', {
/******/url: event.target.result
/*****/}).then(function(){
/********/console.log('completo.');
/******/});
/*****/}
/*****/reader.readAsDataURL(this.files[0]);
/*****/} else{
/*******/AlertImg.open();
/*******/return 0; 
/*****/}
/**/});
    
//funcao que envia a foto para o php fazer o upload
/******/$('.crop_image').click(function(event){
/******/var img = $('#upload_image').val();
/******/if (img == '') {
/*******/AlertInsIMG.open();
/*******/return 0;
/******/}
/******/$image_crop.croppie('result', {
/******/type: 'canvas',
/******/size: 'viewport'
/*****/}).then(function(response){ 
/******/$.ajax({
/********/url:"http://social-spotted.com",
/********/type: "POST",
/********/data:{
/**********/"F":"FotoPerfil",
/**********/"image": response
/********/},
/**********/beforeSend : function(){
/************/console.log("Enviando requisição...");
/************/$('#upload_image').prop('disabled',true);
/***********/toastCenter.open();
/*********/},
/*********/success:function(data)
/********/{
/**********/console.log(data);
/**********/var foto = JSON.parse(data);
/**********/localStorage.setItem('foto_perfil',foto.img);
/**********/nextstep4(); //funcao para o bloco 4° do cadastro 
/**********/toastCenter.close();
/**********/$('#upload_image').prop('disabled',false);
/*********/}
/*******/}).fail(function(jqXHR, textStatus, msg){
/*******/erroconexao.open();
/*******/return 0;
/******/}); 
/*****/});
/****/});
/**/}); 
   } 
 }

//insere o voltar na tela de foto de capa para voltar para foto d
function nextstep4 () 
/***/{
/****/document.getElementById("tabe5").click();
/****/$("#voltar").html("");
/****/$(".title").html('Escolha uma foto de capa.');
/****/$(document).ready(function(){
/****/$image_crop = $('#image_demo_capa').croppie({
/******/enableExif: false,
/******/url: 'img/capa.jpg',
/******/viewport: {
/********/width: 289,
/********/height:200,
/********/type:'square' //circle
/******/},
/******/boundary:{
/********/width: "100%",
/********/height: 450
/******/},
/*****/showZoomer: false,
/****/});
      
/****/$('#upload_image_capa').on('change', function(){
/*******/var img = $('#upload_image_capa').val();
/*******/img = img.substr(-4);
/********/if (img == "jpeg" || 
/*********/img == ".jpg" ||
/*********/img == ".png" ||
/*********/img == "JPEG" ||
/*********/img == ".JPG" ||
/*********/img == ".PNG") {        
/*******/var reader = new FileReader();
/*******/reader.onload = function (event) {
/********/$image_crop.croppie('bind', {
/**********/url: event.target.result
/********/}).then(function(){
/**********/console.log("completo.");
/*******/});
/******/}
/******/reader.readAsDataURL(this.files[0]);
/******/} else{
/*********/AlertImg.open();
/********/return 0;
/******/}
/****/});

/****/$('.crop_image_capa').click(function(event){
/*******/var img = $('#upload_image_capa').val();
/********/if (img == '') {
/*********/AlertInsIMG.open();
/*********/return 0;
/********/}
/*******/$image_crop.croppie('result', {
/********/type: 'canvas',
/********/size: 'viewport'
/******/}).then(function(response2){
/********/$.ajax({
/**********/url:"http://social-spotted.com",
/**********/type: "POST",
/**********/data:{
/************/"F":"FotoCapa",
/************/"image_capa": response2
/**********/},
/**********/beforeSend : function(){
/************/console.log("Enviando requisição...");
/************/$('#upload_image_capa').prop('disabled',true);
/************/toastCenter.open();
/**********/},
/***********/success:function(data)
/**********/{
/************/document.getElementById('modal_termos').click();
/************/var foto = JSON.parse(data);
/************/localStorage.setItem('foto_capa',foto.img);
/************/$('#upload_image_capa').prop('disabled',false);
/************/toastCenter.close();
/***********/}
/**********/}).fail(function(jqXHR, textStatus, msg){
/************/erroconexao.open();
/************/return 0;
/*******/}); 
/******/});
/*****/});
/****/});
/***/}
  
/***/document.getElementById('BotaoFimCadastro').disabled = true;
/**/function delay_funcao()
/***/{
/****/if (document.form_termos.aceito_termos.checked == true) 
/*****/{ 
/******/$('#BotaoFimCadastro').css({'background-color':'#2196f3'});
/******/document.getElementById('BotaoFimCadastro').disabled = false;
/*****/}else {
/******/$('#BotaoFimCadastro').css({'background-color':'gray'});
/*****/document.getElementById('BotaoFimCadastro').disabled = true;
/****/}
/***/}
  
/**/function aciona_termos()
/***/{
/****/window.setTimeout( delay_funcao, 100 );
/***/}

//funcao voltar para o login
/***/function voltar () 
/****/{
/*****/$("#voltar").html("<a class='link popup-close'>Voltar</a>");
/*****/$(".title").html('<p>Criar Conta</p>');
/****/}

//funcao voltar para a primeira tala do cadastro   
/***/function voltar2 () 
/****/{
/*****/$("#voltar").html("<a class='link tab-link' href='#tab1' onclick='voltar()'>Voltar</a>");
/*****/$(".title").html('<p>Criar Conta</p>');
/***/}

// lista cidade onde o usuario mora
/***/$('#estado_m').on('change', function() {
/****/var estado = $("#estado_m").val();
/******/$.ajax({
/*******/url : "http://social-spotted.com",
/*******/dataType: 'JSON',
/*******/type : 'post',
/*******/data : {
/**********/"F":"ListaCidade",
/**********/"estado" : estado
/********/},
/********/beforeSend : function(){
/**********/console.log("Enviando requisição...");
/**********/toastCenter.open();
/********/}
/*******/})
/******/.done(function(msg){
/*******/var jsonData = msg; 
/*******/var cidades = "<option value='0'>Selecione a Cidade onde você mora.</option>";
/********/for (var i = 0; i < jsonData.length; i++) {
/*********/cidades += "<option>"+jsonData[i].nome+"</option>";
/********/}
/********/$("#cidade_m").html(cidades);
/********/toastCenter.close();
/*******/}).fail(function(jqXHR, textStatus, msg){
/*********/erroconexao.open();
/*********/return 0;
/****/}); 
/***/});

//lista cidade onde o usuario estuda
/***/$('#estado_e').on('change', function() {
/****/var estado = $("#estado_e").val();
/******/$.ajax({
/********/url :"http://social-spotted.com",
/********/dataType: 'JSON',
/********/type : 'post',
/********/data : {
/***********/"F":"ListaCidade",
/***********/"estado" : estado
/********/},
/*********/beforeSend : function(){
/**********/console.log("Enviando requisição...");
/**********/toastCenter.open();
/********/}
/*******/}).done(function(msg){
/**********/var jsonData = msg; 
/**********/var cidades = "<option value='0'>Selecione a Cidade onde você estuda.</option>";
/***********/for (var i = 0; i < jsonData.length; i++) {
/************/cidades += "<option>"+jsonData[i].nome+"</option>";
/***********/}
/***********/$("#cidade_e").html(cidades);
/***********/toastCenter.close();
/*********/}).fail(function(jqXHR, textStatus, msg){
/***********/erroconexao.open();
/***********/return 0;
/****/}); 
/***/});

//funcao para buscar as universidades 
/***/$('#cidade_e').on('change', function() {
/****/var estado_e = $("#estado_e").val();
/****/var cidade_e = $("#cidade_e").val();
/******/$.ajax({
/********/url :"http://social-spotted.com",
/********/dataType: 'JSON',
/********/type : 'post',
/********/data : {
/***********/"F":"ListaUniversi",
/***********/"estado" : estado_e,
/***********/"cidade" : cidade_e
/********/},
/*********/beforeSend : function(){
/**********/console.log("Enviando requisição...");
/**********/toastCenter.open();
/********/}
/*******/}).done(function(msg){
/**********/if (msg == null || msg == "" || msg == undefined) {
/***********/univer_false.open();
/************/return 0;
/***********/}
/**********/var jsonData = msg; 
/**********/var univer = "<option value='0'>Selecione a Cidade onde você estuda.</option>";
/***********/for (var i = 0; i < jsonData.length; i++) {
/************/univer += "<option value='"+jsonData[i].univer+"'>"+jsonData[i].univer+"</option>";
/***********/}
/***********/$("#univer").html(univer); 
/***********/toastCenter.close();
/*********/}).fail(function(jqXHR, textStatus, msg){
/***********/erroconexao.open();
/**********/return 0;
/******/}); 
/*****/});

//funcao para finalizar cadastro de usuario
/***/function cadastra_usuario () 
/****/{ 
/*******/var estado_m = $("#estado_m").val();
/*******/var cidade_m = $("#cidade_m").val();
/*******/var estado_e = $("#estado_e").val();
/*******/var cidade_e = $("#cidade_e").val();
/*******/var univer = $("#univer").val();
/*******/var curso = $("#curso").val();
/*******/var nome = $("#nome").val();
/*******/var email = $("#email").val();
/*******/var senha = $("#senha").val();
/*******/var sexo = $("#sexo").val();
/*******/var estado_c = $("#estado_civil").val();
/*******/var tam_cabelo = $("input[type=radio][name='cabelo']:checked").val();
/*******/var cor_cabelo = $("input[type=radio][name='cor_cabelo']:checked").val();
/*******/var cor_pele = $("input[type=radio][name='pele']:checked").val();
/*******/var relogio = $("input[type=radio][name='relogio']:checked").val();
/*******/var dente = $("input[type=radio][name='dente']:checked").val();
/*******/var foto_perfil =  localStorage.getItem('foto_perfil');
/*******/var foto_capa =  localStorage.getItem('foto_capa');
/*******/var aceita_termos = document.form_termos.aceito_termos.checked;
/*********/if (aceita_termos == true) 
/**********/{
/************/aceita_termos = 'usuario aceitou o termo.';
/**********/}
/*******/$.ajax({
/********/url :"http://social-spotted.com",
/*********/type : 'post',
/*********/data : {
/***********/"F": "CadastraUsuario",
/***********/'x1' : estado_m,  
/***********/'x2' : cidade_m,  
/***********/'x3' : estado_e,  
/***********/'x4' : cidade_e, 
/***********/'x5' : univer,
/***********/'x6' : curso,
/***********/'x7' : nome,
/***********/'x8' : email,
/***********/'x9' : senha,
/***********/'x10' : sexo, 
/***********/'x11' : estado_c,
/***********/'x12' : tam_cabelo, 
/***********/'x13' : cor_cabelo,
/***********/'x14' : cor_pele,
/***********/'x15' : relogio,
/***********/'x16' : dente,
/***********/'x17' : foto_perfil,
/***********/'x18' : foto_capa,
/***********/'x19' : aceita_termos
/*********/},
/**********/beforeSend : function(){
/***********/entrando.open();
/********/}
/*******/}).done(function(data){
/*********/console.log(data);
/*********/var data = JSON.parse(data);
/**********/if (data.aprovacao == 1){
/*********/$('#load_entrar').html('<center><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span>Carregando...</span></center>');
/**********/entrando.close(); 
/**********/location.reload();
/*********/}else{
/**********/$('#load_entrar').html('');
/**********/}
/*****/}).fail(function(jqXHR, textStatus, msg){
/*******/erroconexao.open();
/*******/return 0;
/****/}); 
/***/}  

//funcao para trocar de senha
/***/function TrocarSenha () {
/****/var email = $("#envia_email").val();
/*****/$.ajax({
/******/url : "http://social-spotted.com",
/******/dataType: 'JSON',
/******/type : 'post',
/******/data : {
/********/"F":"BuscaDadosUsuarioSenha",
/********/"email" : email
/*******/},beforeSend : function(){
/********/console.log("Enviando requisição...");
/******/}
/******/}).done(function(dados){
/********/if(JSON.stringify(dados) !== "" || JSON.stringify(dados) !== null){
/********/var Duser = dados;
/**********/$.ajax({
/************/url :"http://requestwf.com.br/fabricio/envia_email.php",
/************/type : 'post',
/************/data : {
/**************/"F":"EnviaEmailNovaSenha",
/**************/"id": Duser[0].id,
/**************/"nome" : Duser[0].nome,
/**************/"email" : Duser[0].email
/*************/},beforeSend : function(){
/****************/console.log("Enviando requisição...");
/***************/}
/**************/}).done(function(msg){
/*************/if (msg == 1) {
/***************/app.dialog.alert('','Enviamos um e-mail para você.');
/***************/$('#envia_email').val('');
/**************/}
/*************/}).fail(function(jqXHR, textStatus, msg){
/**************/console.log(msg);
/***********/}); 
/**********/}
/*********/}).fail(function(jqXHR, textStatus, msg){
/**********/erroconexao.open();
/*********/return 0;
/*******/}); 
/*****/}

/***/$('#senha_user').keydown(function(e){
/****/if (e.which == 13){ //executa quando você preciona o enter
/*****/login() 
/****/}
/***/})

/***/function login ()
/****/{
/******/var email = $("#email_user").val();
/******/var senha = $("#senha_user").val();
/*******/if (email !== '' && senha !== '') {
/********/email = $("#email_user").val();
/********/senha = $("#senha_user").val();
/******/} else {
/********/email = localStorage.getItem('email');
/********/senha = localStorage.getItem('senha');
/******/}        
/******/if (email == '') {
/********/insira_email.open();
/********/return 0;
/*******/} else {  
/*******/if (senha == '') {
/********/insira_senha.open();
/********/return 0;
/*******/}
/******/}
/******/if (email.length >= 50) {
/*******/carac_email.open();
/*******/return 0;
/******/} else {
/********/if (senha.length >= 16) {
/*********/carac_senha.open();
/*********/return 0;
/********/}
/*******/}
/******/$.ajax({
/********/url :"http://social-spotted.com",
/*********/type : 'post',
/*********/data : {
/***********/"F": "Login",
/***********/'email' : email,  
/***********/'senha' : senha,  
/***********/},
/***********/beforeSend : function(){
/*************/console.log("Enviando requisição...");
/*************/toastCenter.open();
/***********/}
/**********/}).done(function(msg){
/*************/localStorage.setItem('Duser_spotted',msg);
/*************/jsonData = JSON.parse(msg);
/**************/for (var i = 0; i < jsonData.length; i++) {
/****************/var email = jsonData[i].email;
/****************/var senha = jsonData[i].senha;
/****************/var perfil = jsonData[i].foto_perfil;
/****************/var capa = jsonData[i].foto_capa;
/****************/var nome = jsonData[i].nome;
/****************/var univer = jsonData[i].univer;
/****************/var curso = jsonData[i].curso;
/****************/var est_civil = jsonData[i].estado_c;
/****************/var intere = jsonData[i].sexo;
/****************/var biograf = jsonData[i].biografia;
/****************/var id = jsonData[i].id;
/**************/}
/*************/if (email == undefined && senha == undefined || email == "" && senha == ""){
/***************/msg_login.open();
/***************/$("#inicio").css({"display":"block"});
/***************/$("#feed").css({"display":"none"});
/***************/return 0;
/*************/} else {
/***************/localStorage.setItem('email',email);
/***************/localStorage.setItem('senha',senha);
/***************/localStorage.setItem('id',id);
/***************/localStorage.setItem('foto_perfil',perfil);
/***************/coloca_dados(perfil,nome,capa,univer,curso,est_civil,intere,biograf) 
/***************/toastCenter.close();
/***************/grade_pessoas();
/**************/location.reload();
/*********/}
/********/}).fail(function(jqXHR, textStatus, msg){
/*********/erroconexao.open();
/********/return 0;
/****/}); 
/***/}
   
/***/$(document).ready(function () {
/*****/var user = localStorage.getItem('email');
/*****/var pass = localStorage.getItem('senha');
/******/if(user == "" && pass == "" || user == null && pass == null || user == undefined && pass == undefined) {
/*******/$("#feed").css({"display":"none"});
/*******/$("#inicio").css({"display":"block"})
/******/}else {
/*******/$("#feed").css({"display":"block"});
/*******/$("#inicio").css({"display":"none"});
/*********/$.ajax({
/**********/url :"http://social-spotted.com",
/***********/type : 'post',
/***********/data : {
/*************/"F": "Login",
/*************/'email' : user,  
/*************/'senha' : pass,  
/***********/},
/**********/beforeSend : function(){
/***********/console.log("Enviando requisição...");
/**********/}
/*********/}).done(function(msg){
/************/localStorage.setItem('Duser_spotted',msg);
/************/jsonData = JSON.parse(msg);
/*************/if (jsonData) {
/**************/for (var i = 0; i < jsonData.length; i++) {
/***************/var email = jsonData[i].email;
/***************/var senha = jsonData[i].senha;
/***************/var perfil = jsonData[i].foto_perfil;
/***************/var capa = jsonData[i].foto_capa;
/***************/var nome = jsonData[i].nome;
/***************/var univer = jsonData[i].univer;
/***************/var curso = jsonData[i].curso;
/***************/var est_civil = jsonData[i].estado_c;
/***************/var intere = jsonData[i].sexo;
/***************/var biograf = jsonData[i].biografia;
/***************/var id = jsonData[i].id;
/*************/}
/************/}    
/***********/if (email == undefined && senha == undefined || email == "" && senha == ""){
/*************/$("#inicio").css({"display":"block"});
/*************/$("#feed").css({"display":"none"});
/*************/logout();
/*************/return 0;
/***********/} else {
/*************/localStorage.setItem('email',email);
/*************/localStorage.setItem('senha',senha);
/*************/localStorage.setItem('id',id);
/*************/localStorage.setItem('foto_perfil',perfil);
/*************/localStorage.setItem('foto_capa',capa);
/*************/$("#inicio").css({"display":"none"});
/*************/$("#feed").css({"display":"block"});
/**************/coloca_dados(perfil,nome,capa,univer,curso,est_civil,intere,biograf);
/*************/grade_pessoas();
/**********/}
/*********/}).fail(function(jqXHR, textStatus, msg){
/************/$("#inicio").css({"display":"block"});
/************/$("#feed").css({"display":"none"});
/************/erroconexao.open();
/***********/return 0;
/*****/}); 
/****/}
/***/});

/***/function logout() 
/****/{
/******/$("#feed").css({"display":"none"});
/******/$("#inicio").css({"display":"block"});
/******/localStorage.setItem('email','');
/******/localStorage.setItem('senha','');
/******/localStorage.setItem('id','');
/******/localStorage.setItem('foto_capa','');
/******/localStorage.setItem('foto_perfil','');
/******/localStorage.setItem('nome','');
/******/localStorage.setItem('Duser_spotted','');
/******/$("#senha_user").val("");
/***/}

//a funcao coloca dados e responsavel por inserir do js para o html os dados do usario
/***/function coloca_dados(perfil,nome,capa,univer,curso,est_civil,intere,biograf) 
/****/{
//foto de perfil do bloco de publicacao 
/******/$("#foto_menu").html('<img src="http://social-spotted.com/'+perfil+'" class="mini_img">');  
/******/$("#nome_perfil").html(nome); 
/******/$("#mini_nome").html(nome);
/******/$("#sua_univer").html('<i class="fa fa-university" aria-hidden="true"></i><br>'+univer); 
/******/$("#seu_curso").html('<i class="fa fa-graduation-cap" aria-hidden="true"></i><br>'+curso); 
/******/$("#seu_est_civil").html('<i class="fa fa-heart" aria-hidden="true"></i><br>'+est_civil);
/******/$("#sua_foto_capa").html('<img src="http://social-spotted.com/'+capa+'" class="sua_foto_capa">');
/******/$("#sua_foto_perfil").html('<img src="http://social-spotted.com/'+perfil+'" class="sua_foto_perfil">'); 
        $("#minha_foto_perfil_zoom").html('<img src="http://social-spotted.com/'+perfil+'" class="sua_foto_perfil_zoom">'); 
/******/$("#seu_intere").html('<small>Interessado em</small><br><i class="fa fa-heart-o" aria-hidden="true"></i><br>'+intere);              
/********/if (biograf == "" || biograf == null || biograf== undefined) {
/**********/$("#add_biograf").css({"display":"block"});
/**********/$("#biografia").css({"display":"none"});
/********/} else {
/**********/$("#biografia").css({"display":"block"});
/**********/var biografia_sua = emojione.shortnameToUnicode(biograf);
/**********/biografia_sua = biografia_sua.replace(/0xef/g,"'");
/**********/biografia_sua = biografia_sua.replace(/0x22/g,'"');
/**********/$("#biografia").html('<p class="sua_biografia"><i class="fa fa-book" aria-hidden="true"></i><br>Status<br>'+biografia_sua+'</p>');
/**********/$("#add_biograf").css({"display":"none"});
/******/}   
/***/}

// funcao para incluir biografia 
/***/function salvar_biograf () 
/****/{
/*****/var texto = emojione.toShort($('#text_biograf').val());
/*****/var id = localStorage.getItem('id');
/******/$.ajax({
/********/url :"http://social-spotted.com",
/**********/type : 'post',
/**********/data : {
/************/"F": "Add_biografia",
/************/"x1": texto,
/************/"x2": id
/************/},
/************/beforeSend : function(){
/************/console.log("Enviando requisição...");
/**********/}
/*********/}).done(function(data){
/*********/var data = JSON.parse(data);
/*********/if (data.resultado == 1) {
/**********/$("#biografia").css({"display":"block"});
/**********/$("#biografia").html('<p class="sua_biografia"><i class="fa fa-book" aria-hidden="true"></i><br>Status<br>'+emojione.shortnameToUnicode(texto)+'</p>');
/**********/$("#add_biograf").css({"display":"none"});
/*********/}
/*******/}).fail(function(jqXHR, textStatus, msg){
/********/erroconexao.open();
/********/return 0;
/*****/}); 
/***/}

//funcao para contar caractere na biografia
/***/function conta_carac () 
/****/{
/*****/var qt_max = 400;
/*****/var qt_digit = $('#text_biograf').val();
/*****/var qt_final = qt_max - qt_digit.length;
/*****/$('#qt_carac').html(qt_final);  
/****/}

//funcao para contar caractere na biografia (edit)
/****/function conta_carac_edit () 
/****/{
/*****/var qt_max = 400;
/*****/var qt_digit = $('#text_biograf_edit').val();
/*****/var qt_final = qt_max - qt_digit.length;
/*****/$('#qt_carac_edit').html(qt_final);  
/****/}

//funcao para a edição de informações do usuario 
/****/function editar_info () { 
/*****/document.getElementById('seu_perfil_close').click();
/*****/document.getElementById('open_modal_edit').click();  
/******/$.ajax({
/*******/url :"http://social-spotted.com",
/*******/type : 'post',
/*******/data : {
/*********/"F": "PegaDadosUser",
/*********/"id": localStorage.getItem('id'),
/*********/"email": localStorage.getItem('email')  
/*********/},beforeSend : function(){
/***********/console.log("Enviando requisição...");
/*********/}
/********/}).done(function(msg){
/**********/if (msg !== "[]") {
/************/Duser = JSON.parse(msg);
/************/$('#estado_m_edit').val(Duser[0].estado_m);
/************/$('#cidade_m_edit').html('<option selected="selected">'+Duser[0].cidade_m+'</option>');
/************/$('#estado_e_edit').val(Duser[0].estado_e);
/************/$('#cidade_e_edit').html('<option selected="selected">'+Duser[0].cidade_e+'</option>');
/************/$('#univer_edit').html('<option selected="selected">'+Duser[0].univer+'</option>');
/************/$('#curso_edit').val(Duser[0].curso);
/************/$('#nome_edit').val(Duser[0].nome);
/************/$('#interesse_edit').val(Duser[0].sexo);
/************/$('#estado_c_edit').val(Duser[0].estado_c);
/************/$("input[name=cabelo_edit][value="+Duser[0].tam_cabelo+"]").prop("checked",true);
/************/$("input[name=cor_cabelo_edit][value="+Duser[0].cor_cabelo+"]").prop("checked",true);
/************/$("input[name=relogio_edit][value="+Duser[0].relogio+"]").prop("checked",true);
/************/$("input[name=dente_edit][value="+Duser[0].dente+"]").prop("checked", true);
/*************/var biografia_edit = Duser[0].biografia;
/**************/biografia_edit = biografia_edit.replace(/0xef/g,"'");
/**************/biografia_edit = biografia_edit.replace(/0x22/g,'"');
/**************/$('#text_biograf_edit').val(emojione.shortnameToUnicode(biografia_edit));
/************/}
/***********/}).fail(function(jqXHR, textStatus, msg){
/**********/erroconexao.open();
/*********/return 0;
/********/});    
/****/}

//funcao para a edição de informações do usuario 
/***/$(document).ready(function(){
/****/$.ajax({
/******/url :"http://social-spotted.com",
/******/type : 'post',
/******/data : {
/********/"F": "PegaDadosUser",
/********/"id": localStorage.getItem('id'),
/********/"email": localStorage.getItem('email')  
/********/},beforeSend : function(){
/**********/console.log("Enviando requisição...");
/********/}
/*******/}).done(function(msg){
/********/if (msg !== "[]") {
/**********/Duser = JSON.parse(msg);
/**********/$('#estado_m_edit').val(Duser[0].estado_m);
/**********/$('#cidade_m_edit').html('<option selected="selected">'+Duser[0].cidade_m+'</option>');
/**********/$('#estado_e_edit').val(Duser[0].estado_e);
/**********/$('#cidade_e_edit').html('<option selected="selected">'+Duser[0].cidade_e+'</option>');
/**********/$('#univer_edit').html('<option selected="selected">'+Duser[0].univer+'</option>');
/**********/$('#curso_edit').val(Duser[0].curso);
/**********/$('#nome_edit').val(Duser[0].nome);
/**********/$('#interesse_edit').val(Duser[0].sexo);
/**********/$('#estado_c_edit').val(Duser[0].estado_c);
/**********/$("input[name=cabelo_edit][value="+Duser[0].tam_cabelo+"]").prop("checked",true);
/**********/$("input[name=cor_cabelo_edit][value="+Duser[0].cor_cabelo+"]").prop("checked",true);
/**********/$("input[name=relogio_edit][value="+Duser[0].relogio+"]").prop("checked",true);
/**********/$("input[name=dente_edit][value="+Duser[0].dente+"]").prop("checked", true);
/**********/$('#text_biograf_edit').val(emojione.shortnameToUnicode(Duser[0].biografia));
/*********/}
/********/}).fail(function(jqXHR, textStatus, msg){
/*******/erroconexao.open();
/******/return 0;
/*****/});   
/****/});

/****/function abre_seu_perfil () {
/*****/document.getElementById('ver_meu_perfil').click();
/***/}

/****/function editar_foto () {
/*****/document.getElementById('seu_perfil_close').click();
/***/}

/****/function fecha_perfil_msg () { 
/*****/$('#sai_batepapo').html('<a class="link popup-close" onclick="decrementa_time()" id="sai_batepapo_link" style="color:white"><i class="f7-icons size-22">chevron_left</i></a>');
/*****/document.getElementById('fecha_perfil_visitado').click();  
/*****/valor_time = 1000;
/*****/busca_msg();
/*****/scroll_msg();
/****/}

/*****/function volta_msg () {
/******/document.getElementById('fecha_perfil_visitado').click();  
/******/document.getElementById('abre_msg_lista').click();
/******/valor_time = 1000;
/*****/busca_msg();
/*****/scroll_msg();
/****/}

/***/function abre_perfil_visitado () {
/****/document.getElementById('perfil_usuarios').click();
/***/}

// lista cidade onde você mora.(parte de edição de informações)
/***/$('#cidade_m_edit').click('change', function() {
/***/aciona ();
/****/function aciona () {
/*****/var estado = $("#estado_m_edit").val(); 
/******/$.ajax({
/********/url : "http://social-spotted.com",
/********/dataType: 'JSON',
/********/type : 'post',
/********/data : {
/*********/"F":"ListaCidade",
/*********/"estado" : estado
/********/},beforeSend : function(){
/*********/console.log("Enviando requisição...");
/*********/toastCenter.open();
/********/}
/*******/}).done(function(msg){
/******/var jsonData = msg; 
/******/var cidades = "<option value='0'>Selecione uma cidade</option>";
/*******/for (var i = 0; i < jsonData.length; i++) {
/*********/cidades += "<option>"+jsonData[i].nome+"</option>";
/*******/}
/********/$("#cidade_m_edit").html(cidades);
/********/toastCenter.close(); 
/*******/}).fail(function(jqXHR, textStatus, msg){
/******/erroconexao.open();
/*****/return 0;
/****/});
/***/}
/**/});

/***/$('#cidade_e_edit').click('change', function() {
/****/var estado = $("#estado_m_edit").val();   
/*****/$.ajax({
/*******/url : "http://social-spotted.com",
/*******/dataType: 'JSON',
/*******/type : 'post',
/*******/data : {
/*********/"F":"ListaCidade",
/*********/"estado" : estado
/********/},beforeSend : function(){
/***********/console.log("Enviando requisição...");
/**********/toastCenter.open();
/*********/}
/********/}).done(function(msg){
/*********/var jsonData = msg; 
/*********/var cidades = "<option value='0'>Selecione uma cidade</option>";
/**********/for (var i = 0; i < jsonData.length; i++) {
/**********/cidades += "<option>"+jsonData[i].nome+"</option>";
/**********/}
/**********/$("#cidade_e_edit").html(cidades);
/**********/toastCenter.close(); 
/*********/}).fail(function(jqXHR, textStatus, msg){
/********/erroconexao.open();
/*******/return 0;
/******/});
/*****/});

// lista cidade onde o usuario mora (EDIÇÃO)
/***/$('#estado_e_edit').on('change', function() {
/****/var estado = $("#estado_e_edit").val();
/*****/$.ajax({
/**********/url : "http://social-spotted.com",
/**********/dataType: 'JSON',
/**********/type : 'post',
/**********/data : {
/************/"F":"ListaCidade",
/************/"estado" : estado
/***********/},beforeSend : function(){
/************/console.log("Enviando requisição...");
/************/toastCenter.open();
/***********/}
/*********/}).done(function(msg){
/*********/var jsonData = msg; 
/*********/var cidades = "<option value='0'>Selecione.</option>";
/**********/for (var i = 0; i < jsonData.length; i++) {
/**********/cidades += "<option>"+jsonData[i].nome+"</option>";
/*********/}
/*********/$("#cidade_e_edit").html(cidades);
/********/toastCenter.close();
/*******/}).fail(function(jqXHR, textStatus, msg){
/******/erroconexao.open();
/*****/return 0;
/****/}); 
/***/});

/****/$('#univer_edit').click('change', function() {
/******/var estado_e = $("#estado_e_edit").val();
/******/var cidade_e = $("#cidade_e_edit").val();
/*******/$.ajax({
/********/url :"http://social-spotted.com",
/********/dataType: 'JSON',
/********/type : 'post',
/********/data : {
/***********/"F":"ListaUniversi",
/***********/"estado" : estado_e,
/***********/"cidade" : cidade_e
/********/},beforeSend : function(){
/**********/console.log("Enviando requisição...");
/**********/toastCenter.open();
/********/}
/*******/}).done(function(msg){
/*********/if (msg == null || msg == "" || msg == undefined) {
/***********/univer_false_busca.open();
/***********/return 0;
/**********/}
/**********/var jsonData = msg; 
/**********/var univer = "<option value='0'>Selecione a Cidade onde você estuda.</option>";
/***********/for (var i = 0; i < jsonData.length; i++) {
/************/univer += "<option value='"+jsonData[i].univer+"'>"+jsonData[i].univer+"</option>";
/***********/}
/***********/$("#univer_edit").html(univer); 
/***********/toastCenter.close();
/*********/}).fail(function(jqXHR, textStatus, msg){
/*********/erroconexao.open();
/********/return 0;
/******/}); 
/*****/});

//funcao de upload foto de perfil no modo edição
/***/function edita_foto_perfil (){ 
/****/$image_crop = $('#foto_perfil_edit').croppie({
/****/enableExif: true,
/****/url:'img/perfil.png', 
/****/viewport: {
/*****/width: 289,
/*****/height:289,
/*****/type:'circle', //square
/****/},
/****/boundary:{
/*****/width: "100%",
/*****/height:400,
/****/},
/****/showZoomer: false,
/***/});

/***/$('#upload_perfil_edit').on('change', function(){
/****/var img = $('#upload_perfil_edit').val();
/*****/img = img.substr(-4);
/******/if (img == "jpeg" || img == ".jpg" || img == ".png") {         
/******/var reader = new FileReader();
/******/reader.onload = function (event) {
/******/$image_crop.croppie('bind', {
/********/url: event.target.result
/******/}).then(function(){
/*******/console.log('completo.');
/******/});
/*****/}
/****/reader.readAsDataURL(this.files[0]);
/***/} else {
/*****/AlertImg.open();
/****/return 0; 
/***/}
/**/});
  
/***/$('.salva_foto_edit').click(function(){
/****/var img = $('#upload_perfil_edit').val();
/******/if (img == '') { 
/*******/AlertInsIMG.open();
/******/return 0;
/*****/} else {
/******/if (one == 0) {
/*******/one = 1;
/*******/var img_delet = localStorage.getItem('foto_perfil');
/*******/$image_crop.croppie('result', {
/*********/type: 'canvas',
/*********/size: 'viewport'
/********/}).then(function(response){
/*********/$.ajax({
/**********/url:"http://social-spotted.com",
/**********/type: "POST",
/**********/data:{
/************/"F":"FotoPerfilEdit",
/************/"image_edit": response,
/************/"del_image" : img_delet
/************/},beforeSend : function(){        
/***************/console.log("Enviando requisição...");
/***************/toastCenter.open();
/***************/$('.salva_foto_edit').prop('disabled',true);
/***************/$('#upload_perfil_edit').prop('disabled',true);
/**************/}
/*************/}).done(function(data){      
/*****************/console.log(data);
/*****************/var foto = JSON.parse(data);
/*****************/localStorage.setItem('foto_perfil',foto.img);
/*******************/if (foto.img !== "" || foto.img !== null || foto.img !== undefined) {            
/********************/$('.salva_foto_edit').prop('disabled',false);
/********************/$('#upload_perfil_edit').prop('disabled',false);
/********************/$("#sua_foto_perfil").html('<img src="http://social-spotted.com/'+foto.img+'" class="sua_foto_perfil">');
/********************/$("#minha_foto_perfil_zoom").html('<img src="http://social-spotted.com/'+foto.img+'" class="sua_foto_perfil_zoom">');
/********************/$("#foto_menu").html('<img src="http://social-spotted.com/'+foto.img+'" class="mini_img">'); 
/********************/toastCenter.close();
/*******************/update();
/******************/$('#foto_perfil_edit').croppie('destroy');
/*****************/}   
/****************/$('.popup-close').click();
/***************/});
/**************/});
/*************/}
/************/}
/***********/}); 
/********/one = 0; //zera a variavel de controle
/*******/} 

//funcao de upload foto capa (modo de edição)
/***/function edita_foto_capa (){
/****/$image_crop = $('#foto_capa_edit').croppie({
/****/enableExif: true,
/****/url:'img/capa.jpg', 
/****/viewport: {
/*****/width: 289,
/*****/height:200,
/*****/type:'square', //square
/****/},
/***/boundary:{
/*****/width: "100%",
/*****/height:400,
/****/},
/***/showZoomer: false,
/**/});

/***/$('#upload_capa_edit').on('change', function(){
/*****/var img = $('#upload_capa_edit').val();
/*****/img = img.substr(-4);
/******/if (img == "jpeg" || img == ".jpg" || img == ".png") {         
/*******/var reader = new FileReader();
/*******/reader.onload = function (event) {
/*******/$image_crop.croppie('bind', {
/********/url: event.target.result
/*******/}).then(function(){
/******/console.log('completo.');
/*****/});
/****/}
/***/reader.readAsDataURL(this.files[0]);
/**/} else {
/*****/AlertImg.open();
/****/return 0; 
/***/}
/**/});

/***/$('.salva_capa_edit').click(function(event){
/****/var img = $('#upload_capa_edit').val();
/*****/if (img == '') { 
/******/AlertInsIMG.open();
/*******/return 0;
/*****/} else {
/******/if (one == 0) {
/*******/one = 1;
/*******/var img_capa_delet = localStorage.getItem('foto_capa');
/*******/$image_crop.croppie('result', {
/*******/type: 'canvas',
/*******/size: 'viewport'
/*****/}).then(function(response){
/*******/$.ajax({
/********/url:"http://social-spotted.com",
/********/type: "POST",
/********/data:{
/**********/"F":"FotoCapaEdit",
/**********/"image_capa_edit": response,
/**********/"del_image_capa": img_capa_delet
/********/},beforeSend : function(){
/***********/console.log("Enviando requisição...");
/**********/toastCenter.open();
/*********/$('.salva_capa_edit').prop('disabled',true);
/********/}
/*******/}).done(function(data){
/**********/console.log(data);
/**********/var foto = JSON.parse(data);
/**********/localStorage.setItem('foto_capa',foto.img);
/************/if (foto.img !== "" || foto.img !== null || foto.img !== undefined) {                   
/*************/$('.salva_capa_edit').prop('disabled',false);
/*************/$("#sua_foto_capa").html('<img src="http://social-spotted.com/'+foto.img+'" class="sua_foto_capa">');
/*************/toastCenter.close();
/************/update();
/***********/$('#foto_capa_edit').croppie('destroy');
/**********/}   
/*********/$('.popup-close').click();
/********/});
/*******/});
/******/}
/*****/}
/****/});
/***/one = 0; //zera a variavel de controle
/**/}

/***/function update () {
/****/var id = localStorage.getItem('id');
/****/var estado_m = $('#estado_m_edit').val(); 
/****/var cidade_m = $('#cidade_m_edit').val();
/****/var estado_e = $('#estado_e_edit').val(); 
/****/var cidade_e = $('#cidade_e_edit').val();
/****/var univer = $('#univer_edit').val();
/****/var curso = $('#curso_edit').val();
/****/var nome = $('#nome_edit').val();
/****/var sexo = $('#interesse_edit').val(); 
/****/var estado_c = $('#estado_c_edit').val();
/****/var tam_cabelo =  $("input[type=radio][name='cabelo_edit']:checked").val();
/****/var cor_cabelo =  $("input[type=radio][name='cor_cabelo_edit']:checked").val();
/****/var relogio = $("input[type=radio][name='relogio_edit']:checked").val();
/****/var dente = $("input[type=radio][name='dente_edit']:checked").val();
/****/var foto_perfil = localStorage.getItem('foto_perfil');
/****/var foto_capa = localStorage.getItem('foto_capa');
/****/var biografia = emojione.toShort($('#text_biograf_edit').val());
/****/var biografia = biografia.trim();
/******/if (biografia == '') {    
/********/$("#biografia").css({"display":"none"});
/********/$("#add_biograf").css({"display":"block"});
/*****/} else {
/********/$("#biografia").css({"display":"block"});
/********/$("#add_biograf").css({"display":"none"});
/*****/}   
/****/if (estado_m == '0' || cidade_m == '0' || estado_e == '0' || cidade_e == '0' || univer == '0' ||
/******/curso == '0' || tam_cabelo == undefined || cor_cabelo == undefined || relogio == undefined ||
       dente == undefined || nome == '' || sexo == '0' || estado_c == '0') 
/******/{    
/*******/input_vazio.open();
/*******/return 0;
/*******/} else {
/*********/$.ajax({
/**********/url :"http://social-spotted.com",
/**********/type : 'post',
/**********/data : {
/************/"F": "Update",
/************/'id' : id,
/************/'x1' : estado_m,
/************/'x2' : cidade_m,
/************/'x3' : estado_e,
/************/'x4' : cidade_e,
/************/'x5' : univer, 
/************/'x6' : curso, 
/************/'x7' : nome, 
/************/'x8' : sexo,
/************/'x9' : estado_c,  
/************/'x10' :tam_cabelo, 
/************/'x11' :cor_cabelo, 
/************/'x12' :relogio, 
/************/'x13' :dente,
/************/'x14' :foto_perfil,
/************/'x15' :foto_capa,
/************/'x16' : biografia
/**********/},beforeSend : function(){
/************/console.log("Enviando requisição...");
/***********/toastCenter.open();
/**********/}
/*********/}).done(function(result){
/********/if (result !== "" || result !== null) 
/*********/{
/***********/$('#sua_univer').html('<i class="fa fa-university" aria-hidden="true"></i><br>'+$('#univer_edit').val());
/***********/$('#seu_curso').html('<i class="fa fa-graduation-cap" aria-hidden="true"></i><br>'+$('#curso_edit').val());
/***********/$('#seu_est_civil').html('<i class="fa fa-heart" aria-hidden="true"></i><br>'+$('#estado_c_edit').val());
/***********/$('#seu_intere').html('<small>Interessado em</small><br><i class="fa fa-heart-o" aria-hidden="true"></i><br>'+$('#interesse_edit').val());
/***********/$("#nome_perfil").html($("#nome_edit").val());
/***********/var biografia_usuario = $('#text_biograf_edit').val()
/***********/biografia_usuario = biografia_usuario.replace(/0xef/g,"'");
/***********/biografia_usuario = biografia_usuario.replace(/0x22/g,'"');
/***********/$("#biografia").html('<p class="sua_biografia"><i class="fa fa-book" aria-hidden="true"></i><br>Status<br>'+biografia_usuario);
/*********/}
/********/toastCenter.close();
/*******/document.getElementById('popup-close').click(); //fecha janela de edição
/******/abre_seu_perfil();
/*****/}).fail(function(jqXHR, textStatus, msg){
/******/erroconexao.open();
/******/return 0;
/*****/}); 
/****/}
/***/}

/***/var height_grade = 0;
/***/var height = window.innerHeight;
/***/var menu = $(".navbar").height();
/***/var rodape = $(".height_rodape").height();
/***/var vlr_height = menu+rodape;
/***/height = (parseFloat(height)-vlr_height);
/****/$('#mostra_lista_mensagem').css({'margin-top':+menu+'px'});
/****/$('#mostra_pessoas').css({'margin-top':+menu+'px'});
/*****/window.onresize = function() {
/******/height = window.innerHeight;
/******/height = (parseFloat(height)-vlr_height);
/*******/if (height_grade == 0) {
/*******/grade_pessoas();
/******/}else {
/*******/lista_msg();
/******/}
/*****/}

/***/function grade_pessoas () {
/****/$('#mostra_lista_mensagem').css({'display':'none'});
/****/$("#grade_pessoas").jsGrid({
/******/width: "100%",
/******/height:height,
/******/autoload: true,
/******/paging: false,
/******/loadIndication: false,
/******/loadIndicationDelay: 0,
/******/loadMessage: "Carregando...",
/******/loadShading: false,
/******/noDataContent: 'Neste momento, não há pessoas.',
/******/controller: {
/*********/loadData: function() {
/**********/var deferred = $.Deferred();
/**********/var dados = localStorage.getItem('Duser_spotted');
/***********/if (dados !== ""){
/***********/dados = JSON.parse(dados);
/*************/$.ajax({
/**************/url :"http://social-spotted.com",
/**************/type : 'post',
/**************/data : {
/****************/"F": "ListaPerfils",
/****************/"estado_e" : dados[0].estado_e,
/****************/"cidade_e" : dados[0].cidade_e,
/****************/"univer" : dados[0].univer,
/****************/"sexo" : dados[0].sexo
/**************/}, success: function(data){
/***************/if (data !== '') {
/****************/var data = JSON.parse(data);
/****************/deferred.resolve(data);
/***************/}
/**************/} 
/*************/});
/************/}
/***********/return deferred.promise();
/**********/}
/*********/},
/********/rowClick: function(item) {
/***********/localStorage.setItem('id_receptor',item.item.id); //id do usuario
/***********/MarcaVisita();  
/***********/$("#foto_perfil_usuarios_zoom").html('<img src="http://social-spotted.com/'+item.item.foto_perfil+'" style="width: 200%; margin-top: -90px;  display: block; margin-left: auto; margin-right: auto">');
/***********/$("#foto_perfil_usuarios").html('<img src="http://social-spotted.com/'+item.item.foto_perfil+'" style="width: 50%; margin-top: -120px;  display: block; margin-left: auto; margin-right: auto">');
/***********/$("#foto_capa_usuarios").html('<img src="http://social-spotted.com/'+item.item.foto_capa+'" style="width: 100%; margin-top: -20px">');
/***********/$("#nome_usuario").html(item.item.nome);
/***********/$("#univer_usuario").html('<i class="fa fa-university" aria-hidden="true"></i><br>'+item.item.univer);
/***********/$("#curso_usuario").html('<i class="fa fa-graduation-cap" aria-hidden="true"></i><br>'+item.item.curso);
/***********/$("#est_civil_usuario").html('<i class="fa fa-heart" aria-hidden="true"></i><br>'+item.item.estado_c);
/***********/$("#intere_usuario").html('<i class="fa fa-heart-o" aria-hidden="true"></i><br>'+item.item.sexo);
/***********/$("#foto_perfil_msg").html('<img src="http://social-spotted.com/'+item.item.foto_perfil+'">');
/***********/$("#nome_perfil_msg").html('&nbsp;'+item.item.nome);
/***********/diminui_nome_msg();
/***********/if (item.item.biografia == '' || item.item.biografia == null) {
/*************/$("#biograf_usuario").html('');
/***********/} else {
/*************/var biografia_usuario = emojione.shortnameToUnicode(item.item.biografia);
/*************/biografia_usuario = biografia_usuario.replace(/0xef/g,"'");
/*************/biografia_usuario = biografia_usuario.replace(/0x22/g,'"');
/*************/$("#biograf_usuario").html('<p class="user_biografia"><i class="fa fa-book" aria-hidden="true"></i><br>Status<br>'+biografia_usuario);
/**********/}   
/************/$('#volta_grade_pessoas').html('<a class="link popup-close f7-icons" id="fecha_perfil_visitado" href="#" style="position: absolute; top: 4px; left: 8px; padding:10px; z-index:9999; font-size: 25px; color: white;">close</a>');   
/************/document.getElementById('perfil_usuarios').click();
/***********/},
/************/rowRenderer: function(item) {
/*************/var user = item;
/*************/var $photo = $("<div>").addClass("client-photo").append($("<img  style='width: 45%; float: left; border: transparent thin solid; padding: 5px; margin: 0px 10px 10px 0; max-width: 186px;'>").attr("src",'http://social-spotted.com/'+user.foto_perfil));
/*************/var $info = $("<div>").addClass("client-info")
               .append($("<p style='font-size:20px'>").text(user.nome.capitalize()))
               .append($("<p style='margin: 2px;font-size: 18px; margin-top: -10px; color: grey'>").text(user.univer));
/*************/return $("<tr style='overflow-y:scroll;'>").append($("<td class='uk-card uk-card-default uk-card-small uk-card-body uk-width-1-2@m uk-animation-fade repeat: true'>").append($photo).append($info).append('<br>'));
/********/},
/*******/});
/******/String.prototype.capitalize = function() {
/*****/return this.charAt(0).toUpperCase() + this.slice(1);
/****/};
/***/}

/***/$("#lista_msg").click(function () {
/****/$('#mostra_pessoas').css({"display":"none"});
/****/$('#mostra_lista_mensagem').css({"display":"block"});
/****/$('#titulo_e_msg').html('<p style="margin-top: 15px;">Mensagens</p>'); 
/****/height_grade = 1;
/***/});

/***/$("#lista_pessoas").click(function () {
/****/$('#mostra_pessoas').css({"display":"block"});
/****/$('#mostra_lista_mensagem').css({"display":"none "});
/****/$('#titulo_e_msg').html('<p class="titulo_spotted">Spotted</p>'); 
/***/height_grade = 0;
/***/});

// // Init Messages
/***/var messages = app.messages.create({
/*****/el: '.messages'
/***/});

// // Init Messagebar
/***/var messagebar = app.messagebar.create({
/*****/el: '.messagebar'
/***/});

// Send Message
/***/function envia_msg () {
/****/messagebar.focus();
// Return focus to area
/***/var msg = $('#mensagem').val().trim();
/****/if (msg !== "") {
/*****/$('#button_send_msg').css({'color': 'silver','border':'1px solid silver'});
/*****/$('#mensagem').val(''); 
/*****/var emissor = localStorage.getItem('id'); //id emissor
/*****/var receptor = localStorage.getItem('id_receptor'); //id_receptor 
/******/$.ajax({
/*******/url :"http://social-spotted.com",
/*******/type : 'post',
/*******/data : {
/*********/"F": "VerBloqueio",
/*********/"emissor" : emissor,
/*********/"receptor" : receptor
/********/},
/*******/}).done(function(retorno){
/*********/if (parseFloat(retorno) == parseFloat(emissor)) {
/***********/app.dialog.confirm('','Ops! perfil bloqueado, deseja desbloquear este perfil ?', function () {
/***********/block_desblock(0);
/**********/});     
/*********/}else {
/*********/if (parseFloat(retorno) == parseFloat(receptor)) {
/*********/app.dialog.alert('','Este perfil bloqueou você.');
/***********/$('#bloqueia_perfil').css({'display':'none'});
/***********/$('#hr_block_perfil').css({'display':'none'});
/***********/$('#hr_block_perfil2').css({'display':'none'});
/**********/return 0; 
/*********/} else {
/**********/$('#bloqueia_perfil').html('<i class="fa fa-lock" aria-hidden="true"></i>&nbsp;bloquear perfil');    
/**********/$('#hr_block_perfil').css({'display':'block'}); 
/***********/msg = emojione.toShort(msg);
/***********/messagebar.clear();
/************/$.ajax({
/*************/url :"http://social-spotted.com",
/*************/type : 'post',
/*************/data : {
/***************/"F": "EnviaMsg",
/***************/"emissor" : emissor,
/***************/"receptor" : receptor,
/***************/"msg": msg
/***************/},
/**************/});
/*************/}   
/************/}
/***********/}).fail(function(jqXHR, textStatus, msg){
/**********/erroconexao.open();
/*********/return 0;
/********/}); 
/*******/}
/******/scroll_msg();
/*****/}

//funcao para a busca de todos msg de determido usuario
/***/function BuscaTodasMsg () {
/*****/var emissor = localStorage.getItem('id'); //id emissor
/*****/var receptor = localStorage.getItem('id_receptor'); //id_receptor 
/*******/$.ajax({
/********/url :"http://social-spotted.com",
/********/type : 'post',
/********/data : {
/**********/"F": "BuscaMsg",
/**********/"emissor" : emissor,
/**********/"receptor" : receptor
/*********/},beforeSend : function(){
/********/}
/*******/}).done(function(data){
/*********/if (data !== "") {
/***********/var jsonData = JSON.parse(data);
/***********/var msg = '';
/*************/for (var i = 0; i < jsonData.length; i++) {
/***************/var texto_msg = emojione.shortnameToUnicode(jsonData[i].msg);
/***************/texto_msg = texto_msg.replace(/0xef/g,"'");
/***************/texto_msg = texto_msg.replace(/0x22/g,'"');
/***************/var id_emissor = jsonData[i].id_emissor;
/***************/var data_hora = jsonData[i].data;
/*****************/if (id_emissor == emissor) { //se o id for seu msg "blue" SUA MENSAGEM
/******************/msg +='<li class="me">'+texto_msg+'</li><li style="float:right; font-size:11px; margin-top:-10px">'+data_hora+'</li>';               
/****************/} else { //MENSAGEM DA PESSOA
/******************/msg +=  '<li class="him">'+texto_msg+'</li><li style="float:left; font-size:11px; margin-top:-10px;">'+data_hora+'</li>';       
/****************/}
/***************/}
/**************/$('#mensagens').html(msg);
/*************/scroll_msg();
/************/}
/***********/}).fail(function(jqXHR, textStatus, msg){
/***********/erroconexao.open();
/**********/return 0;
/*********/}); 
/********/}

//funcao para posicionar ultima msg
/***/var n_msg,valor_time=0;
/***/function scroll_msg () 
/****/{
/*****/var n = $('#scroll_msg').html();
/*****/$("#scroll_msg").scrollTop(n.length)
/*****/var p = $('#scroll_msg').html();
/*****/p.scrollTop = n.length*100000;
/****/}

// funcao para buscar mensagens
/***/function busca_msg () {
/****/var emissor = localStorage.getItem('id'); //id emissor
/****/var receptor = localStorage.getItem('id_receptor'); //id_receptor 
/****/var msg = $('#mensagem').val();
/******/$.ajax({
/*******/url :"http://social-spotted.com",
/*******/type : 'post',
/*******/data : {
/*********/"F": "BuscaMsg",
/*********/"emissor" : emissor,
/*********/"receptor" : receptor
/********/}
/*******/}).done(function(data){       
/*********/var jsonData = JSON.parse(data);
/**********/if (n_msg < jsonData.length) {
/************/msg = $('#mensagens').html();
/**************/for (var i = n_msg; i < jsonData.length; i++) {
/***************/var texto_msg = emojione.shortnameToUnicode(jsonData[i].msg);
/***************/texto_msg = texto_msg.replace(/0xef/g,"'");
/***************/texto_msg = texto_msg.replace(/0x22/g,'"');
/***************/var id_emissor = jsonData[i].id_emissor;
/***************/var data_hora = jsonData[i].data;
/*****************/if (id_emissor == emissor) { //se o id for seu msg "blue"
/*******************/msg +='<li class="me">'+texto_msg+'</li><li style="float:right; font-size:11px; margin-top:-10px">'+data_hora+'</li>';
/*******************/} else {
/*********************/msg +='<li class="him">'+texto_msg+'</li><li style="float:left; font-size:11px; margin-top:-10px">'+data_hora+'</li>';
/*******************/}
/******************/}
/*****************/$('#mensagens').html(msg);
/****************/scroll_msg();  
/***************/} 
/**************/n_msg = jsonData.length;
/*************/}).fail(function(jqXHR, textStatus, msg){  
/************/return 0;
/************/erroconexao.open();
/***********/});  
/**********/if (valor_time !== 0) { //condicional de controle de tempo (tempo de requisição de mensagem)
/***********/setTimeout(busca_msg,valor_time);
/********/} 
/*******/}

/***/function decrementa_time () {
/****/valor_time = 0;
/****/busca_msg();
/***/}

/***/var id_receptor='',nome='',foto_perfil='',user_data = '',visual_msg='',flag_notifica='',data_historico="";
/***/function busca_notificacao () {
/****/var id = localStorage.getItem('id');
/*****/$.ajax({
/*******/url :"http://social-spotted.com",
/*******/type : 'post',
/*******/data : {
/*********/"F": "Notifica",
/*********/"emissor" : id
/********/},
/*******/}).done(function(retorno){
/*********/if (retorno == 1) {
/**********/$('#alert_new_msg').css(
/***********/{
/************/'width':'0px',
/************/'height':'0px'
/***********/}
/**********/);
/*********/}
/**********/if (retorno !== 1) {
/***********/visual_msg = JSON.parse(retorno); //notificacao de mensagens uso global
/***********/flag_notifica = 0;
/************/for (var i=0;i<visual_msg.length; i++) {
/*************/if (visual_msg[i].visualiza !== id) {
/**************/flag_notifica += 1;
/*************/}
/*************/if (flag_notifica >= 1) {
/**************/$('#alert_new_msg').css(
/***************/{
/*****************/'width':'15px',
/*****************/'height':'15px',
/*****************/'border-radius':'90px',
/*****************/'background-color':'red'
/***************/}
/**************/);
/*************/} else {
/**************/$('#alert_new_msg').css(
/***************/{
/*****************/'width':'0px',
/*****************/'height':'0px'
/***************/}
/**************/);
/*************/}
/************/}   
/***********/if (data_historico.length !== visual_msg.length) {
/*************/lista_msg();
/***********/}      
/**********/if (visual_msg !== 1) {               
/***********/for (var i=0; i < data_historico.length; i++)
/*************/{
/**************/if (data_historico[i].msg !== visual_msg[i].msg)
/***************/{
/*****************/lista_msg();
/***************/}
/**************/}
/*************/} 
/************/}
/***********/});
/*********/setTimeout(busca_notificacao,3000);
/********/}
/******/busca_notificacao();

//funcao lista mensagem (alunos)
/***/function lista_msg () {  
/****/$("#mostra_lista_mensagem").jsGrid({
/******/height: height,
/******/width: "99%",
/******/autoload: true,
/******/paging: false,
/******/paging: false,
/******/loadIndication: false,
/******/loadShading: false,
/******/noDataContent: 'Não há conversas.',
/******/loadMessage: "Carregando...",
/******/controller: {
/********/loadData: function() {
/**********/var deferred = $.Deferred();
/**********/var id = localStorage.getItem('id');
/**********/user_data = '';
/************/$.ajax({
/**************/url :"http://social-spotted.com",
/**************/type : 'post',
/**************/data : {
/****************/"F": "ListaDeMsg",
/****************/"id" : id
/***************/}, success: function(data){
/******************/if (data !== 1)
/********************/{
/**********************/data_historico = '';
/**********************/var data = JSON.parse(data);
/**********************/var id = localStorage.getItem('id'); //id do usuario logado
/************************/for(var i=0;i<data.length;i++)
/*************************/{
/***************************/var id_receptor = data[i].id;
/***************************/var nome = data[i].nome;
/***************************/var foto_perfil = data[i].foto_perfil;
/***************************/var visual = visual_msg[i].visualiza;
/***************************/var data_hora = visual_msg[i].data_hora;
/***************************/var ultima_msg = emojione.shortnameToUnicode(visual_msg[i].msg);
/***************************/user_data += '{"id":"'+id_receptor+'","nome":"'+nome+'","foto_perfil":"'+foto_perfil+'","visual":"'+visual+'","data_hora":"'+data_hora+'","msg":"'+ultima_msg+'"},';
/*************************/}
/***************************/user_data = user_data.slice(0,-1); 
/***************************/data_historico = JSON.parse('['+user_data+']');
/***************************/var dados = '{"dados":['+user_data+']}';
/***************************/dados = JSON.parse(dados);
/***************************/var data_for = "";
/*****************************/for (var i=0; i < dados.dados.length; i++)  //ordenamento de dados (estrutura de dados) da lista msg
/*****************************/{
/******************************/for (var y=0; y < dados.dados.length; y++) 
/*******************************/{
/********************************/if (dados.dados[i].data_hora >= dados.dados[y].data_hora)
/*********************************/{
/**********************************/var aux = dados.dados[i];
/**********************************/dados.dados[i] = dados.dados[y]; 
/**********************************/dados.dados[y] = aux;
/*********************************/}
/********************************/}
/*******************************/}
/******************************/var order_data="";
/*****************************/for (var i=0; i<dados.dados.length; i++) 
/******************************/{
/********************************/order_data += JSON.stringify(dados.dados[i])+',';
/******************************/}
/**************************/order_data = order_data.slice(0,-1);
/**************************/order_data = '['+order_data+']';
/**************************/order_data = JSON.parse(order_data);
/**************************/deferred.resolve(order_data);
/************************/} 
/***********************/}
/**********************/});
/********************/return deferred.promise();
/******************/} 
/****************/},
/**************/rowClick: function(dados) {
/*****************/$('#mensagens').html('');
/*****************/localStorage.setItem('id_receptor',dados.item.id); //id do usuario
/*****************/var foto_visualiza = 'http://social-spotted.com/'+dados.item.foto_perfil;
/*****************/$("#foto_perfil_msg").html('<img src="http://social-spotted.com/'+dados.item.foto_perfil+'">');
/*****************/$("#nome_perfil_msg").html('&nbsp;'+dados.item.nome);
/*****************/diminui_nome_msg();
/*****************/document.getElementById('abre_msg_lista').click();
/*****************/$('#sai_batepapo').html('<a class="link popup-close" onclick="decrementa_time()" id="sai_batepapo_link" style="color:white"><i class="f7-icons size-22">chevron_left</i></a>');
/*****************/BuscaTodasMsg();
/*****************/busca_bloqueio();
/*****************/valor_time = 1000;
/*****************/busca_msg();
/*************/},
/**************/rowRenderer: function(user) {
            // user.visual -> ultima pessoa que enviou a msg
            // user.id usuario receptor
/***********/if (user.visual == user.id) {
/*************/var cor_ultima_msg = 'color:black; margin-top:-1px;';
/***********/}else{
/*************/var cor_ultima_msg = 'color:gray; margin-top:-1px;';
/***********/}
/***********/if (user.msg.length > 15) {
/*************/var ultima_msg = user.msg.substring(0,15)+'...';
/***********/} else {
/*************/var ultima_msg = user.msg;
/***********/}
/**************/var $photo = $("<div>").addClass("client-photo").append($("<img  style='margin:3px; width: 15%; float: left; border: transparent thin solid; max-width: 186px;'>").attr("src",'http://social-spotted.com/'+user.foto_perfil));
/**************/var $info = $("<div>").addClass("client-info")
                .append($("<p style='margin-top: 3px; font-size: 17px;'>").text(user.nome.capitalize())
                .append($("<p style='float:right; margin-right:7px; margin-top: -1px; font-size: 15px; color:grey;'>").text(user.data_hora.slice(0,-9)))
                .append($("<p style='"+cor_ultima_msg+"'>").text(ultima_msg)))
/**************/return $("<tr class='uk-card uk-card-default uk-card-body uk-width-1-2@m'>").append($('<td class="quadro_lista_msg">').append($photo).append($info));
/***********/}, 
/*********/});
/********/String.prototype.capitalize = function() {
/*******/return this.charAt(0).toUpperCase() + this.slice(1);
/******/};
/*****/}

//////////////// bloco de busca de crush
//lista cidade onde o usuario estuda
/***/$('#estado_m_busca').on('change', function() {
/****/var estado = $("#estado_m_busca").val();
/******/$.ajax({
/********/url :"http://social-spotted.com",
/********/dataType: 'JSON',
/********/type : 'post',
/********/data : {
/***********/"F":"ListaCidade",
/***********/"estado" : estado
/********/},
/*********/beforeSend : function(){
/**********/console.log("Enviando requisição...");
/**********/toastCenter.open();
/********/}
/*******/}).done(function(msg){
/**********/var jsonData = msg; 
/**********/var cidades = "<option value='0'>Selecione a Cidade onde você estuda.</option>";
/***********/for (var i = 0; i < jsonData.length; i++) {
/************/cidades += "<option>"+jsonData[i].nome+"</option>";
/***********/}
/***********/$("#cidade_m_busca").html(cidades);
/***********/toastCenter.close();
/*********/}).fail(function(jqXHR, textStatus, msg){
/***********/erroconexao.open();
/***********/return 0;
/****/}); 
/***/});



// lista cidade onde o usuario mora
/***/$('#estado_e_busca').on('change', function() {
/****/var estado = $("#estado_e_busca").val();
/******/$.ajax({
/*******/url : "http://social-spotted.com",
/*******/dataType: 'JSON',
/*******/type : 'post',
/*******/data : {
/**********/"F":"ListaCidade",
/**********/"estado" : estado
/********/},
/********/beforeSend : function(){
/**********/console.log("Enviando requisição...");
/**********/toastCenter.open();
/********/}
/*******/})
/******/.done(function(msg){
/*******/var jsonData = msg; 
/*******/var cidades = "<option value='0'>Selecione a Cidade onde você mora.</option>";
/********/for (var i = 0; i < jsonData.length; i++) {
/*********/cidades += "<option>"+jsonData[i].nome+"</option>";
/********/}
/********/$("#cidade_e_busca").html(cidades);
/********/toastCenter.close();
/*******/}).fail(function(jqXHR, textStatus, msg){
/*********/erroconexao.open();
/*********/return 0;
/****/}); 
/***/});


//funcao para buscar universidades no campo busca
/***/$('#univer_busca').click('change', function() {
/****/var estado_e = $("#estado_e_busca").val();
/****/var cidade_e = $("#cidade_e_busca").val();
/******/$.ajax({
/********/url :"http://social-spotted.com",
/********/dataType: 'JSON',
/********/type : 'post',
/********/data : {
/***********/"F":"ListaUniversi",
/***********/"estado" : estado_e,
/***********/"cidade" : cidade_e
/********/},
/*********/beforeSend : function(){
/**********/console.log("Enviando requisição...");
/**********/toastCenter.open();
/********/}
/*******/}).done(function(msg){
/***********/if (msg == null || msg == "" || msg == undefined) {
/*************/univer_false_busca.open();
/************/return 0;
/***********/}
/**********/var jsonData = msg; 
/**********/var univer = "<option value='0'>Selecione a universidade da pessoa.</option>";
/***********/for (var i = 0; i < jsonData.length; i++) {
/************/univer += "<option value='"+jsonData[i].univer+"'>"+jsonData[i].univer+"</option>";
/***********/}
/***********/$("#univer_busca").html(univer); 
/***********/toastCenter.close();
/*********/}).fail(function(jqXHR, textStatus, msg){
/***********/erroconexao.open();
/**********/return 0;
/*********/}); 
/********/});

/***/var t = 0;
/***/function FundoBuscaCrush ()
/****/{
/*****/var vetor_color = new Array('#4cadff ','#49a7f5','#449be4','#3d8ccd','#3579b3','#2e6899','#25557d','#245278','#224d71','#1c405e');
/****/$('#fundo_busca_crush').css({
/*****/'background-color':vetor_color[t],
/*****/'transition-duration':'2s'
/****/});
/****/$('#botao_busca_crush').css({
/*****/'background-color':vetor_color[t],
/*****/'transition-duration':'2s'
/****/});
/****/$('#botao_cancelar_crush').css({
/*****/'background-color':vetor_color[t],
/*****/'transition-duration':'2s'
/****/});
/*****/for(var i=0;i<12;i++){
/******/$('#borda_busca_crush'+i).css({
/*******/'border':'2px solid' +vetor_color[t],
/*******/'transition-duration':'2s'
/******/});
/*****/}
/****/setTimeout(FundoBuscaCrush,2000);
/***/t+=1;
/***/if (t >= 10){
/*****/t=0; 
/****/}
/***/}FundoBuscaCrush();  

/***/var probusca = 0;
/***/function ProximaBlocoBusca () 
/****/{
/*****/probusca += 1;
/******/if (probusca == 1) {
/*******/$('#campodebusca1').css({
/*******/'display': 'none'
/*******/});
/*******/$('#campodebusca2').css({
/*******/'display': 'block'
/******/});
/*****/} else {
/****/if (probusca == 2) {
/*****/$('#campodebusca2').css({
/*****/'display': 'none'
/*****/});
/*****/$('#campodebusca3').css({
/*****/'display': 'block'
/*****/});
/***/} else {
/*****/if (probusca == 3) {
/******/$('#campodebusca3').css({
/******/'display': 'none'
/******/});
/******/$('#campodebusca4').css({
/******/'display': 'block'
/*****/});
/****/} else {
/*****/if (probusca == 4) {
/******/$('#campodebusca4').css({
/*******/'display': 'none'
/******/});
/******/$('#campodebusca5').css({
/*******/'display': 'block'
/******/});
/*****/} else {
/******/if (probusca == 5) {
/*******/$('#campodebusca5').css({
/********/'display': 'none'
/*******/});
/*******/$('#msg_top_busca').css({
/********/'display': 'none'
/*******/});
/*******/$('#botoes_busca').css({
/********/'display': 'none'
/*******/});
/*******/$('#botao_nova_busca').css({
/********/'display': 'block',
/********/'background-color':'#d21154',
/********/'width':'30%',
/********/'margin':'20px',
/********/'border-radius':'90px',
/********/'width':'70%',
/********/'color':'white',
/********/'margin-left': 'auto',
/********/'margin-right': 'auto' 
/*******/});
/******/}
/*****/}
/****/}
/***/}
/**/}  
   }

/***/function ProximaEtapaBusca () 
/****/{  
/*****/ProximaBlocoBusca();
/******/if (probusca >= 5) {
/******/$('#grade_crush_busca').css({
/*******/'display': 'block'
/******/});
/******/var estado_m = $('#estado_m_busca').val();
/******/var cidade_m = $('#cidade_m_busca').val();
/******/var estado_e = $('#estado_e_busca').val();
/******/var cidade_e = $('#cidade_e_busca').val();
/******/var univer = $('#univer_busca').val();
/******/var curso = $('#curso_busca').val();
/******/var cabelo_tam = $("input[type=radio][name='cabelo_busca']:checked").val();
/******/var cabelo_cor = $("input[type=radio][name='cor_cabelo_busca']:checked").val();
/******/var cor_pele =  $("input[type=radio][name='pele_busca']:checked").val();
/******/var relogio = $("input[type=radio][name='relogio_busca']:checked").val();
/******/var dente = $("input[type=radio][name='dente_busca']:checked").val();
/*******/if (cabelo_tam == undefined) {
/********/cabelo_tam = 0;
/*******/}
/******/if (cabelo_cor == undefined) {
/********/cabelo_cor = 0;
/*******/}
/******/if (cor_pele == undefined) {
/*******/cor_pele = 0;
/******/}
/*****/if (relogio == undefined) {
/*******/relogio = 0;
/******/}
/*****/if (dente == undefined) {
/*******/dente = 0;
/******/}
/***/$("#grade_crush_busca").jsGrid({
/*****/width: "100%",
/*****/height:500,
/*****/autoload: true,
/*****/paging: false,
/*****/loadIndication: false,
/*****/loadIndicationDelay: 0,
/*****/loadShading: true,
/*****/noDataContent: 'humm, Não encontramos nada.',
/*****/loadMessage: "Carregando...",
/*****/controller: {
/*******/loadData: function() {
/**********/var deferred = $.Deferred();
/**********/var dados = localStorage.getItem('Duser_spotted');
/***********/if (dados !== "") {
/************/dados = JSON.parse(dados);
/***********/}else{
/**********/return 0;
/*********/}
/********/$.ajax({
/*********/url :"http://social-spotted.com",
/*********/type : 'post',
/*********/data : {
/***********/"F": "BuscaCrush",
/***********/"estado_m_b" : estado_m,
/***********/"cidade_m_b" : cidade_m,
/***********/"estado_e_b" : estado_e,
/***********/"cidade_e_b" : cidade_e,
/***********/"univer_b" : univer,
/***********/"curso_b" : curso,
/***********/"cabelo_tam_b" : cabelo_tam,
/***********/"cabelo_cor_b" : cabelo_cor,
/***********/"cor_pele_b" : cor_pele,
/***********/"relogio_b" : relogio, 
/***********/"dente_b" : dente,
/***********/"meu_sexo": dados[0].sexo
/**********/},beforeSend : function(){
/************/toastCenter.open();
/***********/}
/**********/}).done(function(data){
/************/var data = JSON.parse(data);
/************/deferred.resolve(data);
/************/ProximaBlocoBusca();
/************/toastCenter.close();
/**********/});
/*********/return deferred.promise();
/********/}
/*******/},
/*********/rowClick: function(item) {
/***********/localStorage.setItem('id_receptor',item.item.id); //id do usuario  
/***********/$("#foto_perfil_usuarios_zoom").html('<img src="http://social-spotted.com/'+item.item.foto_perfil+'" style="width: 200%; margin-top: -90px;  display: block; margin-left: auto; margin-right: auto">');
/***********/$("#foto_perfil_usuarios").html('<img src="http://social-spotted.com/'+item.item.foto_perfil+'" style="width: 50%; margin-top: -120px;  display: block; margin-left: auto; margin-right: auto">');
/***********/$("#foto_capa_usuarios").html('<img src="http://social-spotted.com/'+item.item.foto_capa+'" style="width: 100%; margin-top: -20px">');
/***********/$("#nome_usuario").html(item.item.nome);
/***********/$("#univer_usuario").html('<i class="fa fa-university" aria-hidden="true"></i><br>'+item.item.univer);
/***********/$("#curso_usuario").html('<i class="fa fa-graduation-cap" aria-hidden="true"></i><br>'+item.item.curso);
/***********/$("#est_civil_usuario").html('<i class="fa fa-heart" aria-hidden="true"></i><br>'+item.item.estado_c);
/***********/$("#intere_usuario").html('<i class="fa fa-heart-o" aria-hidden="true"></i><br>'+item.item.sexo);
/***********/$("#foto_perfil_msg").html('<img src="http://social-spotted.com/'+item.item.foto_perfil+'">');
/***********/$("#nome_perfil_msg").html('&nbsp;'+item.item.nome);
/***********/diminui_nome_msg();
/*************/if (item.item.biografia == '' || item.item.biografia == null) {
/**************/$("#biograf_usuario").html('');
/*************/}else {
/**************/var biografia_usuario = emojione.shortnameToUnicode(item.item.biografia);
/**************/biografia_usuario = biografia_usuario.replace(/0xef/g,"'");
/**************/biografia_usuario = biografia_usuario.replace(/0x22/g,'"');
/**************/$("#biograf_usuario").html('<p class="user_biografia"><i class="fa fa-book" aria-hidden="true"></i><br>Status<br>'+biografia_usuario);
/*************/}    
/************/document.getElementById('perfil_usuarios').click();
/************/document.getElementById('close_janela_busca').click();
/************/$('#volta_grade_pessoas').html('<a class="link popup-close f7-icons" id="fecha_perfil_visitado" href="#" style="position: absolute; top: 4px; left: 8px; padding:10px; z-index:9999; font-size: 25px; color: white;" onclick="abre_lista_busca()">close</a>'); 
/************/MarcaVisita();
/***********/}, 
/**********/rowRenderer: function(user) {
/***********/var $photo = $("<div>").addClass("client-photo").append($("<img  style='width: 45%; float: left; border: transparent thin solid; padding: 5px; margin: 0px 10px 10px 0; max-width: 186px;'>").attr("src",'http://social-spotted.com/'+user.foto_perfil));
/***********/var $info = $("<div>").addClass("client-info")
              .append($("<p style='font-size:20px'>").text(user.nome.capitalize()))
               .append($("<p style='margin: 2px;font-size: 18px; margin-top: -10px; color: grey'>").text(user.univer));
/***********/return $("<tr>").append($("<td class='uk-card uk-card-default uk-card-body uk-width-1-2@m uk-animation-fade repeat: true'>").append($photo).append($info).append('<br>'));   
/**********/},
/*********/});
/********/String.prototype.capitalize = function() {
/*******/return this.charAt(0).toUpperCase() + this.slice(1);
/******/};
/*****/}
/****/}

/***/function abre_lista_busca() {
/*****/document.getElementById('busca_crush').click();
/***/}  

//funcao para começar uma nova busca 
/***/function nova_busca () 
/****/{
/*****/probusca = 0;
/*****/$('#msg_top_busca').css({
/******/'display': 'block'
/*****/});
/*****/$('#botoes_busca').css({
/******/'display': 'block'
/*****/});
/*****/$('#botao_nova_busca').css({
/******/'display': 'none'
/*****/});
/*****/$('#grade_crush_busca').css({
/******/'display': 'none'
/*****/});
/*****/$('#campodebusca1').css({
/******/'display': 'block'
/*****/});
/*****/$('#forme_busca').each (function(){
/*****/this.reset();
/****/});
/***/}

//funcao para marcar visita (sua em perfil)
/***/function MarcaVisita ()
/****/{ 
/*****/var Duser = localStorage.getItem('Duser_spotted')
/*******/if (Duser !== ""){
/********/Duser = JSON.parse(Duser); //seus dados armazenados 
/*******/}
/******/var id_receptor = localStorage.getItem('id_receptor'); //id do perfil visitado
/*****/$.ajax({
/*******/url :"http://social-spotted.com",
/*******/type : 'post',
/*******/data : {
/*********/"F" : "MarcaVisita",
/*********/"id" : Duser[0].id,
/*********/"sexo" : Duser[0].sexo,
/*********/"univer" : Duser[0].univer,
/*********/"curso" : Duser[0].curso,
/*********/"id_visitado" : id_receptor
/********/}
/*******/}).done(function(data){
/*********/console.log(data);
/********/}).fail(function(jqXHR, textStatus, msg){
/********/erroconexao.open();
/*******/return 0;
/******/}); 
/*****/}

/***/lista_visitas();
/***/var cont_vistas = 0;
/***/function lista_visitas () 
/****/{
/*****/var Duser = localStorage.getItem('Duser_spotted'); //seus dados armazenados 
/******/if (Duser !== "") {
/*******/Duser = JSON.parse(Duser);
/********/$.ajax({
/*********/url :"http://social-spotted.com",
/*********/type : 'post',
/*********/data : {
/**********/"F" : "ListaVisita",
/**********/"id" : Duser[0].id,
/*********/}
/********/}).done(function(data){     
/*********/if (JSON.parse(data) == "") {
/**********/$('#limpavisitas').css({"display":"none"});
/**********/$('#frase_visita').css({"display":"block"});
/*********/}else {
/**********/if(data !== "[]") { 
/***********/var visitas = JSON.parse(data);
/************/if (visitas.length !== cont_vistas || visitas.length == 0) {
/*************/cont_vistas = visitas.length;
/*************/$('#limpavisitas').css({"display":"block"});
/*************/$('#frase_visita').css({"display":"none"});
/**************/if(visitas.length > 0){
/***************/$('#alert_visita').css({
/****************/'width':'10px',
/****************/'height':'10px',
/****************/'background-color':'#f03e44',
/****************/'border-radius':'90px'
/***************/});
/**************/}
/**************/var visitas_modal ='';
/***************/for (var i=visitas.length-1; i>-1; i--) 
/****************/{  
/*****************/if (visitas[i].sexo == 'masculino') {
/******************/var icone_sexo = '<i style="font-size:25px; color: #2196f3;" class="fa fa-mars" aria-hidden="true"></i>';
/******************/} else {
/*******************/var icone_sexo = '<i style="font-size:25px; color: pink;" class="fa fa-venus" aria-hidden="true"></i>';
/******************/}
/******************/visitas_modal += '<div class="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-animation-fade repeat: true"><p>'+icone_sexo+'Uma pessoa do sexo <b>'+visitas[i].sexo+'</b> visitou seu perfil, essa pessoa estuda na <b>'+visitas[i].univer+'</b> e cursa <b>'+visitas[i].curso+'</b></p><p>'+visitas[i].data+'</p></div>';
/*****************/}
/****************/$('#visitas').html(visitas_modal); 
/***************/}
/**************/}
/*************/}
/************/}).fail(function(jqXHR, textStatus, msg){
/***********/erroconexao.open();
/**********/return 0;
/*********/}); 
/********/}
/*******/setTimeout(lista_visitas,60000); 
/******/}

//funcao para excluir a conta 
/***/function excluir_conta () {
/****/var Duser = JSON.parse(localStorage.getItem('Duser_spotted'));
/****/app.dialog.prompt('','Insira sua senha para deletar sua conta.', function (senha) {
/*****/if (senha == Duser[0].senha) {
/******/app.dialog.confirm('','Sua conta será excluída permanentemente, você realmente deseja excluir?', function () {
/*******/$.ajax({
/********/url :"http://social-spotted.com",
/********/type : 'post',
/********/data : {
/*********/"F": "ExcluirConta",
/*********/"id" : Duser[0].id
/********/},
/*******/}).done(function(visual){
/********/if (visual==1) { 
/*********/app.dialog.alert('','Sua conta foi excluida com sucesso!', function () {
/**********/location.reload();
/*********/});
/********/}              
/*******/});
/******/});
/*****/}else {
/******/app.dialog.alert('','Senha Incorreta.');
/****/}
/***/});
/**/}

// funcao para trocar a senha 
/***/function trocar_senha () 
/****/{
/*****/var Duser = JSON.parse(localStorage.getItem('Duser_spotted'));
/******/app.dialog.prompt('','Insira sua senha atual.', function (senha) {
/*******/if (senha == Duser[0].senha) {  
/********/app.dialog.prompt('','Insira sua nova senha.', function (new_senha) {
/*********/if (new_senha.length < 8 || new_senha.length > 10) {
/**********/quant_senha.open();   
/***********/return 0;
/**********/}
/***********/$.ajax({
/************/url :"http://social-spotted.com",
/************/type : 'post',
/************/data : {
/*************/"F": "AlteraSenha",
/*************/"id" : Duser[0].id,
/*************/"senha": new_senha
/************/},
/***********/}).done(function(visual){
/************/if (visual==1) { 
/*************/app.dialog.alert('','Sua senha foi alterada com sucesso!', function () {
/************/});
/***********/}              
/**********/})
/*********/});   
/********/}else {
/*******/app.dialog.alert('','Senha Incorreta.');
/******/}
/*****/});   
/****/} 

//funcao para bloquear no chat
/***/function BloquearChat () 
/****/{
/*****/var id_receptor = localStorage.getItem('id_receptor'); //id do recepitor 
/*****/var id = localStorage.getItem('id'); //id do emissor
/******/$.ajax({
/*******/url :"http://social-spotted.com",
/*******/type : 'post',
/*******/data : {
/********/"F": "VerBloqueio",
/********/"emissor" : id,
/********/"receptor" : id_receptor
/*******/},
/******/}).done(function(retorno){
/********/if (parseFloat(retorno) == parseFloat(id_receptor)) {
/*********/app.dialog.alert('','Esta pessoa te bloqueou');
/********/} else {
/*********/if (parseFloat(retorno) == 0) {
/**********/app.dialog.confirm('','Deseja bloquear este perfil ?', function () {
/***********/block_desblock(id);
/***********/$('#bloqueia_perfil').html('<i class="fa fa-unlock-alt" aria-hidden="true"></i>&nbsp;Desbloquear perfil'); 
/**********/});
/*********/}    
/*********/if (parseFloat(retorno) == parseFloat(id)) {
/**********/app.dialog.confirm('','Deseja desbloquear este perfil ?', function () {
/***********/block_desblock(0);
/***********/$('#bloqueia_perfil').html('<i class="fa fa-lock" aria-hidden="true"></i>&nbsp;Desbloquear perfil');
/**********/});       
/*********/}
/********/}       
/*******/}).fail(function(jqXHR, textStatus, msg){
/********/erroconexao.open();
/*******/return 0;
/********/}); 
/*******/} 

//funcao para bloquear ou desbloquer perfil 
/***/function block_desblock (par) 
/****/{ 
/*****/var id_receptor = localStorage.getItem('id_receptor'); //id do recepitor 
/*****/var id = localStorage.getItem('id'); //id do emissor
/******/$.ajax({
/*******/url :"http://social-spotted.com",
/*******/type : 'post',
/*******/data : {
/********/"F": "BloquearChat",
/********/"id" : id,
/********/"id_receptor" : id_receptor,
/********/"Parametro" : par
/*******/},
/******/}).done(function(retorno){
/********/if (retorno == 1) {
/*********/app.dialog.alert('','Procedimento concluído!');     
/********/} else {
/*********/app.dialog.alert('','Ops! Algo deu errado, tente mais tarde.');
/*********/}
/********/}).fail(function(jqXHR, textStatus, msg){
/*********/erroconexao.open();
/********/return 0;
/*******/}); 
/******/}

//aciona bota de bloqueio
/***/function busca_bloqueio ()
/****/{
/*****/var id_receptor = localStorage.getItem('id_receptor'); //id do recepitor 
/*****/var id = localStorage.getItem('id'); //id do emissor
/******/$.ajax({
/*******/url :"http://social-spotted.com",
/*******/type : 'post',
/*******/data : {
/********/"F": "VerBloqueio",
/********/"emissor" : id,
/********/"receptor" : id_receptor
/*******/},
/******/}).done(function(retorno){ 
/********/if (parseFloat(retorno) == parseFloat(id_receptor)) {
/*********/app.dialog.alert('','Esta pessoa te bloqueou');
/*********/$('#bloqueia_perfil').css({'display':'none'});
/********/} else {
/**********/if (parseFloat(retorno) == parseFloat(id) || parseFloat(retorno) == 0 || parseFloat(retorno) == null) {
/***********/$('#bloqueia_perfil').css({'display':'block'});
/**********/}     
/*********/}
/*********/if (parseFloat(retorno) == parseFloat(id)) {
/**********/$('#bloqueia_perfil').html('<i class="fa fa-unlock-alt" aria-hidden="true"></i>&nbsp;Desbloquear perfil');        
/*********/}             
/********/}).fail(function(jqXHR, textStatus, msg){
/*******/erroconexao.open();
/******/return 0;
/*****/}); 
/****/}    

//funcao para visualizar perfil de usuario de conversa
/***/function ver_perfil_msg () 
/****/{
/*****/var id_receptor = localStorage.getItem('id_receptor'); //id do recepitor  
/******/$.ajax({
/*******/url :"http://social-spotted.com",
/*******/type : 'post',
/*******/data : {
/********/"F": "BuscaPerfilMsg",
/********/"id_receptor" : id_receptor
/*******/},
/******/}).done(function(retorno){
/*******/var dados = JSON.parse(retorno);
/*******/$("#foto_perfil_usuarios_zoom").html('<img src="http://social-spotted.com/'+dados[0].foto_perfil+'" style="width: 200%; margin-top: -90px;  display: block; margin-left: auto; margin-right: auto">');
/*******/$("#foto_perfil_usuarios").html('<img src="http://social-spotted.com/'+dados[0].foto_perfil+'" style="width: 50%; margin-top: -120px;  display: block; margin-left: auto; margin-right: auto">');
/*******/$("#foto_capa_usuarios").html('<img src="http://social-spotted.com/'+dados[0].foto_capa+'" style="width: 100%; margin-top: -20px">');
/*******/$("#nome_usuario").html(dados[0].nome);
/*******/$("#univer_usuario").html('<i class="fa fa-university" aria-hidden="true"></i><br>'+dados[0].univer);
/*******/$("#curso_usuario").html('<i class="fa fa-graduation-cap" aria-hidden="true"></i><br>'+dados[0].curso);
/*******/$("#est_civil_usuario").html('<i class="fa fa-heart" aria-hidden="true"></i><br>'+dados[0].estado_c);
/*******/$("#intere_usuario").html('<i class="fa fa-heart-o" aria-hidden="true"></i><br>'+dados[0].sexo);
/*******/$("#foto_perfil_msg").html('<img src="http://social-spotted.com/'+dados[0].foto_perfil+'">');
/*******/$("#nome_perfil_msg").html('&nbsp;'+dados[0].nome);
/*******/diminui_nome_msg();
/********/if (dados[0].biografia == '' || dados[0].biografia == null)
/*********/$("#biograf_usuario").html('');
/********/else {
/*********/var biografia_usuario = emojione.shortnameToUnicode(dados[0].biografia);
/*********/biografia_usuario = biografia_usuario.replace(/0xef/g,"'");
/*********/biografia_usuario = biografia_usuario.replace(/0x22/g,'"');
/*********/$("#biograf_usuario").html('<p class="user_biografia"><i class="fa fa-book" aria-hidden="true"></i><br>Status<br>'+biografia_usuario);
/********/} 
/*********/$('#fecha_msg').html('<a id="close_msg" class="link popup-close"></a>'); 
/*********/$('#volta_grade_pessoas').html('<a class="link popup-close f7-icons" id="fecha_perfil_visitado" href="#" style="position: absolute; top: 4px; padding:10px; left: 8px; z-index:9999; font-size: 25px; color: white;" onclick="volta_msg();">close</a>'); 
/*********/document.getElementById('close_msg').click();
/*********/document.getElementById('perfil_usuarios').click();
/********/}).fail(function(jqXHR, textStatus, msg){
/*********/erroconexao.open();
/********/return 0;
/*******/}); 
/******/}

//funcao para limpar historico de visitas 
/***/function LimpaHistorVisi () 
/****/{
/*****/var id = localStorage.getItem('id'); //id do emissor
/******/$.ajax({
/*******/url :"http://social-spotted.com",
/*******/type : 'post',
/*******/data : {
/********/"F": "LimpaHistorVisitas",
/********/"receptor" : id //passa seu id para que possa ser deletado somente seu historico de visitas
/*******/},
/******/}).done(function(retorno){
/********/if (retorno == 1) {
/*********/cont_vistas = 0;
/*********/$('#visitas').html('');
/*********/$('#alert_visita').css({'width':'0px','height':'0px'});
/*********/$('#frase_visita').css({"display":"block"});
/********/} 
/*******/}).fail(function(jqXHR, textStatus, msg){
/*********/erroconexao.open();
/********/return 0;
/*******/}); 
/******/}

/***/function Enviauniversidade ()
/****/{
/*****/var texto = $('#textareauniversidade').val();
/******/$.ajax({
/*******/url :"http://requestwf.com.br/fabricio/envia_email.php",
/*******/type : 'post',
/*******/data : {
/********/"F": "SolicitaUniver",
/********/"texto" : texto, //passa seu id para que possa ser deletado somente seu historico de visitas
/*******/},beforeSend : function(){
/*********/console.log("Enviando requisição...");
/*********/toastCenter.open();
/********/}
/*******/}).done(function(retorno){
/*******/if (retorno == 1) {
/********/toastCenter.close();
/********/$('#textareauniversidade').val('');
/********/app.dialog.alert('','Pedido de universidade enviado. Obrigado!');
/*******/} 
/******/}).fail(function(jqXHR, textStatus, msg){
/********/erroconexao.open();
/*******/return 0;
/******/}); 
/*****/}

//funcao para enviar emial de problema (bug) no spotted 
/***/function EnviaProblema () {
/****/var texto = $('#textoproblema').val();
/****/var Duser = localStorage.getItem('Duser_spotted');
/*****/if (Duser !== "") {
/*****/Duser = JSON.parse(Duser);
/***/}
/****/$.ajax({
/*****/url :"http://requestwf.com.br/fabricio/envia_email.php",
/*****/type : 'post',
/*****/data : {
/******/"F": "RelataProblem",
/******/"texto" : texto, //passa seu id para que possa ser deletado somente seu historico de visitas
/******/"email" : Duser[0].email
/*****/},beforeSend : function(){
/*******/console.log("Enviando requisição...");
/*******/toastCenter.open();
/******/}
/*****/}).done(function(retorno){
/*******/if (retorno == 1) {
/********/toastCenter.close();
/********/$('#textoproblema').val('');
/********/app.dialog.alert('','Texto enviado com sucesso! Obrigado por informar.');
/*******/} 
/******/}).fail(function(jqXHR, textStatus, msg){
/*******/erroconexao.open();
/******/return 0;
/*****/}); 
/****/}

//funcao para o envio de melhoria (email)
/***/function EnviaMelhoria () {
/****/var texto = $('#texto_sugestao').val();
/****/var Duser = localStorage.getItem('Duser_spotted');
/*****/if (Duser !== "") {
/******/Duser = JSON.parse(Duser);
/****/}
/*****/$.ajax({
/******/url :"http://requestwf.com.br/fabricio/envia_email.php",
/******/type : 'post',
/******/data : {
/*******/"F": "RelataMelhoria",
/*******/"texto" : texto, //id deleta seu historico de visitas
/*******/"email" : Duser[0].email
/******/},beforeSend : function(){
/********/console.log("Enviando requisição...");
/********/toastCenter.open();
/********/}
/*******/}).done(function(retorno){
/********/if (retorno == 1) {
/**********/toastCenter.close();
/**********/$('#texto_sugestao').val('');
/**********/app.dialog.alert('','Texto enviado com sucesso! Obrigado por nos ajudar a melhor cada dia mais o spotted.');
/********/} 
/*******/}).fail(function(jqXHR, textStatus, msg){
/*******/erroconexao.open();
/******/return 0;
/*****/}); 
/****/}

//funcao para cancelar busca por usuarios 
/***/function cancela_busca () 
/****/{
/*****/if (probusca > 0) {
/******/probusca = 0;
/******/$('#campodebusca1').css({
/********/'display': 'block'
/******/});
/******/$('#campodebusca2').css({
/********/'display': 'none'
/******/});
/******/$('#campodebusca2').css({
/********/'display': 'none'
/******/});
/******/$('#campodebusca3').css({
/********/'display': 'none'
/******/});
/******/$('#campodebusca3').css({
/********/'display': 'none'
/******/});
/******/$('#campodebusca4').css({
/********/'display': 'none'
/******/});
/******/$('#campodebusca5').css({
/********/'display': 'none'
/******/});
/*****/}
/****/document.getElementById('close_janela_busca').click();
/***/}

/***/function diminui_nome_msg ()  
/****/{
/*****/var nome = $('#nome_perfil_msg').html();
/******/if (nome.length >= 26) 
/*******/{
/********/nome = nome.substring(0,26)+'...';
/*******/}
/*****/$('#nome_perfil_msg').html('&nbsp;'+nome);
/****/}

//funcao para excluir perfildo chat 
/***/function ExcluiPerfilMsg () 
/****/{
/*****/var id = localStorage.getItem('id'); //id do emissor
/*****/var id_receptor = localStorage.getItem('id_receptor'); //id do recepitor 
/******/if (id !== "" || id_receptor !== "") {
/*******/app.dialog.confirm('','Você tem certeza que deseja excluir o contato ?', function () {
/********/$.ajax({
/*********/url :"http://social-spotted.com",
/*********/type : 'post',
/*********/data : {
/**********/"F": "ExcluiPerfilMsg",
/**********/"id" : id, //id para ser deletado seu historico de visitas
/**********/"receptor": id_receptor
/*********/},beforeSend : function(){
/***********/console.log("Enviando requisição...");
/***********/toastCenter.open();
/**********/}
/*********/}).done(function(retorno){
/**********/if (retorno == 1) {
/***********/$('#mensagens').html('');
/***********/document.getElementById('close_menu_msg').click();
/***********/document.getElementById('sai_batepapo_link').click();
/***********/toastCenter.close();   
/***********/lista_msg();
/**********/}
/*********/}).fail(function(jqXHR, textStatus, msg){
/********/erroconexao.open();
/*******/return 0;
/******/}); 
/*****/});
/****/}
/***/}

//funcao para validar mensagem em branco 
/***/function MsgBranco () 
/****/{
/*****/var msg = $('#mensagem').val();
/*****/var msg = msg.length+1;
/******/if (msg-1 > 0) {
/*******/$('#button_send_msg').css(
/********/{
/********/'color': '#2196f3',
/********/'border':'1px solid #2196f3'
/********/} 
/*******/);
/******/} 
/*****/if (msg == 1) {
/******/$('#button_send_msg').css(
/*******/{
/********/'color': 'silver',
/********/'border':'1px solid silver'
/*******/} 
/******/);
/*****/}
/****/}
