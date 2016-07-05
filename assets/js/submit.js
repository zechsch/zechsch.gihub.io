function FormSubmit()
   {
       submitForm = document.getElementById("contactForm");
       submitForm.action = "https://formspree.io/zechsch@umich.edu";
       submitForm.submit();
       submitForm.reset();
	  return true;
  };
