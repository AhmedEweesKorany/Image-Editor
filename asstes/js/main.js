// filters 
let saturate = document.getElementById('saturate')
let contrast = document.getElementById('contrast')
let brightness = document.getElementById('brightness')
let sepia = document.getElementById('sepia')
let greysacle = document.getElementById('greysacle')
let blur = document.getElementById('blur')
let hue_rotate = document.getElementById('hue-rotate')

// buttons 
let download = document.getElementById('download')
let upload = document.getElementById('upload')
let reset = document.querySelector('span')

// important 
let img = document.getElementById('imgmain')
let imgbox = document.querySelector('.img-cont')
let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let items = document.querySelectorAll("ul li input")

window.onload = function () {
    download.style.display = "none"
    reset.style.display = "none"
    imgbox.style.display = "none"
}

// restvalue function
function resetval() {
    context.filter = "none"
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    greysacle.value = '0';
    blur.value = '0';
    hue_rotate.value = '0';
    context.drawImage(img, 0, 0, canvas.width, canvas.height)
}


// upload fils from your Pc 
upload.onchange = function () {
    resetval()
    download.style.display = "block"
    reset.style.display = "block"
    imgbox.style.display = "block"
    let file = new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload = function () {
        img.src = file.result
    }

    img.onload = function () {
        canvas.width = img.width
        canvas.height = img.height
        context.drawImage(img, 0, 0, canvas.width, canvas.height)
        img.style.display = "none"
    }
}

// applying filters to your canvas
items.forEach(filter => {
    filter.addEventListener('input', function () {
        context.filter = `  saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${greysacle.value})
        blur(${blur.value}px)
        hue-rotate(${hue_rotate.value}deg)`
        context.drawImage(img, 0, 0, canvas.width, canvas.height)
    })
})

// downloading your image after applying filters 
download.onclick = function () {
    download.href = canvas.toDataURL()
}

