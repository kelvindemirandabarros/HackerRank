function processData(input) {
    //Enter your code here
    const treatedInput = input.split('\n')
        .map( str => str.replace(/\s*$/, '') );
    
    const test_cases = parseInt( treatedInput[0] );

    for ( let case_number = 1; case_number <= test_cases; case_number++ ) {
        let evens = '';
        let odds = '';
        
        for ( let letter = 0; letter < treatedInput[ case_number ].length; letter++ ) {
            if ( letter % 2 === 0 ) {
                evens += treatedInput[ case_number ][ letter ];
            } else {
                odds += treatedInput[ case_number ][ letter ];
            }
        }

        console.log( evens + ' ' + odds );
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData( _input );
});
