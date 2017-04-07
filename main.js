var $nameEntry = $('.nameEntry')
var $wordEntry = $('.wordEntry')
var $gameBoard = $('.gameBoard')
var $winScreen = $('.winScreen')
// $nameEntry.hide()
$wordEntry.hide()
$gameBoard.hide()
$winScreen.hide()
var boom = new Audio('boom.wav')
var players = {
    player1: {
        name: "",
        score: 0,
        foeName: "",
        word: "",
        point: $('.p1Point'),
    },
    player2: {
        name: "",
        score: 0,
        foeName: "",
        word: "",
        point: $('.p2Point'),
    }
}
var currentPlayer = players.player1
var currPlayerFoe = players.player2

$('.nameBtn').on('click', function() {
    players.player1.name = $('.p1Name').val()
    players.player1.foeName = $('.p2Name').val()
    players.player2.name = $('.p2Name').val()
    players.player2.foeName = $('.p1Name').val()
    $('.currPlayer').text(currentPlayer.name)
    $('.playerName').text(currentPlayer.foeName)
    boom.play()
    $nameEntry.slideUp(100)
    $wordEntry.slideDown(500)
})
$('.wordBtn').on('click', function() {
    if (currentPlayer == players.player1) {
        players.player2.word = $('.wordInput').val()
    } else {
        players.player1.word = $('.wordInput').val()
    }
    $('.p1GameName').text(players.player1.name);
    $('.p2GameName').text(players.player2.name)
    $wordEntry.slideUp()
    $gameBoard.slideDown()
    dashDisplay()
})

function dashDisplay() {
    for (var i = 0; i < currPlayerFoe.word.length; i += 1) {
        $('.dashes').append('<span> _ </span>')
    }
}
$('.letter').on('click', letterCheck)

function letterCheck() {
    if (currPlayerFoe.word.includes($(this).text())) {
        console.log('found match')
        for (var i = 0; i < currPlayerFoe.word.length; i += 1) {
            if (currPlayerFoe.word[i] == $(this).text()) {
                $('.dashes span').eq(i).text($(this).text())
                $(this).css('opacity', '.5')
            }
        }
    } else {
        $(this).css('opacity', '.5')
        score()
    }
    if ($('.dashes').text() == currPlayerFoe.word) {
        resetBoard()
        switchPlayer()
    }
    displayParts()
}

function displayParts() {
    if (currPlayerFoe.score == 1) {
        $('#head').attr('class', '')
    } else if (currPlayerFoe.score == 2) {
        $('#body').attr('class', '')
    } else if (currPlayerFoe.score == 3) {
        $('#left-arm').attr('class', '')
    } else if (currPlayerFoe.score == 4) {
        $('#right-arm').attr('class', '')
    } else if (currPlayerFoe.score == 5) {
        $('#left-leg').attr('class', '')
    } else if (currPlayerFoe.score == 6) {
        $('#right-leg').attr('class', '')
        resetBoard()
        switchPlayer()
    }
}

function score() {
    currPlayerFoe.score = currPlayerFoe.score + 1
    currPlayerFoe.point.text(currPlayerFoe.score)
}

function switchPlayer() {
    if (currentPlayer === players.player1) {
        $('.currPlayer').text(players.player2.name)
        $('.playerName').text(players.player1.name)
        currentPlayer = players.player2
        currPlayerFoe = players.player1
    } else {
        winnerDisplay()
    }
}

function resetBoard() {
  if(currentPlayer == players.player1){
    $('.dashes').empty()
    $('.wordInput').val('')
    $('#head').attr('class', 'display')
    $('#body').attr('class', 'display')
    $('#left-arm').attr('class', 'display')
    $('#right-arm').attr('class', 'display')
    $('#left-leg').attr('class', 'display')
    $('#right-leg').attr('class', 'display')
    $wordEntry.slideDown()
    $gameBoard.slideUp()
  }else{
    winnerDisplay()
    $('.wordEntry').hide()
  }
}

function winnerDisplay() {
    if (players.player1.score && players.player2.score >= 0) {
        if (players.player1.score > players.player2.score) {
            $('.playerName').text(players.player2.name)
            $wordEntry.hide()
            $gameBoard.slideUp()
            $winScreen.slideDown()
        } else if (players.player1.score == players.player2.score) {
            $('.winner').text("It's a tie!!!")
            $wordEntry.hide()
            $gameBoard.slideUp()
            $winScreen.slideDown()
        } else {
            $('.playerName').text(players.player1.name)
            $wordEntry.hide()
            $gameBoard.slideUp()
            $winScreen.slideDown()
        }
    }
}
