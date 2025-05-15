'use strict';

const tableRows = document.querySelectorAll('tr');

[...tableRows].forEach((row) => {
  const cells = row.childNodes;
  const cellClone = cells[3].cloneNode(true);

  row.insertBefore(cellClone, row.lastElementChild);
});
