
/*function displaySaleNotice() {
  
  const userName = prompt('Welcome to Raw Culture! What is your name?', '');

  let saleNotice;
  if (userName) {
    saleNotice = `${userName}, Hurry! 24-Hour Sale - Get 20% off on all items!`;
  } else {
    saleNotice = 'Hurry! 24-Hour Sale - Get 20% off on all items!';
  }

  document.write(`<p>${saleNotice}</p>`);
};

const temperature = prompt('Pick a temperature: Type "warm" or "cool"');
  
if (temperature) {
  const bodyElement = document.body;
  bodyElement.classList.add(temperature.toLowerCase());
} else {
  alert('No temperature selected.');
};

displaySaleNotice();

function userDetox() {
  let detoxQuestion = prompt('Do you want to join our detox challenge? Answer yes or no.');
  let detoxAnswer = detoxQuestion.toLowerCase();

  // First test case
  if (detoxAnswer == 'yes') {
      let email = prompt('Enter your email address');
      return(email);
  // Second test case if first test case is false
  } else if (detoxAnswer == 'no') {
      let secondAnswer = prompt('Are you sure? Answer yes or no.');
      // Second.5 test case if second case is true
      if (secondAnswer == 'yes') {
          let phoneNumber = prompt('Enter your phone number');
          return(phoneNumber);
      };
  // If none of the test cases are true, then run this. Last resort.
  } else {
      return('Thanks for coming to our page');
  }
}

let returnStatement = userDetox();

console.log(returnStatement);*/

function newDiscount() {
  const originQuestion = prompt(
    "Inflation is on the rise, but we are lowering prices JUST FOR YOU! Want to save 20% on your next purchase? Type yes or no"
  );

  if (originQuestion.toLowerCase() === 'yes') {
    let email = prompt('Enter your email address:');
    let isEmailRight = validateEmail(email);

    if (isEmailRight) {
      alert('Thank you for being a valued customer! Check your email for the promo code.');
    } else {
      alert('Uh-oh. Something went wrong. Please re-enter your email address.');
      email = prompt('Enter your email address again:');
      isEmailRight = validateEmail(email);

      if (isEmailRight) {
        alert('Thank you for being a valued customer! Check your email for the promo code.');
      } else {
        alert('Sorry, the email provided is still invalid.');
      }
    }
  } else {
    const secondQuestion = prompt("Don't miss out on a 20% discount! Would you like to make the most of this great deal? Type yes or no");

    if (secondQuestion.toLowerCase() === 'yes') {
      let email = prompt('Enter your email address:');
      let isEmailRight = validateEmail(email);

      if (isEmailRight) {
        alert('Thank you for being a valued customer! Check your email for the promo code.');
      } else {
        alert('Uh-oh. Something went wrong. Please re-enter your email address.');
        email = prompt('Enter your email address again:');
        isEmailRight = validateEmail(email);

        if (isEmailRight) {
          alert('Thank you for being a valued customer! Check your email for the promo code.');
        } else {
          alert('Sorry, the email provided is still invalid.');
        }
      }
    } else {
      alert("No problem at all! If you change your mind, just refresh your page.");
    }
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

newDiscount();





