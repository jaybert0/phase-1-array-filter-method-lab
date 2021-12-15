// Code your solution here
function findMatching (drivers, string) {
    let answers = drivers.filter(el => el.toLowerCase() === string.toLowerCase())
    return answers
}

function fuzzyMatch (drivers, string) {
    let starts = drivers.filter(startname => startname.startsWith(string) === true)
    return starts
}

function matchName (drivers, string) {
    let names = drivers.filter(el => el.name === string)
    return names
}