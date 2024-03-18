// Your Code Here
function start() {
let fisrtAnswer = window.prompt('do you head right, or left?')
if(fisrtAnswer === 'left') {
    goLeft()
}
else if(fisrtAnswer === 'right') {
      goRight()
    }
    if(fisrtAnswer === 'start over'){
        start()
    }
}

/*Start of Go Left */

function goLeft() {
    let secondAnswer = window.prompt(`you come across a stray cat.
    it scampers off down a small hole, just large enough to crawl through.
    Do you follow it or crawl back?`)

    if(secondAnswer === 'follow'){
        follow()
    }

    else if(secondAnswer === 'crawl back'){
        start()
    }
}

function follow(){
    let thirdAnswer = window.prompt(`you follow the cat to a colony of cats, snuggled in a fort of blankets and
    subsisting off of inexplicably warm soup. They are content with you staying, buy
    you wonder if you should alert the world to this safe haven
    Stay, continue, or spread the word?`)

    if(thirdAnswer === 'stay'){
        window.alert(`You live happily with the cats forthe rest of your days`)
    }
    else if(thirdAnswer === 'spread the word'){
        document.write(`After leaving the cat colony, you are never able to find it again. Without 
        proof, no one believes your story, which passes onto legend nontheless`)
    }
    if(thirdAnswer === 'continue'){
        continueFoward()
    }
    else if(thirdAnswer === 'start over'){
        start()
    }
}

function continueFoward(){
    let fourthAnswer = window.prompt(`You come across a chamber that extands upward to a shinning light above. There
    is a long, winding staircase and a much quicker, but rickety-looking, ladder that
    lead up toward the light. Which do you take?`)

    if(fourthAnswer === 'ladder'){
        document.write(`After ascending a few feet up the ladder, one of its rungs snap and you fall
        comedically through each of the rungs below. Sheepishly, you return home.`)
    }
    else if(fourthAnswer === 'staircase'){
        window.alert(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`)
    }
    if(fourthAnswer === 'start over'){
        start()
    }
}

/*End of Go Left */

/*Start of Go Right */

function goRight(){
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take? past the dragon, or away from the dragon?`)
    if(secondAnswer === 'past the dragon'){
        pastDragon()
    }
    else if(secondAnswer === 'away from the dragon'){
        awayDragon()
    }
    if(secondAnswer === 'start over'){
        start()
    }
}

function pastDragon(){
    let thirdAnswer = window.prompt(`The dragon awakes and sits upright. You only have a moment to respond, to stay or to run `)
    if(thirdAnswer === 'stay'){
        window.alert(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
    }
    else if(thirdAnswer === 'run'){
        document.write(`Quickly, you run back to the cave's entrance. Sheepish, you return home.`)
    }
    if(thirdAnswer === 'start over'){
        start()
    }
}

function awayDragon(){
    let fourthAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?`)
    if(fourthAnswer === 'draw it'){
        document.write(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.`)
    }
    else if(fourthAnswer === 'pick it'){
        window.alert(`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`)
    }
    if(fourthAnswer === 'start over'){
            start()
    }
}

start()