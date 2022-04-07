import postgres from 'postgres'


const sql = postgres('postgres://postgres:azertyuiop@localhost:5432/test', {
  port                 : 5432,          // Postgres server port[s]

})



async function recuptout() {
  const users = await sql`
    select * from table_test
  `
  // users = 
  return users
}


async function ajouteruser(nom, age){
  const users = await sql`
  insert into table_test (nom, age)
  values
  (${ nom }, ${ age })
  `
return users
}

async function enleveruser(id){
  const users = await sql `
  delete from table_test
  where id = ${ id }
  
  `
return users

}
