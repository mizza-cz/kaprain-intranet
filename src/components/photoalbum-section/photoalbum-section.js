$(function () {
  $.fn.datepicker.dates['cs'] = {
    days: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
    daysShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
    daysMin: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
    months: [
      'Leden',
      'Únor',
      'Březen',
      'Duben',
      'Květen',
      'Červen',
      'Červenec',
      'Srpen',
      'Září',
      'Říjen',
      'Listopad',
      'Prosinec',
    ],
    monthsShort: [
      'Led',
      'Úno',
      'Bře',
      'Dub',
      'Kvě',
      'Čer',
      'Čvc',
      'Srp',
      'Zář',
      'Říj',
      'Lis',
      'Pro',
    ],
    today: 'Dnes',
    clear: 'Vymazat',
    format: 'dd.mm.yyyy',
    titleFormat: 'MM yyyy',
    weekStart: 1,
  };

  $('.date').datepicker({
    autoclose: true,
    todayHighlight: true,
    language: 'cs',
  });
});
