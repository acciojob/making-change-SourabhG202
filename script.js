const makeChange = (c) => {
  c = parseInt(c); // Input ko integer mein convert kar rahe hain, taaki `prompt` se string aane par problem na ho
  
  return {
    q: Math.floor(c / 25),        // Quarters ka count nikal rahe hain (25 cent wale coins)
    d: Math.floor((c % 25) / 10), // Bache hue amount mein se dimes ka count nikal rahe hain (10 cent wale coins)
    n: Math.floor((c % 25 % 10) / 5), // Uske baad bache hue amount se nickels ka count (5 cent wale coins)
    p: c % 25 % 10 % 5 // Jo bhi bachta hai, wo pennies hain (1 cent wale coins)
  };
};

// Do not change the code below
const c = prompt("Enter c: "); // User se input le rahe hain
alert(JSON.stringify(makeChange(c))); // Result ko JSON format mein alert kar rahe hain
