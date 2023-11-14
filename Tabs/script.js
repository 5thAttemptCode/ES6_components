let tabButtons = document.querySelectorAll(".tab-button")
let contents = document.querySelectorAll(".content")

function handleClick(event) {
  const { id } = event.target.dataset
  if (!id) return

  toggleActiveClass(tabButtons, event.target)
  toggleActiveClass(contents, document.getElementById(id))
}

function toggleActiveClass(nodes, activeNode) {
  nodes.forEach(node => {
    node.classList.remove("active")
  })
  activeNode.classList.add("active")
}

tabButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})