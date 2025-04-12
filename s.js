// ✅ Firebase is loaded globally by the script tags in the HTML
console.log("Firebase SDK loaded:", firebase);

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF5luzH1N_wJMLO0ZdL1Tj4yMHuxsGXko",
  authDomain: "icubehack.firebaseapp.com",
  projectId: "icubehack",
  storageBucket: "icubehack.appspot.com",
  messagingSenderId: "567951001051",
  appId: "1:567951001051:web:eeff7dc79f08006d2353fe",
  measurementId: "G-6NJDX0NQ21"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Aadhaar to Phone Number Mapping
const aadhaarDatabase = {
  "234567891234": "+911234567890",
  "987654321098": "+919876543210"
};

// Function to Get Phone Number from Aadhaar
function getPhoneNumber() {
  const aadhaar = document.getElementById("aadhaar").value;
  
  if (aadhaar.length !== 12 || isNaN(aadhaar)) {
    alert("Please enter a valid 12-digit Aadhaar number!");
    return;
  }

  if (aadhaarDatabase[aadhaar]) {
    const phoneNumber = aadhaarDatabase[aadhaar];
    console.log("Found Phone Number:", phoneNumber);

    // Initialize reCAPTCHA
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log("reCAPTCHA verified!");
        sendOTP(phoneNumber);
      }
    });

    recaptchaVerifier.render().then((widgetId) => {
      console.log("reCAPTCHA Widget ID:", widgetId);
      sendOTP(phoneNumber);
    });
  } else {
    alert("Aadhaar number not found in database!");
  }
}

// Function to Send OTP
function sendOTP(phoneNumber) {
  auth.signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      document.getElementById("otp-section").style.display = "block";
      alert("OTP sent to " + phoneNumber);
      console.log("OTP sent successfully to:", phoneNumber);
    })
    .catch((error) => {
      console.error("Error sending OTP:", error);
      alert("Error sending OTP: " + error.message);
    });
}

// Function to Verify OTP
function verifyOTP() {
  const otp = document.getElementById("otp").value;
  
  if (otp.length !== 6 || isNaN(otp)) {
    alert("Please enter a valid 6-digit OTP!");
    return;
  }

  window.confirmationResult.confirm(otp)
    .then((result) => {
      alert("Login Successful!");
      console.log("User Info:", result.user);
    })
    .catch((error) => {
      console.error("Error verifying OTP:", error);
      alert("Invalid OTP! Try again.");
    });
}
