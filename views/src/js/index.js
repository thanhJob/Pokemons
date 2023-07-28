getData();

async function getData() {
  try {
    const responseAPI = await fetch("http://localhost:3000/pokemons", {
      mode: "no-cors",
    });
    const data = await responseAPI.json();
    const pokemons = data.data;
    console.log(pokemons);
  } catch (error) {
    console.log(`Err: ${error}`);
  }
}
