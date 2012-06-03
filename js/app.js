var itemsListTemplate = ' <% _.each(item, function(campaign){ %> <li><span class="date"><%= campaign.get("date") %></span> <a href="#/campaign/<%= campaign.get("id") %>" class="name"><%= campaign.get("name") %></a> <div class="clickthru"> Clickthru: <div class="progressbar" id="progressbar_<%= campaign.get("id")%>"></div> </div> </li> <% }); %> ';
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
  url: 'js/source.json',
  render: function() {
    var data = {
      item: this.models,
    _: _
    };
    var foodata = $.get('js/source.json', function(data){
var itemsListTemplate = ' <% _.each(item, function(campaign){ %> <li><span class="date"><%= campaign.get("date") %></span> <a href="#/campaign/<%= campaign.get("id") %>" class="name"><%= campaign.get("name") %></a> <div class="clickthru"> Clickthru: <div class="progressbar" id="progressbar_<%= campaign.get("id")%>"></div> </div> </li> <% }); %> ';
    var compiledTemplate = _.template(itemsListTemplate, data);
    $('#container').html(compiledTemplate);
      
      
    });
  }
});

var myItems = new itemCollection;
myItems.fetch();
myItems.render();
console.log('rendered');







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
