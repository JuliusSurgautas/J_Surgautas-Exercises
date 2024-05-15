function check(p) {
  for (let i = 3; i <= Math.sqrt(p); i += 2)
      if (p % i === 0) {
          return true;
      }
  return false;
}

function p() {

  let n = 100

  if (n % 2 === 0)
      console.log(n + "tai ne pirminis skaicius");
  else if (check(n))
      console.log(n + " tai ne pirminis skaicius");
  else
      console.log(n + " tai pirminis skaicius");

}
p()