// You can create a JavaScript file to handle chess logic and piece movement.

// Example: Move a piece from one square to another.
document.getElementById('piece_a2').addEventListener('click', function () {
    // Get the current position of the piece
    let piece = this.innerHTML;

    // Clear the current square
    this.innerHTML = '';

    // Move the piece to another square (e.g., a4)
    document.getElementById('piece_a4').innerHTML = piece;
});
