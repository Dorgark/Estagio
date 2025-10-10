const APIURL = "http://localhost:3000"

document.getElementById("productForm").addEventListener("submit", async e => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    await fetch($`{APIURL}/produto`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    e.target.reset();
})