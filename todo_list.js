const searchBox = document.getElementById('searchInput')
const addButton = document.getElementById('btnAddListItem')
const listItem = document.getElementById('listItem')
const list = document.getElementById('list')

const addListItem = () => {
    const innerSearchBoxTest = searchBox.value
    const listItem = document.createElement('li')
    listItem.classList.add('list-item')
    const text = document.createTextNode(innerSearchBoxTest)
    const btnText = document.createTextNode("Remove")
    listItem.appendChild(text)
    list.appendChild(listItem)

}

addButton.addEventListener('click', addListItem)