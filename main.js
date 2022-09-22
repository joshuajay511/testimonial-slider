const testimonials = [
  {
    name: "Cherise G",
    photoURL: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et sed porro aliquid! Autem consequuntur placeat harum magni molestiae voluptatibus corrupti atque reiciendis sequi! Consequatur quidem atque ipsa placeat assumenda?"
  },
  {
    name: "Chad G",
    photoURL: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et sed porro aliquid! Autem consequuntur placeat harum magni molestiae voluptatibus corrupti atque reiciendis sequi! Consequatur quidem atque ipsa placeat assumenda?"
  },
  {
    name: "Top G",
    photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et sed porro aliquid! Autem consequuntur placeat harum magni molestiae voluptatibus corrupti atque reiciendis sequi! Consequatur quidem atque ipsa placeat assumenda?"
  },
];

const nameEl = document.querySelector(".username");
const photoUrlEl = document.querySelector("img");
const textEl = document.querySelector(".text");

let index = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoURL, text } = testimonials[index];
  nameEl.innerHTML = name;
  photoUrlEl.src = photoURL;
  textEl.innerHTML = text;
  index++;

  setTimeout(()=>{
    updateTestimonial()
  }, 3000);

  if (index < testimonials.length) {
    index;
  } else {
    index = 0;
  }
}