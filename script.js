document.getElementById("pay-btn").onclick = function () {

  var options = {
    key: "rzp_test_RtOJO4QZdUSe4o",   // your TEST key
    amount: 9900,              // ₹99 = 9900 paise
    currency: "INR",           // 🔴 REQUIRED BY RAZORPAY
    name: "Mister Coderz",
    description: "Premium Digital Download",

    handler: function (response) {
      alert("Payment successful");
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
};
