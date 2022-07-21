kaboom (
    {
    global: true,
    fullscreen: true,
    scale :1,
    debug: true,
    clearColor:[0.181,0.221,0.230,1]
    }
)

loadRoot("https://dl.dropboxusercontent.com/s/")
loadSprite("codi1", "gcwyy9kqnabmjgx/codi1.png")
loadSprite("codi2", "l5ff9n6wodvkgme/codi2.png")
loadSprite("madera1", "z0r2y5g33iaavm9/madera1.png")
loadSprite("madera2", "fwhydiz3hj8yic1/madera2.png")
loadSprite("pared", "9s083dlz08rc8ki/pared.png")
loadSprite("piedra", "tgz3j8w28s77aa6/piedra.png")
loadSprite("piso", "4gudomozsnjmuzu/piso.png")
loadSprite("coin", "ic0ehhkeu726rr3/coin.png")

scene ("juego", () => {
    layers(["obj", "ui"], "obj")

    const mapa = [
        "x        s     x",
        "x  ---         x",
        "x              x",
        "x    ----   -  x",
        "x              x",
        "x  -    -   -  x",
        "x  --      --  x",
        "x              x",
        "================"
    ]

    const confg = {
        height: 60,
        width: 30,
        "=": [sprite("piso"), "piso", scale(2,1), solid()],
        "-": [sprite("madera1"), "madera",solid()],
        "s": [sprite("coin"), "premio",solid()],
        "x": [sprite("pared"), "pared", scale(1.5,3),solid()]
    }

    const nivel = addLevel(mapa, confg)
    const speed = 300

    const jugador = add([
        sprite("codi2"),
        pos(270,350),
        scale(2),
        body(),
        "player",
    ])

    onkeydown("right", () => {
        jugador.move(speed,0)
    })

})



function start(){
    go("juego")
}


start("juego")


