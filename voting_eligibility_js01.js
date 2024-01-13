function myFunction() {
  let age = document.getElementById("age").value;
  let name = document.getElementById("pasa").value;

  age = Number(age);
  if (isNaN(age)) {
    voteable = "Input is not a number";
  } else {
    voteable =
      age < 18
        ? " You Are Not Eligible To Vote!"
        : " You Are  Eligible To Vote!";
  }

  document.getElementById("demo").innerHTML = name + voteable;
}
