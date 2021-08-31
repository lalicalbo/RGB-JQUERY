console.log("Juego RGB JQUERY...")


let correct;
let score = 0;
//Inicializar el juego
game();
// En lazar el click de los circulos a la funcion guess
$(".options").on("click", guess);

function game() {
    correct = Math.floor(Math.random() * 2);
    $(".options").each(function (index) {

        let color = generateColor();
        $(this).css(`background-color`, color);


        if (index === correct) {
            $(".question").text(color);
        }

    });

}

function guess() {
    let index = $(".options").index(this);
    if (index === correct) {
        alert("Well Done!");
        score++;

    } else {
        alert("Ups...Not correct!")
        score = 0;

    }
    $("#score span").text(score);
    game();
}



function generateColor() {
    return `rgb(` + random() + `,` + random() + `,` + random() + `)`;
}

function random() {
    return Math.floor(Math.random() * 255);
}





