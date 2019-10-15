// (cost per minute * ride time)   +    (cost per mile * ride distace)

function fareEstimator(
  ride_time,
  ride_distance,
  cost_per_minute,
  cost_per_mile
) {
  var array = [];
  for (var i = 0; i < cost_per_minute.length; i++) {
    array[i] =
      ride_time * cost_per_minute[i] + ride_distance * cost_per_mile[i];
    console.log(array);
  }
  return array;
}
