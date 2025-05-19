const cart = [];

function addToCart(product) {
  cart.push(product);
  alert(`Has agregado "${product}" al carrito. Tu pedido se enviará por WhatsApp.`);
  const message = `¡Hola! Quiero pedir: ${cart.join(', ')}`;
  const phone = "573001112233";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}