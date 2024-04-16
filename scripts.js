
let livros = JSON.parse(localStorage.getItem('livros')) || []

function salvarLivros() {
    localStorage.setItem('livros', JSON.stringify(livros))
}

function addBook() {
    const titulo = document.querySelector('#titulo')
    const autor = document.querySelector('#autor')
    const genero = document.querySelector('#genero')
    const ano = document.querySelector('#ano')
    const novoLivro = {
        titulo: titulo.value,
        autor: autor.value,
        genero: genero.value,
        ano: Number(ano.value)
    }
    livros.push(novoLivro)
    salvarLivros()
    titulo.value = ''
    autor.value = ''
    genero.value = ''
    ano.value = ''
    listarLivros(livros)
}

function listarLivros(catalogoArray) {
    const catalogo = document.querySelector('.catalogo')
    catalogo.innerHTML = ''
    for (const livro of catalogoArray) {
        const div = document.createElement('div')
        div.classList.add('livro')
        div.innerHTML = `<h3>${livro.titulo}</h3>
        <p>Autor: ${livro.autor}</p>
        <p>Genero: ${livro.genero}</p>
        <p>Ano: ${livro.ano}</p>`
        catalogo.append(div)
    }
}

function searchBook() {
    const termo = document.querySelector('#termo-busca').value
    const resultados = livros.filter((book) => {
        return book.autor === termo || book.titulo === termo || book.genero === termo
    })
    listarLivros(resultados)
}


listarLivros(livros)
