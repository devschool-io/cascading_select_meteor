Meteor.subscribe("Brands");
Meteor.subscribe("Models");

Template.cascade.helpers({
  brands: function(){
    return Brands.find();
  },
  models: function(){
    return Models.find({brand: Session.get("brandSelected")})
  }
});

Template.cascade.events({
  "change #brands": function(e){
    var brandSelected = $("#brands option:selected").val();
    Session.set("brandSelected", brandSelected); 
    // console.log(Session.get("brandSelected"));
  }
});
