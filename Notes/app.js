document.addEventListener('DOMContentLoaded', App)

function App() {
    let Not = new Notes();
    document.querySelector('.addNoteBtn').addEventListener('click', () => Not.createNote(), false)
}