const getSales = async () => {
  const res = await fetch(`http://localhost:4000/api/sales`, {
    credentials: "include",
  })
  const resData = await res.json()

  const divRoot = document.querySelector("#root")
  const sales = resData.data

  for (const sale of sales) {
    const div = document.createElement("div")
    div.classList.add("sale")
    div.innerHTML = `
   <h3>${sale._id}</h3>
   <h3>${sale.client.firstname}</h3>
   <h3>${sale.total_amount}</h3>
 `
    divRoot.appendChild(div)
  }
}

getSales()
