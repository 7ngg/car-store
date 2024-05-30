const messages = [
  {
    head: "Track your shipment Anytime, Anywhere",
    body: "With our advanced technology, you can easily monitor the status of your shipment from any corner of the world. Our real-time tracking system ensures you stay updated every step of the way. Simply enter your tracking number, and we'll provide you with the latest information on your package's journey. Experience the convenience and peace of mind that comes with knowing where your shipment is at all times.",
    img: "../assets/img/cargo-ship.jpg"
  },
  {
    head: "Discover Your Perfect Vehicle",
    body: "Explore our extensive car catalog! Whether you're looking for a sleek sedan, a powerful SUV, or a versatile truck, we have the perfect vehicle for you. Browse through our diverse selection and find the car that meets all your needs and preferences. With detailed descriptions, high-quality images, and comprehensive specifications, making an informed choice has never been easier. Start your journey today and discover the car of your dreams!",
    img: "../assets/img/car-2.jpg"
  }
];

const greeting = document.querySelector('.greeting');
const greetingMessage = document.querySelector('.greeting-message');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let iter = 0;

function getMessageTemplate(head, body) {
  return `
    <h1>${head}</h1>
    <p>${body}</p>
  `;
}

function updateMessage(index) {
  const msg = messages[index % messages.length];
  greetingMessage.innerHTML = '';
  greetingMessage.insertAdjacentHTML('beforeend', getMessageTemplate(msg.head, msg.body));
  greeting.style.background = `url(${msg.img}) no-repeat center center`;
  greeting.style.backgroundSize = 'cover';
}

function nextMessage() {
  iter = (iter + 1) % messages.length;
  updateMessage(iter);
}

function prevMessage() {
  iter = (iter - 1 + messages.length) % messages.length;
  updateMessage(iter);
}

nextBtn.addEventListener('click', nextMessage);
prevBtn.addEventListener('click', prevMessage);

updateMessage(iter);
