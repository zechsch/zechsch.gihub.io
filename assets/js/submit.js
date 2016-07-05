function FormSubmit()
   {
	  document.getElementById("contactForm").action = "https://formspree.io/zechsch@umich.edu";
	  document.referralForm.submit();
	  document.getElementById("contactForm").reset();
	  return true;
  };
