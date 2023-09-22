function multiTable(number) {
  let table = '';

  for (let i = 1; i <= 10; i++) {
    const product = i * number;
    table += `${i} * ${number} = ${product}`;
    
    if (i !== 10) {
      table += '\n'; // Add a newline between rows, except for the last row.
    }
  }

  return table;
}
