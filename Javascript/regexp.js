function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return console.log(regex.test(email));
}

validateEmail("Shrieker");
validateEmail("Shrieker.gmail");
validateEmail("Shrieker@gmail");
validateEmail("Shrieker@gmail.c");
validateEmail("Shrieker@gmail.com");