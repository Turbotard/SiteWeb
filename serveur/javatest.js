import postgres from 'postgres'


const sql = postgres('postgres://postgres:azertyuiop@localhost:5432/test', {
  port                 : 5432,          // Postgres server port[s]

})



async function recuptout() {
  const users = await sql`
    select * from table_test
  `
  // users = Result [{ name: "Murray", age: 68 }]
  return users
}

const resultat = await recuptout()
console.log(resultat)