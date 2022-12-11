(async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response)
    const result = await response.json()
    console.log(result)

    console.log(result[0].address.city)
    console.log(result[0].address.geo.lat)

})()
