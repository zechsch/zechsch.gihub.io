function FormSubmit()
   {
	  document.getElementbyID("contactForm").action = "https://formspree.io/zechsch@umich.edu";
	  document.referralForm.submit();
	  document.getElementbyID("contactForm").reset();
	  return true;
  };
