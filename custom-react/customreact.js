function customRender(reactElement, main_container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    /* Version 1
     domElement.setAttribute('href', reactElement.props.href)
     domElement.setAttribute('target', reactElement.props.target)
     */

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
}
main_container.appendChild(domElement)

const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click Me to Visit Google"
}
const main_container = document.querySelector('#root')

customRender(reactElement, main_container)