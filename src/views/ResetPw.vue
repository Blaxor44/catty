<template>
    <section class="vh-100 gradient-custom">
     <div class="container py-5 h-100">
       <div class="row d-flex justify-content-center align-items-center h-100">
         <div class="col-12 col-md-8 col-lg-6 col-xl-5">
           <div class="card bg-dark text-white" style="border-radius: 1rem;">
             <div class="card-body p-5 text-center">
   
               <div class="mb-md-5 mt-md-4 pb-5">
                 <img src="@\assets\catty.png" 
                 width="200"
                 height="200">
                 <br><br>
                 <h2 class="fw-bold mb-2 text-uppercase">Reset your password</h2>
                 <p class="text-white-50 mb-5">Lost your password? Please enter your email and we will send you a link to reset it via your email.</p>
   
                 <div class="form-outline form-white mb-4">
                   <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                   <label class="form-label" for="typeEmailX">Email</label>
                 </div>
   
                 <button onclick="location.href='/';" class="btn btn-outline-light btn-lg px-5" type="submit">Send</button>
   
                 <div class="d-flex justify-content-center text-center mt-4 pt-1">
                   <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                   <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                   <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                 </div>
   
               </div>
   
               <div>
                 <p class="mb-0">Don't have an account? <a href="/signup" class="text-white-50 fw-bold">Sign Up</a>
                 </p>
               </div>
   
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
   </template>
   
   <script>
   // @ is an alias to /src
   import HelloWorld from '@/components/HelloWorld.vue'
   
   export default {
     name: 'HomeView',
     components: {
       HelloWorld
     }
   }
   </script>
   <style>
     .gradient-custom {
   /* fallback for old browsers */
   background: #6a11cb;
   
   /* Chrome 10-25, Safari 5.1-6 */
   background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252));
   
   
   /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   background : linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252))
   
   
   }
   </style>