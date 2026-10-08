function ItemCompra() {
  
  const compras = [
    {id: 1, produto: "Arroz", quantidade: 2},
    {id: 2, produto: "Feijão", quantidade: 1},
    {id: 3, produto: "Macarrão", quantidade: 3},
    {id: 4, produto: "Carne", quantidade: 1},
    {id: 5, produto: "Frango", quantidade: 2}
  ]

  return (
    <>
        {compras.map((item) => (
        <div key={item.id}>
          <h2>Produto: {item.produto}</h2>
          <p>Quantidade: {item.quantidade}</p>
        </div>
      ))}
    </>
  )
}

export default ItemCompra
