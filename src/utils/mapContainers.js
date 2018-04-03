// ORGANIZE CONTAINERS ALPHABETICALLY
export const mapContainers = cont =>
  cont.sort().reduce((col, next) => {
    const firstLetter = next.container_number[0];
    if (!(col[firstLetter] instanceof Array)) {
      col[firstLetter] = [];
    }
    col[firstLetter].push(next);
    return col;
  }, {});
