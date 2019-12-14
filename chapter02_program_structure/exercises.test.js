// triangle
test('triangle', () => {
var result = `#
##
###
####
#####
######
#######
`;
let line = "#";
let triangle = "";
do {
    triangle = triangle + line + "\n";
    line = line + "#";
}  while(line.length < 8);

    expect(triangle).toBe(result);
});


test("FizzBuzz", () => {
    let fizzBuzz = function(n){
        let result = "";
        if (n % 3 == 0)
            result += "Fizz";
        if (n % 5 === 0)
            result += "Buzz";
        return result;
    }
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(10)).toBe("Buzz");

});

test('ChessBoard', () => {
    let expected = ` # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
`;
    let chessBoard = function(n) {
        let h = n/2;
        let line1 = "", line2 = '', result = '';
        for(let i = 0; i<h; i++){
            line1 += " #";
            line2 += "# ";
        }

        for(let i = 0; i<h; i++){
            result += line1 + "\n";
            result += line2 + "\n";
        }
        return result ;
    };
    expect(chessBoard(8)).toBe(expected);
});

