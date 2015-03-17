Meteor.publish("Brands", function(){
  return Brands.find();
});

Meteor.publish("Models", function(){
  return Models.find();
});