let body = document.querySelector('body');
let toggler = document.querySelector('#toggler'); // ID for the checkbox
let h2 = document.querySelectorAll('h2'); // select all h2 on the page
let p = document.querySelectorAll('p'); // select all paragraphs on the page

function update(element, bgColor, txtColor) {
    element.style.backgroundColor = bgColor;
    element.style.color = txtColor;
}


toggler.addEventListener('change', (e) => {
    if (e.target.checked) {
        p.forEach(paragraph => paragraph.style.color = '#999999');
        h2.forEach(heading => heading.style.color = '#ffdf00');
        update(body, '#1a1a1a', '#ffffff')
    } else {
        p.forEach(paragraph => paragraph.style.color = '#555555');
        h2.forEach(heading => heading.style.color = '#222');
        update(body, '#efefef', '#222222')
    }
    e.preventDefault();
});
