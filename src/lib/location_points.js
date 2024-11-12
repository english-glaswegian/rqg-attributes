export const location_hp = (hit_points) => {
  let points = '';

  if (hit_points > 6)
    points = parseInt(Math.ceil(parseFloat(hit_points) / 3.0));
  else if (hit_points > 0 && hit_points < 7)
    points = 2;

  return points;
}
