/*jslint browser: true, eqeq: true, nomen: true, plusplus: true, maxerr: 50, indent: 2, white: false */
/*global $ */

var $nav_tabs = $('.nav-tabs-01 [data-object="drawer"]'),
  titleCase = function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

$nav_tabs.on('click', '[data-behavior~="accordion"]', function (event) {
  var $el = $(this).closest('[data-object="drawer"]'),
    state = $el.attr('data-state');

  $el.blur(); // Removes focus
  event.preventDefault();
  event.stopPropagation();

  $el.trigger(state + '.accordion', $el);
});

// Accordion: Close all drawers, open this drawer
$nav_tabs.on('is-closed.accordion', function (event, el) {
  var $el = $(el),
    $parent = $el.closest('[data-state]');

  $parent.siblings().attr('data-state', 'is-closed');
  $parent.attr('data-state', 'is-open');
});

$nav_tabs.on('is-open.accordion', function (event, el) {
  var $el = $(el),
    $parent = $el.closest('[data-state]');

  $parent.attr('data-state', 'is-closed');
});


