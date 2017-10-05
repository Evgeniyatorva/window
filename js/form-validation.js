 $(document).ready(function($) {
     $("#contact-form").validate({
         rules: {

             your_firstname: {
                 required: true
             },
             your_phone: {
                 required: true,
                 digits: true
             },
             your_email: {
                  email: true
             },
         }


     });
 });