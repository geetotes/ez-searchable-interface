var item = Backbone.Model.extend({
  defaults: {
    title: null,
    type: null,
    location: null,
    url: null
  }
});

var itemCollection = Backbone.Collection.extend({
  model: item,
  url: 'js/source.json'
});

var myItems = new itemCollection;
myItems.fetch();







//ohh.. this is why global namespacing is important
var options = {
  valueNames: [ 'name', 'description', 'category' ]
};

var featureList = new List('lost-things-list', options);

$('#filter-games').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Game") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-beverages').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Beverage") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});
$('#filter-none').click(function() {
  featureList.filter();
  return false;
});
