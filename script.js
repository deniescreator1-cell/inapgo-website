
const hotels = [
  {
    name: "Hotel Nyaman Jogja",
    city: "Yogyakarta",
    price: "Rp350.000",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600"
  },
  {
    name: "Bali Paradise Hotel",
    city: "Bali",
    price: "Rp550.000",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600"
  },
  {
    name: "Jakarta City Hotel",
    city: "Jakarta",
    price: "Rp450.000",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600"
  },
  {
    name: "Semarang Stay Hotel",
    city: "Semarang",
    price: "Rp300.000",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600"
  }
];

function displayHotels(data) {
  const list = document.getElementById("hotelList");

  if (!list) return;

  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = "<p>Hotel tidak ditemukan.</p>";
    return;
  }

  data.forEach(hotel => {
    list.innerHTML += `
      <div class="hotel-card">
        <img src="${hotel.image}" alt="${hotel.name}">
        <div class="hotel-info">
          <h3>${hotel.name}</h3>
          <p>📍 ${hotel.city}</p>
          <strong>${hotel.price} / malam</strong>

          <a href="https://www.agoda.com/" target="_blank">
            Booking Agoda
          </a>

          <a href="https://www.reddoorz.com/" target="_blank">
            Booking RedDoorz
          </a>
        </div>
      </div>
    `;
  });
}

// FUNGSI PENCARIAN
window.searchHotels = function() {
  const input = document.getElementById("destination");
  const keyword = input.value.toLowerCase().trim();

  const results = hotels.filter(hotel =>
    hotel.city.toLowerCase().includes(keyword) ||
    hotel.name.toLowerCase().includes(keyword)
  );

  displayHotels(results);

  document.getElementById("resultInfo").textContent =
    "Ditemukan " + results.length + " hotel.";
};

// FUNGSI SALIN PROMO
window.copyPromo = function(id) {
  const element = document.getElementById(id);

  if (!element) {
    alert("Kode promo tidak ditemukan.");
    return;
  }

  const code = element.textContent.trim();

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(code)
      .then(() => alert("Kode berhasil disalin: " + code))
      .catch(() => alert("Kode promo: " + code));
  } else {
    alert("Kode promo Anda: " + code);
  }
};

// TAMPILKAN HOTEL SAAT WEBSITE DIBUKA
displayHotels(hotels);
