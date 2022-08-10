function fun(input)
{
    // let x=/[A-Z]{0,}[a-z]{0,}[0-9]{0,}[@]{1}[.]{1}/
       let x=/[a-z]{1,}[@]{1}[a-z]{0,}[.]{1}[a-z]{0,}/;
  
if (input.value.match(x)) {

    alert("Valid email address!");

    document.form1.input1.focus();

    return true;

  } else {

    alert("Invalid email address!");

    document.form1.input1.focus();

    return false;

  }

}