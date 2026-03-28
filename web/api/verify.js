
export default async function handler(req, res) {

const user = req.query.user;

if(!user){
 res.status(400).send("Falta user id");
 return;
}

// CAMBIAR POR URL DE TU BOT (EKNODES)
const BOT_API = "http://de1.eknodes.es:25711/verify/" + user;

try{

const r = await fetch(BOT_API);
const text = await r.text();

res.status(200).send(text);

}catch(e){

res.status(500).send("Error conectando con el bot");

}

}
