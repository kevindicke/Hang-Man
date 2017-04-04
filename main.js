var players = {
    player1: {
        score: 0,
        word: '',
        point: $('#pointP1')
    },
    player2: {
        score: 0,
        word: '',
        point: $('#pointP2')
    }
}
var currentPlayer = players.player2
//***********************************************
//Captures inputted word
$('.btn').on('click', function(evt) {
    evt.preventDefault()
    $('.wordform').css('display', 'none')
    currentPlayer.word = $('.input').val()
    dashDisplay()
})
//**********************************************
//Displays number of dashed that match word length
function dashDisplay() {
    for (var i = 0; i < currentPlayer.word.length; i += 1) {
        $('.dashes').append('<span> _ </span>')
    }
}
//**********************************************
//Inputs letters in missed box or into word picked
$('.letterInput').on('keyup change', letterCheck)

function letterCheck() {
    if (currentPlayer.word.includes($('.letterInput').val())) {
        console.log('found match')
        for (var i = 0; i < currentPlayer.word.length; i += 1) {
            if (currentPlayer.word[i] == $('.letterInput').val()) {
                $('.dashes span').eq(i).text($('.letterInput').val())
            }
        }
    } else {
        $('.missed').append('<span>' + $('.letterInput').val() + '</span>')
        score()
    }
    $('.letterInput').val('')
    displayParts()
}
//*************************************************
//Display body parts on missed lettters
function displayParts() {
    if ($('.missed span').length == 1) {
        $('#head').attr('class', '')
    } else if ($('.missed span').length == 2) {
        $('#body').attr('class', '')
    } else if ($('.missed span').length == 3) {
        $('#left-arm').attr('class', '')
    } else if ($('.missed span').length == 4) {
        $('#right-arm').attr('class', '')
    } else if ($('.missed span').length == 5) {
        $('#left-leg').attr('class', '')
    } else if ($('.missed span').length == 6) {
        $('#right-leg').attr('class', '')
        switchPlayer()
    }
}
//***************************************************
//Score keeping
function score() {
    currentPlayer.score = currentPlayer.score + 1
    currentPlayer.point.text(currentPlayer.score)
}
//****************************************************
//Switches player
function switchPlayer() {
    if (currentPlayer == players.player2) {
        currentPlayer = players.player1
    }
}
//***************************************************
//Display winner
function winnerDisplay() {
    if (players.player1.score && players.player2.score > 0) {
        if (players.player1.score > players.player2.score) {
            console.log('Player 2 wins')
        } else {
            console.log('Player 1 wins')
        }
        restBoard()
    }
}
//***************************************************
//Clears board once players are switched
function restBoard() {
    $('#head').attr('class', 'none')
    $('#body').attr('class', 'none')
    $('#left-arm').attr('class', 'none')
    $('#right-arm').attr('class', 'none')
    $('#left-leg').attr('class', 'none')
    $('#right-leg').attr('class', 'none')

}
/*Things to do:
Changing score...done
Put player into objects...done
Switch players
Display winner
Clear board
Clean up code
Find/Make gallows
Finish design
*/
