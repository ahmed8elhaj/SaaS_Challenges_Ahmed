const readline = require('readline');
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

read.question('Enter the currency MAD or EUR: \n ', (firstInput) => {
  const answer = firstInput.toUpperCase(firstInput);

  read.question('How much do you have ?  \n', (secondeInpute) => {
    const quantity = (secondeInpute)

    if (answer === 'MAD') {
      const EUR = quantity / 11;
      console.log(`Your budget in EUR is :  ${EUR}`);
    }
    else if (answer === 'EUR') {
      const MAD = quantity * 11;
      console.log(`Your budget in MAD is  ${MAD}`);
      read.close();
    }
    else {
      console.log('PLease enter a valid currency ');

    }
    process.exit(0);
  })



})
