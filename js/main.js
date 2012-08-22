(function ($) {
  "use strict";

  $(function () {
    $('#task-3-solution-js').load("js/shri.js");
    $('.toggle-solution').on('click', function (e) {
      var self = $(this);
      var solution = self.next('.task-solution');
      if (solution.hasClass('open')) {
        solution.slideUp();
        self.text('Показать решение');
      } else {
        solution.slideDown();
        self.text('Скрыть решение');
      }
      solution.toggleClass('open');
      e.preventDefault();
    });

    SyntaxHighlighter.all();
  });
})(jQuery);