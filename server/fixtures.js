if (Brands.find().fetch().length === 0){

  var brands = ["Audi", "BMW", "Chrysler"];

  var models = {
    "Audi": ["A3", "A4", "A5"],
    "BMW": ["3 Series", "4 series", "5 series"],
    "Chrysler": ["200", "300"]
  };

  for (var i = 0; i < brands.length; i++){
    Brands.insert({name: brands[i]});
    for (var j = 0; j < models[brands[i]].length; j++){
      Models.insert({name: models[brands[i]][j], brand: brands[i]})
    }
  }
}



