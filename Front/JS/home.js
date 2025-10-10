const APIURL = "http://localhost:3000"

async function carregarProdutos(){
    const res = await fetch(`${APIURL}/produtos`)
    const produtos = await res.json()
    const conteiner = document.getElementById("divProdutos")

    conteiner.innerHTML = produtos.map(p =>`
        <div>
            <p>${p.nome}</p>
            <p>&Preço: R$ ${p.preco.toFixed(2)}</p>
            <p>Categoria: ${p.categoria}</p>
        </div>
    `).join("")
}
carregarProdutos()