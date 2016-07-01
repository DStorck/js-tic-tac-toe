function TicTacToe() {
  this.turn = 2
  this.mario_wins = 0
  this.goomba_wins = 0
  this.board = {
  "one_a": null,
  "one_b": null,
  "one_c": null,
  "two_a": null,
  "two_b": null,
  "two_c": null,
  "three_a": null,
  "three_b": null,
  "three_c": null
};

  this.animate_player = function() {
    var $mario = $('div#mario img.mario')
    var $goomba = $('div#bad_guy img.goomba')
    var mario_on = "media/mario-runs.gif"
    var mario_off= "media/mario-still.png"
    var goomba_on= "media/goombagif.gif"
    var goomba_off= "media/goomba-still.png"
    if (this.turn % 2 === 0) {
      $mario.attr('src', mario_on)
      $goomba.attr('src', goomba_off)
    } else {
      $mario.attr('src', mario_off)
      $goomba.attr('src', goomba_on)
    }
  }

  this.mark = function(space) {
      if ( this.turn % 2 === 0 ) {
        var mark = "A"
      } else {
        var mark = "B"
      }
      if (this.board[space] === null) {
        this.board[space] = mark
        this.turn += 1
        this.animate_player()
      }
      computer_choice = this.computer_choice()
      this.turn += 1
      console.log(this.board)
      console.log(computer_choice)

      var $image = $('button.'+ computer_choice +  ' img')
      console.log($image)
      $image.attr("src","media/bad_guy.png");
  }

  this.computer_choice = function() {
    var nums = ['one', 'two', 'three']
    var letters = ['a', 'b', 'c']
    var randnum = Math.floor((Math.random() * 3));
    var randlet = Math.floor((Math.random() * 3));
    var computer_choice = nums[randlet] + "_" + letters[randnum]
    if (this.board[computer_choice] === null) {
      this.board[computer_choice] = "B"
    } else {
      this.computer_choice()
    }
    return computer_choice

  }

  this.reset = function() {
    this.turn = 2
    for (var element in this.board) {
      this.board[element] = null
    }
  }

  this.is_a_draw = function () {
    for (var element in this.board) {
      if (this.board[element] === null) {
        return false
      }
    }
    return true
  }


  this.is_a_winner = function() {
    if (this.board['one_a'] === this.board['one_b'] && this.board['one_b'] === this.board['one_c'] && this.board['one_a'] != null) {
      if (this.board['one_a'] === "A") {
        this.mario_wins += 1
      } else {
        this.goomba_wins += 1
      }
      return true
    }
    else if (this.board['two_a'] === this.board['two_b'] && this.board['two_b'] === this.board['two_c'] && this.board['two_a'] != null) {
      if (this.board['two_a'] === "A") {
        this.mario_wins += 1
      } else {
        this.goomba_wins += 1
      }
      return true
    } else if (this.board['three_a'] === this.board['three_b'] && this.board['three_b'] === this.board['three_c'] && this.board['three_a'] != null) {
      if (this.board['three_a'] === "A") {
        this.mario_wins += 1
      } else {
        this.goomba_wins += 1
      }
      return true
    } else if (this.board['one_a'] === this.board['two_a'] && this.board['two_a'] === this.board['three_a'] && this.board['one_a'] != null) {
      if (this.board['one_a'] === "A") {
        this.mario_wins += 1
      } else {
        this.goomba_wins += 1
      }
        return true
    } else if (this.board['one_b'] === this.board['two_b'] && this.board['two_b'] === this.board['three_b'] && this.board['one_b'] != null) {
      if (this.board['one_b'] === "A") {
        this.mario_wins += 1
      } else {
        this.goomba_wins += 1
      }
        return true
    } else if (this.board['one_c'] === this.board['two_c'] && this.board['two_c'] === this.board['three_c'] && this.board['three_c'] != null) {
      if (this.board['one_c'] === "A") {
        this.mario_wins += 1
      } else {
        this.goomba_wins += 1
      }
        return true
    } else if (this.board['one_a'] === this.board['two_b'] && this.board['two_b'] === this.board['three_c'] && this.board['one_a'] != null) {
      if (this.board['one_a'] === "A") {
        this.mario_wins += 1
      } else {
        this.goomba_wins += 1
      }
        return true
    } else if (this.board['one_c'] === this.board['two_b'] && this.board['two_b'] === this.board['three_a'] && this.board['two_b'] != null) {
      if (this.board['one_c'] === "A") {
        this.mario_wins += 1
      } else {
        this.goomba_wins += 1
      }
        return true
    } else {
      return false
    }
  }

}


$(document).ready(function() {
 var container = $('#tic-tac-toe')
 // var buttons = container.children().children().children().children().children()
 var buttons = $('.space')
 var reset_button = container.children('.reset')
 var game = new TicTacToe
 game.animate_player()

 buttons.on('click', function(event) {
   event.preventDefault()
   var button = $(this)
   var space_id = $(this).data('space')

  if (button.hasClass('space')) {
     $('#coin')[0].play();
     game.mark(space_id)

     if (game.is_a_winner()) {
      $('#winner')[0].play();
      $mario_score =  $('div#mario span#mario-score')
      $goomba_score =  $('div#bad_guy span#goomba-score')
      $mario_score.text(game.mario_wins)
      $goomba_score.text(game.goomba_wins)
     }
  }

  if (game.is_a_draw()) {
    $('#tie')[0].play();
  }

  var display = container.find('button.' + space_id)
  var image = display.find('img')
  if (game.board[space_id] === "A") {
    image.attr("src","media/mario.png");
  } else if (game.board[space_id] === "B") {
    image.attr("src","media/bad_guy.png");
  }

 })

 reset_button.on('click', function(event) {

   event.preventDefault()
  //  var button = $(this)
   game.reset()
   var image = container.find('img')
   image.attr('src', 'media/empty.png')

 })



})
