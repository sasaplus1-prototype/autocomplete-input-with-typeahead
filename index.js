(function(){

  'use strict';

  $('#js-index-of').typeahead({
    //classNames: {},
    hint: true,
    highlight: true,
    minLength: 1
  }, {
    source: (function(){
      var suggests = ['apple', 'banana', 'chocolate'];

      return function(query, syncResults, asyncResults) {
        var matches = $.grep(suggests, function(suggest) {
          return (suggest.indexOf(query) !== -1);
        });

        syncResults(matches);
      };
    }())
  });

  $('#js-open-suggests-1').on('click', function() {
    $('#js-index-of').typeahead('open');
  });
  $('#js-close-suggests-1').on('click', function() {
    $('#js-index-of').typeahead('close');
  });

  $('#js-bloodhound').typeahead({
    //classNames: {},
    hint: true,
    highlight: true,
    minLength: 1
  }, {
    source: (function(){
      return new Bloodhound({
        local: ['apple', 'banana', 'chocolate'],
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        datumTokenizer: Bloodhound.tokenizers.whitespace
      });
    }())
  });

  $('#js-open-suggests-2').on('click', function() {
    $('#js-bloodhound').typeahead('open');
  });
  $('#js-close-suggests-2').on('click', function() {
    $('#js-bloodhound').typeahead('close');
  });

}());
