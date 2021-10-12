$(document).ready(function () {
  window.addEventListener("message", function (event) {
    let data = event.data;
    $("#id_text").html(data.id);
    // console.log(JSON.stringify(event.data));

    let health = event.data.health;
    // console.log(health);
    if (health <= 0) {
      $("#heal_progress").css("width", 0 + "%");
      $("#heal_text").html(Math.round(0) + "%");
    } else {
      $("#heal_progress").css("width", health + "%");
      $("#heal_text").html(Math.round(health) + "%");
    }

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

    let phone_number = event.data.mysql_data.my_phonenmumber;
    $("#phone_text").text(phone_number);

    let ping = event.data.ping;
    $("#ping_text").text(`${ping} ms`);
  });
});
