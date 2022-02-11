$(document).ready(() => {
  //menu
  $('.navbar__meu-btn').on('click', function (){
    $(".navbar__links").toggleClass("active");
    $(this).find("i").toggleClass("fa-bars");
    $(this).find("i").toggleClass("fa-times");
  });

  //carousel
  const slickOptions = {
    autoplay: true,
    dots: false,
    prevArrow: 
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow: 
      '<button type="button" class="slick-next slider__next-arrow">Next</button>;'
  };

  $('.slider').slick(slickOptions);


  setInterval (() => {
    const numberCollection = document.querySelectorAll(".counter_number");
  
    numberCollection.forEach((number) => {
      console.log(parseFloat(number.innerHTML));
      //const number2 = number.innerHTML.replace(".", "");
      const currentNumber = Number(number.innerHTML);
      number.innerHTML = currentNumber + 1;
    });
  }, 1000);

  const counterOptions = {
    delay: 10,
    time: 1000,
  };
  
  $(".counter_number").counterUp(counterOptions);

  $(".footer__form-button").on('click', () => {
    const email = $('#email').val();
    Email.send({
      Host : "smtp.yourisp.com",
      Username : "username",
      Password : "password",
      To : 'mahrupp@gmail.com',
      From : email ,
      Subject : "Quero ser adiconado na newsletter",
      Body : `Ola, quero ser adicionado na newsletter do site
            Meu e-mail eh ${email}
            Muito thanks` 
            ,
    }).then(
      (message) => alert(message)
    );

  });
    
});



	