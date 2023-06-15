
async function fetchdata (){
    ret = await(await fetch('http://localhost:8888/8910422001000011')).json();
    console.log(ret)
}
fetchdata();