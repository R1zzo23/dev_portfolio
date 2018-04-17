$(document).ready(function () {
  $('#webDevProjects').hide();
  $('#softwareDevProjects').hide();
});

function webSkillClick() {
  $('#softwareDevProjects').attr('hidden', 'true');
  $('#softwareDevProjects').hide();
  if ($('#webDevProjects').attr('hidden') == 'hidden'){
    $('#webDevProjects').show();
    $('#webDevProjects').attr('hidden', 'no');
  }
  else {
    $('#webDevProjects').hide();
    $('#webDevProjects').attr('hidden', 'true');
  }


}

$('#softwareSkill').click(function() {
  $('#webDevProjects').hide();
  $('#softwareDevProjects').show();
});
