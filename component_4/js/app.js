document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("headerContainer");

  const platforms = [
    {
      name: "Upstox",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/download 5.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#83a2ffa1"
    },
    {
      name: "AngleOne",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/AngelOne.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#ffd28fcb"
    },
    {
      name: "Groww",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/Groww.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#83a2ffa1"
    },
    {
      name: "Dhan",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/Dhan.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#ffd28fcb"
    },
    {
      name: "Alice Blue",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/AliceBlue.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#83a2ffa1"
    },
    {
      name: "Axis Direct",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/Axis.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#ffd28fcb"
    },
    {
      name: "Fyers",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/FYERS.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#83a2ffa1"
    },
    {
      name: "GeoJit",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/Geohit.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#ffd28fcb"
    },
    {
      name: "HDFC Securities",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/HDFC.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#83a2ffa1"
    },
    {
      name: "IIFL",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/IIFL.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#ffd28fcb"
    },
    {
      name: "Kotak Securities",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/kotak.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#83a2ffa1"
    },
    {
      name: "Motilal Oswal",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/Motal Oswal.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#ffd28fcb"
    },
    {
      name: "Nuvama",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/Nuvama.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#83a2ffa1"
    },
    {
      name: "PAYTM Money",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/Paytm.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#ffd28fcb"
    },
    {
      name: "SBI Securities",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/Sbi.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#83a2ffa1"
    },
    {
      name: "Sharekhan",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/Sharekhan.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#ffd28fcb"
    },
    {
      name: "SMC Global",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/SMC.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#83a2ffa1"
    },
    {
      name: "5paisa",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/5pais.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#ffd28fcb"
    },
    {
      name: "Zerodha",
      reviews: "15k",
      accounts: "50.2k",
      img: "img/Zerodha.png",
      products: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      backgroundColor: "#83a2ffa1"
    },
    // Add more objects for additional platforms
  ];

  platforms.forEach(platform => {
    container.innerHTML += `
      <div class="py-3 custom-container d-flex flex-row" style="background-color: ${platform.backgroundColor};">
        <div class="d-flex flex-column custom-column" style="width: 350px;">
          <div class="text-star mb-2">
            <h1 class="h1 mb-1">${platform.name}</h1>
            <img src="img/rating stars.png" alt="stars" class="img-fluid mb-1" style="height: 30px;">
          </div>
          <div class="review-acc d-flex flex-row mb-2">
            <div class="message custom-spacing">
              <img src="img/Chat.png" alt="chat-logo" class="img-fluid mb-3" style="height: 41px;"> <span>${platform.reviews}</span>
              <h3>Reviews</h3>
            </div>
            <div class="user-text">
              <img src="img/2-User.png" alt="user-logo" class="img-fluid mb-3" style="height: 41px;"> <span>${platform.accounts}</span>
              <h3>Accounts</h3>
            </div>
          </div>
          <h3>Open Demat A/c for FREE</h3>
          <div class="button-1 d-flex flex-row">
            <div class="btn-container">
              <a type="button" class="custom-btn">Open A/C 1</a>
            </div>
            <div class="btn-container">
              <a type="button" class="custom-btn">Learn More</a>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column custom-column">
          ${platform.products.map(product => `
            <div class="d-flex flex-row align-items-center mb-5">
              <img src="img/Rectangle 4360.png" alt="rectangle" class="img-fluid" style="height: 32px;">
              <h3 class="ms-2 custom-h">${product}</h3>
            </div>
          `).join('')}
        </div>
        <div class="d-flex flex-column custom-column">
          <div class="d-flex flex-column mb-1">
            <p class="custom-p">A/C Opening Charge</p>
            <p class="custom-p">₹ Rs. 0</p>
          </div>
          <div class="d-flex flex-column mb-1">
            <p class="custom-p">Maintenance Charge</p>
            <p class="custom-p">₹300<img src="img/info-circle.png"class="ms-4"></p>
          </div>
          <div class="d-flex flex-column mb-1">
            <p class="custom-p">Delivery Brokerage</p>
            <p class="custom-p">₹20<img src="img/info-circle.png"class="ms-4"></p>
          </div>
          <div class="d-flex flex-column mb-1">
            <p class="custom-p">Intraday Brokerage</p>
            <p class="custom-p">₹20<img src="img/info-circle.png" class="ms-4"></p>
          </div>
        </div>
        <div class="mainimg ms-3">
          <img src="${platform.img}" alt="${platform.name}" class="img-fluid" style="width: 335px;">
        </div>
      </div>`;
  });
});
