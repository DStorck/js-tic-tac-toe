function TicTacToe() {
  this.turn = 1
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


  this.mark = function(space) {
    if ( this.turn % 2 === 0 ) {
      var mark = "A"
    } else {
      var mark = "B"
    }
    if (this.board[space] === null) {
      this.board[space] = mark
    }
    this.turn += 1
    console.log(this.is_a_winner())
    if (this.is_a_winner()) {
      console.log('yahoooo')
    }
  }

  this.reset = function() {
    this.turn = 1
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
      return true
    }
    else if (this.board['two_a'] === this.board['two_b'] && this.board['two_b'] === this.board['two_c'] && this.board['two_a'] != null) {
      return true
    } else if (this.board['three_a'] === this.board['three_b'] && this.board['three_b'] === this.board['three_c'] && this.board['three_a'] != null) {
      return true
    } else if (this.board['one_a'] === this.board['two_a'] && this.board['two_a'] === this.board['three_a'] && this.board['one_a'] != null) {
        return true
    } else if (this.board['one_b'] === this.board['two_b'] && this.board['two_b'] === this.board['three_b'] && this.board['one_b'] != null) {
        return true
    } else if (this.board['one_c'] === this.board['two_c'] && this.board['two_c'] === this.board['three_c'] && this.board['three_c'] != null) {
        return true
    } else if (this.board['one_a'] === this.board['two_b'] && this.board['two_b'] === this.board['three_c'] && this.board['one_a'] != null) {
        return true
    } else if (this.board['one_c'] === this.board['two_b'] && this.board['two_b'] === this.board['three_a'] && this.board['two_b'] != null) {
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

 buttons.on('click', function(event) {
   event.preventDefault()
   var button = $(this)
   var space_id = $(this).data('space')

  //  console.log("space id : ",space_id)
  console.log('game board')
  console.log(game.board)

   if (button.hasClass('space')) {
     console.log('you tried to push' , button)
     $('#coin')[0].play();
     game.mark(space_id)
     console.log(game.is_a_winner())
     console.log(game.is_a_draw())
     if (game.is_a_winner()) {
      $('#winner')[0].play();
    }

    if (game.is_a_draw()) {
      $('#tie')[0].play();
    }

     var display = container.find('button.' + space_id)
     var image = display.find('img')
     console.log(image)
    //  var display = container.children().children().children().children().children('button.' + space_id)
    image.attr("src","media/mario.png");
    //  display.text(game.board[space_id])
   }
 })

 reset_button.on('click', function(event) {

   event.preventDefault()
  //  var button = $(this)
   game.reset()
   $(".space").text("")

 })

})
