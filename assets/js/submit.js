function FormSubmit()
   {
       form = document.getElementById("contactForm");
       header = document.getElementById("contactHeader");
       paragraph = document.getElementById("contactP");
       form.action = "https://formspree.io/zechsch@umich.edu";
       form.submit();
       form.reset();
       header.innerHTML = "Thanks!"
       paragraph.innerHTML = "I'll get back to you shortly."
       form.parentNode.removeChild(form);
	  return true;
  };
