
document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('form');
   form.addEventListener('submit', formSend);
   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);

      if (error === 0) {
         form.classList.add('_sending');
         let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
         });
         if (response.ok) {
            let result = await response.json();
            form.reset();
            form.classList.remove('_sending');
         }else {
            alert('Failed to contact the server');
            form.classList.remove('_sending');
         }

      } else {
         return
      }
   }

   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input)
         console.log(input);

         if (input.classList.contains('._email')) {
            if (emailTest(input)) {
               formAddError(input);
               error++;
            }
         } else if (input.classList.contains('._name')) {
            if (nameTest(input)) {
               formAddError(input);
               error++;
            }
         } else if (input.classList.contains('._mobileNumber')) {
            if (mobileNumberTest(input)) {
               formAddError(input);
               error++;
            }
         } else {
            if (input.value === '') {
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }
   function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }
   function emailTest(input) {
      return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(input.value);
   }
   function nameTest(input) {
      return !/[a-zA-Z]*/.test(input.value);
   }
   function mobileNumberTest(input) {
      return !/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/.test(input.value);
   }

});