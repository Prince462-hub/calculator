let string = ""
let buttons = document.querySelectorAll('button')
let arr = Array.from(buttons)
arr.forEach((ar) => {
    ar.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            let input = document.getElementById('inp')
            input.value = string
        }    
        else if (e.target.innerHTML == 'AC') {
            string = ""
            let input = document.getElementById('inp')
            input.value = string
        }
        else if (e.target.innerHTML == '⌫') {
            string = string.slice(0, string.length - 1)
            let input = document.getElementById('inp')
            input.value = string
        }
        else {
            string = string + e.target.innerHTML
            let input = document.getElementById('inp')
            input.value = string
        }
    })
})
// console.log(arr)
