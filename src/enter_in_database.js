const {pool_new} = require("./database_imports");
const insertSensorNew = async (product, farm, website, energy, expire, id) => {
    try {
        pool_new.connect()
        await pool_new.query('BEGIN')
        await pool_new.query(
            "INSERT INTO products (product,farm,website,energy,expire,id) VALUES ($1, $2, $3, $4, $5,$6)",
            [product, farm, website, energy, expire, id]);
        await pool_new.query('COMMIT')
        console.log("Transaction completed successfully. Adding:")
        console.log(product, farm, website, energy, expire,id)
    } catch (e) {
        await pool_new.query('ROLLBACK')
        console.log('Transaction failed to complete.', e)
    }
}

insertSensorNew("Bien Hoa,Dong Nai, Vietnam",
    "Tan Trieu Grapefruit",
    "http://tantrieugrapefruit.com/guava",
    "28 kcal/100g",
    "before 05/08/2020",
    8910422001000011)