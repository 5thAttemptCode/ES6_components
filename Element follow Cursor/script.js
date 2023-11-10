const cursor = document.getElementById('cursor')

document.body.onpointermove = event => {
    const { clientX, clientY } = event

    cursor.style.left = `${clientX}px`
    cursor.style.top = `${clientY}px`
    
    cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill: 'forwards'})
}