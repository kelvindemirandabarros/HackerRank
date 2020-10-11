function processData(input) {
    //Enter your code here
    const phoneBook = {};

    const inputs = input.split( `\n` );

    const number_of_entries = parseInt( inputs[0] );

    for ( let entry = 1; entry <= number_of_entries; entry++ ) {
        const name = inputs[ entry ].slice( 0, inputs[ entry ].indexOf( ' ' ) );
        const phone = inputs[ entry ].slice( inputs[ entry ].indexOf( ' ' ) + 1 );
        phoneBook[ name ] = phone;
    }

    for ( let search = number_of_entries + 1; search < inputs.length; search++ ) {
        if ( phoneBook[ inputs[ search ] ] ) {
            console.log( `${ inputs[ search ] }=${ phoneBook[ inputs[ search ] ] }` );
        } else {
            console.log( 'Not found' );
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding( "ascii" );
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
