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
  }
}



$(document).ready(function() {
 var container = $('#tic-tac-toe')
 var buttons = container.children().children().children().children().children()
 // var display = container.children().children('.display')
 console.log(buttons)
 // var note_id = $(this).data('note') + 'Audio'
 //  var note = $('#' + note_id)[0]

 var game = new TicTacToe
 buttons.on('click', function(event) {
   event.preventDefault()
   var button = $(this)
   var space_id = $(this).data('space')
  //  console.log("space id : ",space_id)

   if (button.hasClass('space')) {
     console.log('you tried to push' , button)
     game.mark(space_id)
     var display = container.children().children().children().children().children('button.' + space_id)
     display.text(game.board[space_id])
     console.log(game.board)
     console.log(game.turn)
   }

 })

})
