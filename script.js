function order(type) {
  let msg = "Hello Gangiya Enterprises, I want to order " + type;
  window.open("https://wa.me/918002322356?text=" + encodeURIComponent(msg));
}

function call() {
  window.location.href = "tel:8002322356";
}

