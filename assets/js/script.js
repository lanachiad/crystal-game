let givenRandomNumber, crystalOneValue, crystalTwoValue, crystalThreeValue, crystalFourValue, counter;

$(document).ready(function() {
  const crystalImageOne = $('#crystalOne');
  const crystalImageTwo = $('#crystalTwo');
  const crystalImageThree = $('#crystalThree');
  const crystalImageFour = $('#crystalFour');

  let winCount = 0;
  let loseCount = 0;

  init = () => {
    givenRandomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    crystalOneValue = Math.floor(Math.random() * 12 + 1);
    crystalTwoValue = Math.floor(Math.random() * 12 + 1);
    crystalThreeValue = Math.floor(Math.random() * 12 + 1);
    crystalFourValue = Math.floor(Math.random() * 12 + 1);
    counter = 0;

    $('#win-count').text(winCount);
    $('#lose-count').text(loseCount);
    $('#number-to-guess').text(givenRandomNumber);
  };

  counterCheck = (currentTotal, total) => {
    if (currentTotal === total) {
      swal({
        title: 'Good job!',
        text: 'You matched the counter to the number!',
        icon: 'success',
        button: "Let's play again!"
      });
      winCount += 1;
      init();
    } else if (currentTotal > total) {
      swal({
        title: 'Oh no!',
        text: 'Your counter is greater than the number!',
        icon: 'error',
        button: "Let's play again!"
      });
      loseCount += 1;
      init();
    }
  };

  init();

  $('#counter').text(counter);

  $(crystalImageOne).click(function() {
    counter += crystalOneValue;
    $('#counter').text(counter);
    counterCheck(counter, givenRandomNumber);
  });

  $(crystalImageTwo).click(function() {
    counter += crystalTwoValue;
    $('#counter').text(counter);
    counterCheck(counter, givenRandomNumber);
  });

  $(crystalImageThree).click(function() {
    counter += crystalThreeValue;
    $('#counter').text(counter);
    counterCheck(counter, givenRandomNumber);
  });

  $(crystalImageFour).click(function() {
    counter += crystalFourValue;
    $('#counter').text(counter);
    counterCheck(counter, givenRandomNumber);
  });
});
