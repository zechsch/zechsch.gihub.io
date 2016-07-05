function FormSubmit()
   {
	  document.getElementbyId("contactForm").action = "https://formspree.io/zechsch@umich.edu";
	  document.referralForm.submit();
	  document.getElementbyId("contactForm").reset();
	  return true;
  };
