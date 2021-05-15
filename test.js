'use strict';
document.getElementById('devel_name').addEventListener('blur',() => validDevel(false),);
document.getElementById('site_name').addEventListener('blur',() => validWebsiteName(false));
document.getElementById('url_name').addEventListener('blur',() => validUrl(false));
document.getElementById('date_start').addEventListener('blur',() => validData(false));
document.getElementById('count_visitors').addEventListener('blur',() => validVisitor(false));
document.getElementById('mail').addEventListener('blur',() => validMail(false));
document.getElementById('rubr').addEventListener('click',() => validRubr(false));
document.getElementById('check').addEventListener('change',() =>validCheck(false));
//document.getElementsByName('answer').addEventListener('click',() => validPlace(false));
document.getElementById('descr').addEventListener('blur',() =>validDescr(false));
document.getElementById('submit').addEventListener('click', formSubmit, false);
//валидация input id= developer
function validDevel(af){
var ec=0;
var fielddevel=document.getElementById('devel_name').value;
 if (!fielddevel){
     document.getElementById('develError').innerHTML = 'Поле должно быть заполнено';  
     ec++;
     if(af) 
       document.getElementById('devel_name').focus();
 }
 else{
    document.getElementById('develError').innerHTML = '';
 }
  return ec;
}
//валидация input id='websiteName'
function validWebsiteName(af){
    var ec=0;
    var fsite=document.getElementById('site_name').value;     
 if (!fsite){
     document.getElementById('siteError').innerHTML = 'Поле должно быть заполнено';  
     ec++;
     if(af) 
    document.getElementById('site_name').focus();
 }
 else{
    document.getElementById('siteError').innerHTML = '';
 }
 return ec;
}
//валидация input id='url'
function validUrl(af){
    var ec=0;
    var furl = document.getElementById('url_name').value;
    if (!furl){
        document.getElementById('urlError').innerHTML = 'Поле должно быть заполнено';  
        ec++;
        if(af) 
          document.getElementById('url_name').focus();
    }
    else{
       document.getElementById('urlError').innerHTML = '';
    }
    return ec;
}
//валидация input id='date_start'
function validData(af){
    var ec=0;
    var fdata = document.getElementById('date_start').value;
    if (!fdata){
        document.getElementById('dataError').innerHTML = 'Поле должно быть заполнено'; 
        ec++;
        if(af) 
          document.getElementById('date_start').focus(); 
    }
    else{
       document.getElementById('dataError').innerHTML = '';
    }
    return ec;
}
//валидация input id='count_visitors'
function validVisitor(af){
    var ec=0;
    var fvisit = document.getElementById('count_visitors').value;
    var numbers = /^[0-9]+$/;
if(!fvisit){
    document.getElementById('visitorError').innerHTML = 'Поле должно быть заполнено'; 
    ec++;
    if(af) 
      document.getElementById('count_visitors').focus(); 
}
else if(!fvisit.match(numbers))
{
    document.getElementById('visitorError').innerHTML = 'Поле должно содержать только положительные цифровые значения';
    ec++;
    if(af) 
      document.getElementById('count_visitors').focus();  
} else{    
        document.getElementById('visitorError').innerHTML = '';
}
return ec;
}    
//валидация input id='mail'
function validMail(af){
    var ec=0;
    var fmail = document.getElementById('mail').value;
    var mailformat = /.+@.+\..+/;    
    if (!fmail){
        document.getElementById('mailError').innerHTML = 'Поле должно быть заполнено';  
        ec++;
        if(af) 
          document.getElementById('mail').focus();
    }
    else if(!fmail.match(mailformat)){
        document.getElementById('mailError').innerHTML = 'Неверный формат электронной почты';  
        ec++;
        if(af) 
          document.getElementById('mail').focus();
    }
    else{
       document.getElementById('mailError').innerHTML = '';
    }
    return ec;
}
//валидация input id='rubr'
function validRubr(af){
    var ec=0;
var frubr=document.getElementById('rubr').value;
if(frubr === "null"){
    document.getElementById('rubrError').innerHTML = 'Сделайте выбор';
    ec++;
    if(af) 
      document.getElementById('rubr').focus();   
}
else{
    document.getElementById('rubrError').innerHTML = '';  
}
return ec;
  }
//валидация input name ='answer'
function validPlace(af){ 
    var ec=0;
    var fplace = document.getElementsByName('answer');
    var rbcheked = false;
    for (var i = 0; i < fplace.length; i++) {
        testvalidform.answer[i].addEventListener('click', ()=>validPlace(false));
        if (fplace[i].checked) {
             rbcheked = true;
             break;
        }
    }
         if (!rbcheked){
             document.getElementById('placeError').innerHTML = 'Сделайте выбор';              
             ec++;
             if(af) 
             document.getElementById('place1').scrollIntoView();                       
            }
         else{
          document.getElementById('placeError').innerHTML = '';       
             }
   return ec;
   }    
    
   // валидация id= 'check'
 function validCheck(af){
     var ec=0;
     var fcheck=document.getElementById('check').checked;
     if(!fcheck){
     document.getElementById('checkError').innerHTML = 'Сделайте выбор';  
     ec++;
     if(af) 
      document.getElementById('check').focus();   
    }
else{
document.getElementById('checkError').innerHTML = '';
}
return ec;
 }  
//валидация input id="descr"
function validDescr(af){
    var ec=0;
    var fdescr = document.getElementById('descr').value;
    if (!fdescr){
        document.getElementById('descrError').innerHTML = 'Поле должно быть заполнено';  
        ec++;
        if(af) 
          document.getElementById('descr').focus();
    }
    else{
       document.getElementById('descrError').innerHTML = '';
    }
    return ec;
}
// for submit

function formSubmit(EO){
    var ec = 0;
    EO=EO||window.event;
    ec+=validDevel(!ec);    
    ec+=validWebsiteName(!ec);    
    ec+=validUrl(!ec);    
    ec+=validData(!ec);
    ec+=validVisitor(!ec);    
    ec+=validMail(!ec);   
    ec+=validRubr(!ec);
    ec+=validPlace(!ec);
    ec+=validCheck(!ec);
    ec+=validDescr(!ec);
    if(ec)
    EO.preventDefault();
    
}