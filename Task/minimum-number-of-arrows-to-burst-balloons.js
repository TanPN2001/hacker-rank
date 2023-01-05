// minimum-number-of-arrows-to-burst-balloons
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/3003453/javascript/

var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);

  let count = 1;
  let dis = points[0];

  for (let i = 1; i < points.length; i++) {
    if(dis[1] < points[i][0]) {
        count ++
        dis = points[i]
    }
    else {
        dis[0] = Math.max(dis[0], points[i][0])
        dis[1] = Math.min(dis[1], points[i][1])
    }
    console.log(dis);
  }

  return count
};

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
);


