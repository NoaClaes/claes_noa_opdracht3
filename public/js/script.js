// init Isotope
var iso = new Isotope( '.kunstcollectie', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol'
  }
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0; i < buttonGroups.length; i++ ) {
  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
}

function onButtonGroupClick( event ) {
  // only button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var button = event.target;
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}

var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener('click', function( event ){
  if (!matchesSelector( event.target, 'button')) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  iso.arrange({ filter: filterValue});
});
