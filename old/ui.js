$(document).ready(function () {
  window.addEventListener("message", function (event) {
    let data = event.data;
    console.log(data);
    $("#idtext").html("ID : " + data.id);
    console.log(JSON.stringify(data));

    let heal = event.data.heal;
    $("#heal_progress").css("width", heal + "%");
    $("#heal_text").html(Math.round(heal) + "%");

    let food = event.data.food;
    $("#food_progress").css("width", food + "%");
    $("#food_text").html(Math.round(food || 100) + "%");

    let water = event.data.water;
    $("#water_progress").css("width", water + "%");
    $("#water_text").html(Math.round(water || 100) + "%");

    let armor = event.data.armor;
    $("#armor_progress").css("width", armor + "%");
    $("#armor_text").html(Math.round(armor) + "%");

    let dive = event.data.dive;
    if (dive > 0) {
      $("#dive_progress").css("width", dive + "%");
      $("#dive_text").html(Math.round(dive || 100) + "%");
    } else {
      $("#dive_progress").css("width", 0 + "%");
      $("#dive_text").html(Math.round(0) + "%");
    }
  });
});
