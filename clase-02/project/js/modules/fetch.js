export async function getData() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/GIN.geo.json')

    const data = await response.json()

    console.log(data)
  } catch(error) {
    console.error(error)
  }
}