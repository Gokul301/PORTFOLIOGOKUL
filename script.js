function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*-----##--SCROLL REVEAL ANIMATION--#--*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})

/* -- HOME -- */
sr.reveal('.section__pic-container',{})
sr.reveal('.title',{delay: 100})
sr.reveal('.section__text__p2,.section__text__p1',{delay: 200})
sr.reveal('.btn-container',{delay: 200})
sr.reveal('.socials-container',{delay: 200})
sr.reveal('.icon',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.details-container',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srLeft.reveal('.about-details-container',{delay: 100})
  srLeft.reveal('.contact-info-upper-container',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
    })
    
    srRight.reveal('.about-containers',{delay: 100})

window.addEventListener('scroll', scrollActive)  

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}
// animated smooth scrolling
var $target = $($(this).children().attr("href"));
if($target.length){
  e.preventDefault();
  $("html, body").animate({
    scrollTop: $target.offset().top - navOffset
  }, 600);
};


/*cert-view*/
function showImage() {
  var imageContainer =
      document.createElement("div");
  imageContainer.className =
      "image-container";

  var image =
      document.createElement("img");
  image.src =
"certificate/GOKULAKRISHNAN..S.pdf.png";
  var closeButton =
      document.createElement(
          "button"
      );
  closeButton.textContent = "Close";
  closeButton.className =
      "close-btn";
  closeButton.onclick =
      function () {
          document.body.removeChild(
              imageContainer
          );
      };

  imageContainer.appendChild(
      closeButton
  );
  imageContainer.appendChild(image);

  document.body.appendChild(
      imageContainer
  );
}

function showImage2() {
  var imageContainer =
      document.createElement("div");
  imageContainer.className =
      "image-container";

  var image =
      document.createElement("img");
  image.src =
"certificate/IBM DB0101EN Certificate1 _ Cognitive Class_page-0001 (1).jpg";
  var closeButton =
      document.createElement(
          "button"
      );
  closeButton.textContent = "Close";
  closeButton.className =
      "close-btn";
  closeButton.onclick =
      function () {
          document.body.removeChild(
              imageContainer
          );
      };

  imageContainer.appendChild(
      closeButton
  );
  imageContainer.appendChild(image);

  document.body.appendChild(
      imageContainer
  );
}


function showImage3() {
  var imageContainer =
      document.createElement("div");
  imageContainer.className =
      "image-container";

  var image =
      document.createElement("img");
  image.src =
"certificate/classcertofexcellencegokul.png";
  var closeButton =
      document.createElement(
          "button"
      );
  closeButton.textContent = "Close";
  closeButton.className =
      "close-btn";
  closeButton.onclick =
      function () {
          document.body.removeChild(
              imageContainer
          );
      };

  imageContainer.appendChild(
      closeButton
  );
  imageContainer.appendChild(image);

  document.body.appendChild(
      imageContainer
  );
}

function showImage4() {
  var imageContainer =
      document.createElement("div");
  imageContainer.className =
      "image-container";

  var image =
      document.createElement("img");
  image.src =
"certificate/GOKULA KRISHNANS-IoT Fundamentals-certificate.pdf .png";
  var closeButton =
      document.createElement(
          "button"
      );
  closeButton.textContent = "Close";
  closeButton.className =
      "close-btn";
  closeButton.onclick =
      function () {
          document.body.removeChild(
              imageContainer
          );
      };

  imageContainer.appendChild(
      closeButton
  );
  imageContainer.appendChild(image);

  document.body.appendChild(
      imageContainer
  );
}
