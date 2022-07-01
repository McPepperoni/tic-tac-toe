function GETPosition(position) {
  return { y: parseInt(position.slice(0, 5)), x: parseInt(position.slice(5)) };
}

function PARSEPosition(position) {
  return (
    (position.y < 0 ? "-" : "+") +
    Math.abs(position.y).toString().padStart(4, "0") +
    (position.x < 0 ? "-" : "+") +
    Math.abs(position.x).toString().padStart(4, "0")
  );
}

export function GameLogic(Board, step, size) {
  const player = step.player;

  const keys = Object.keys(Board);
  const XValidator = [-1, 0, 1, 1, 1, 0, -1, -1];
  const YValidator = [-1, -1, -1, 0, 1, 1, 1, 0];

  const allSame = (arr, end) =>
    arr.every((val) => val === arr[0] && val === end);

  const any = (arr, end) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === end) return true;
    }
    return false;
  };

  var position = GETPosition(step.position);

  var validWin = Array(8).fill(true);
  var checked = Array(8).fill(false);
  var blocked = Array(8).fill(false);

  var consecutive = Array(8).fill(0);
  var interval = 1;

  var x = 0;
  var y = 0;

  while (!allSame(checked, true)) {
    for (let i = 0; i < 8; i++) {
      if (checked[i] === true) continue;
      if (validWin[i] === false) {
        checked[i] = true;
        break;
      }
      x = interval * XValidator[i] + position.x;
      y = interval * YValidator[i] + position.y;

      if (
        x <= -(size / 2) ||
        x >= size / 2 ||
        y <= -(size / 2) ||
        y >= size / 2
      ) {
        checked[i] = true;
        break;
      }
      //   console.log(PARSEPosition({ x: x, y: y }));
      if (keys.indexOf(PARSEPosition({ x: x, y: y })) > -1) {
        if (Board[PARSEPosition({ x: x, y: y })] === player) {
          consecutive[i]++;
        } else {
          checked[i] = true;
          blocked[i] = true;
        }
      } else {
        checked[i] = true;
      }
    }

    if (allSame(validWin, false)) break;
    if (allSame(checked, true)) break;
    interval++;
  }

  for (var i = 0; i < 8; i++) {
    if (validWin[i] === true) {
      if (
        i + 4 < 8
          ? consecutive[i] + consecutive[i + 4] !== 4
          : consecutive[i] + consecutive[i - 4] !== 4
      ) {
        validWin[i] = false;
      } else if (
        i + 4 < 8
          ? allSame([blocked[i], blocked[i + 4]], true)
          : allSame([blocked[i], blocked[i - 4]], true)
      ) {
        validWin[i] = false;
      }
    }
  }

  if (any(validWin, true)) return "win";

  console.log(consecutive);
  return "lose";
}
