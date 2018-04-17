$(document).ready(function () {
  $('#webDevProjects').hide();
  $('#softwareDevProjects').hide();
});

function webSkillClick() {
  var software = $('#softwareDevProjects');
  var webDev = $('#webDevProjects');
  if(software.attr('show') == 'yes'){
    software.fadeOut('fast', function(){
      fadeProjects(webDev);
    });
    software.attr('show', 'no');
  }
  else {
    fadeProjects(webDev);
  }
}

function softwareSkillClick() {
  var software = $('#softwareDevProjects');
  var webDev = $('#webDevProjects');
  if(webDev.attr('show') == 'yes'){
    webDev.fadeOut('fast', function(){
      fadeProjects(software);
    });
    webDev.attr('show', 'no');
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
