$(document).ready(function () {
  $('#webDevProjects').hide();
  $('#softwareDevProjects').hide();
  $('#aboutMe').hide();
});

function aboutMeClick() {
  var software = $('#softwareDevProjects');
  var webDev = $('#webDevProjects');
  var aboutMe = $('#aboutMe');
  if(software.attr('show') == 'yes'){
    software.fadeOut('fast', function(){
      fadeProjects(aboutMe);
    });
    software.attr('show', 'no');
  }
  else if(webDev.attr('show') == 'yes'){
    webDev.fadeOut('fast', function(){
      fadeProjects(aboutMe);
    });
    webDev.attr('show', 'no');
  }
  else {
    fadeProjects(aboutMe);
  }
}

function webSkillClick() {
  var software = $('#softwareDevProjects');
  var webDev = $('#webDevProjects');
  var aboutMe = $('#aboutMe');
  if(software.attr('show') == 'yes'){
    software.fadeOut('fast', function(){
      fadeProjects(webDev);
    });
    software.attr('show', 'no');
  }
  else if(aboutMe.attr('show') == 'yes'){
    aboutMe.fadeOut('fast', function(){
      fadeProjects(webDev);
    });
    aboutMe.attr('show', 'no');
  }
  else {
    fadeProjects(webDev);
  }
}

function softwareSkillClick() {
  var software = $('#softwareDevProjects');
  var webDev = $('#webDevProjects');
  var aboutMe = $('#aboutMe');
  if(webDev.attr('show') == 'yes'){
    webDev.fadeOut('fast', function(){
      fadeProjects(software);
    });
    webDev.attr('show', 'no');
  }
  else if(aboutMe.attr('show') == 'yes'){
    aboutMe.fadeOut('fast', function(){
      fadeProjects(webDev);
    });
    aboutMe.attr('show', 'no');
  }
  else {
    fadeProjects(software);
  }
}

function fadeProjects(div){
  if(div.attr('show') == 'no'){
    div.fadeIn('fast');
    div.attr('show', 'yes');
  }
  else if (div.attr('show') == 'yes'){
    div.fadeOut('fast');
    div.attr('show', 'no');
  }
}
