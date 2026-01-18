  // const sessiontoken = "";
  // const bearer = "";


document.querySelector("#kaydetBtn").addEventListener("click", () => {
  const sessionToken = document.getElementById("sessionToken").value.trim();
  const bearer = document.getElementById("bearer").value.trim();
  const islandId = document.getElementById("islandId").value.trim();
  const playerId = document.getElementById("playerId").value.trim();


  if (!sessionToken || !bearer || !islandId || !playerId) {
    log("Lütfen tüm alanları doldur!");
    return;
  }


  localStorage.setItem("sessionToken", sessionToken);
  localStorage.setItem("bearer", bearer);
  localStorage.setItem("islandId", islandId);
  localStorage.setItem("playerId", playerId);

  console.log("Bilgiler kaydedildi:", { sessionToken, bearer, islandId, playerId });
  alert("Bilgiler kaydedildi ✅");
});


window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sessionToken").value = localStorage.getItem("sessionToken") || "";
  document.getElementById("bearer").value = localStorage.getItem("bearer") || "";
  document.getElementById("islandId").value = localStorage.getItem("islandId") || "";
  document.getElementById("playerId").value = localStorage.getItem("playerId") || "";
});


function getHeaders() {
  const sessionToken = localStorage.getItem("sessionToken");
  const bearer = localStorage.getItem("bearer");
  const playerId = localStorage.getItem("playerId");

  return {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "Content-Type": "application/json",
    "Origin": "https://play.paradisetycoon.com",
    "Referer": "https://play.paradisetycoon.com/",
    "Pt-Platform": "WebGLPlayer",
    "Pt-Scene": "Playersland",
    "Pt-Session-Token": sessionToken,
    "Pt-Signature": bearer,
    "Pt-Userid": playerId,
    "Pt-Version": "1.2.0",
    "Sec-Ch-Ua": "\"Google Chrome\";v=\"141\", \"Not;A Brand\";v=\"8\", \"Chromium\";v=\"141\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "\"Windows\"",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    "X-Api-Key": "weoifjwoiefni23o-n5435g-32fnixw-123445"
  };
}

function getislandId(){
  const islandid = localStorage.getItem("islandId");
    return islandid;
}

function getplayerId(){
  const playerid = localStorage.getItem("playerId");
    return playerid;
}

  
  const headerss = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "Content-Type": "application/json",
    "Origin": "https://play.paradisetycoon.com",
    "Referer": "https://play.paradisetycoon.com/",
    "Pt-Platform": "WebGLPlayer",
    "Pt-Scene": "Playersland",
    "Pt-Session-Token": sessionToken,
    "Pt-Signature": bearer,
    "Pt-Userid": playerId,
    "Pt-Version": "1.0.12",
    "Sec-Ch-Ua": "\"Google Chrome\";v=\"141\", \"Not;A Brand\";v=\"8\", \"Chromium\";v=\"141\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "\"Windows\"",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    "X-Api-Key": "weoifjwoiefni23o-n5435g-32fnixw-123445"
  }

    const idMap = {
  "af45e216-c69d-411b-b40b-dc27414e9bc2": "ROCK",
  "b7107810-46ff-496c-b58c-4133efcabc4d": "ROCK",
  "a9a633eb-0465-48b4-9643-0504783598b0": "CRUDE IRONWOOD LOG",
  "46eaf033-1cdd-4e32-97f9-3fd9ae083741": "CRUDE ROSEWOOD LOG",
  "e18ddbef-2da8-44e2-8925-0ae6d8647233": "WORM BAIT",
  "a9ae38ea-d427-428b-90f8-d4ee85b7b7ae": "BRANCH",
  "b2c19444-1efc-4a5a-ab64-2e927df2e582": "PALM LEAF",
  "412e3820-be80-499d-afb7-07df2c03f672": "ROPE",
  "c62b754c-f3bc-440d-860f-a2ca33b0e59c": "COCONUT",
  "3ac3d04d-d14b-496f-9069-082d4ea6bc07": "COPPER INGOT",
  "db6aa656-0584-4498-8425-2638c5b42bc4": "BAMBOO",
  "08d6dffc-1075-48f1-843c-26d1c1e71de2": "LIANA",
  "132f704d-8c90-495b-a264-65ea31072ef9": "IRONWOOD LOG",
  "212880c1-1fcd-4fbd-b391-b733c1a00b19": "TIN ORE",
  "60d09f0f-3d9d-4b8e-91a6-853e9cadc9dc": "COLORFUL CORAL",
  "7a443372-8921-4bfd-b073-793a27083478": "CRUDE PLANKS",
  "8824170c-171c-484c-83fa-f6afccf23c76": "COPPER ORE",
  "26e0aeb4-4895-4bb9-a20c-c9c0e960b3c6": "BLUEBELL",
  "a12cd6d8-ffa3-4b88-83c1-58ee93d99671": "BUTTON MUSHROOM",
  "d9fe4de1-b5a2-4f0b-b2b4-2a6a2639a87e": "SCALLOP SHELL",
  "dc86eafe-8cd6-4d58-8ac3-6620028a0fbf": "FINE IRONWOOD LOG",
  "549ea3bb-6f28-48da-b182-6e57b4adc6c9": "IRON ORE",
  "5641952a-7d09-4b3f-ab41-5f041bcabfb2": "MOSS PATCH",
  "858a38da-9871-4eaf-98d0-b158c5563f1f": "RESIN",
  "44f8c931-6a1e-4bd3-8504-29f6f3bba571": "SCARLET ROSE",
  "29007e90-c065-4e42-b235-d6a1a42f7e38": "TIN ORE",
  "0cca5819-a6b8-495e-81cc-e3e2cd307958": "TYCOONS LILY",
  "2e3ec889-164c-4878-be7c-f108a5eb72e5": "YELLOW DAISY",
  "885ce8c2-bfb8-4bff-a8af-7e0644aadb6f": "WOOL",
  "f6f0aa42-44be-4f13-9630-55989a0b758b": "THORNVINE",
  "20944416-26f8-4413-be05-6d41233e8af2": "FINE ROSEWOOD LOG",
  "91b9d3d2-76c6-49d1-893d-9b5052f8448f": "CURLED SEASHELL"


}






async function ekimyap() {

for(let i = 1; i < 13; i++) {
await fetch(`https://beta-api.paradisetycoon.com/economy/spawnPointPlant?spawnPointId=SpawnPointFarm${i}&islandId=${getislandId()}&inventoryItemId=d397aea8-a5c7-450b-81c0-a728376a1871`, {
  method: "GET",
  headers: getHeaders(),
  mode: "cors",
  credentials: "omit"
})
.then(res => res.json())
.then(data => {
  if(data.status.error_code == 0){
    log(i + ". Alan Ekildi");
  }else{
    log("Hata " + i + ". Alan Ekilemedi: " + data.status.error_code);
  }})
.catch(err => console.error(err));
}
}


async function harvestle() {
  for(let i = 1; i < 13; i++) {
await fetch(`https://beta-api.paradisetycoon.com/economy/collectSpawnpoint?spawnPointId=SpawnPointFarm${i}&islandId=${getislandId()}&toolLuck=0&toolId=6d2f0a49-00ce-4f6f-b323-241608f6b42d&isNFTTool=False&scene=PlayerIsland`, {
  method: "GET",
  headers: getHeaders(),
  mode: "cors",
  credentials: "omit"
})
.then(res => res.json())
.then(data => {
  if(data.status.error_code == 0){
    log(i +". Bolge harvestlendi")
  }else{
    log(i + ". Bolgede hata var: " + data.status.error_message)
  }})
.catch(err => console.error(err));
}
}


async function koyunkes() {
  await fetch(`https://beta-api.paradisetycoon.com/economy/collectSpawnpoint?spawnPointId=SpawnPointSheep1&islandId=${getislandId()}&toolLuck=0&toolId=1a950ed1-d357-4b96-aeee-0e4b836eee2b&isNFTTool=False&scene=PlayerIsland`, {
  method: "GET",
  headers: getHeaders(),
  mode: "cors",
  credentials: "omit"
})
.then(res => res.json())
.then(data => {
  if(data.status.error_code == 0){
    log("Koyun Basariyla Kesildi.")
  }})
.catch(err => console.error(err));
}



async function taskes(){
for(let i = 1; i < 8; i++) {
await fetch(`https://beta-api.paradisetycoon.com/economy/collectSpawnpoint?spawnPointId=CommonRock${i}&islandId=${getislandId()}&toolLuck=0&toolId=fe346631-262d-4b41-b311-adb407fb2a7c&isNFTTool=False&scene=PlayerIsland`, {
  method: "GET",
  headers: getHeaders(),
  mode: "cors",
  credentials: "omit"
})
.then(res => res.json())
.then(data => {
  if(data.status.error_code == 0){
    log(`${i}. Tas Basariyla Kirildi.`)
  }
else{
  log(data);
}})
.catch(err => console.error(err));
}
}


async function yerdentopla() {
for(let i = 1; i < 12; i++) {
  await fetch(`https://beta-api.paradisetycoon.com/economy/collectSpawnpoint?spawnPointId=CommonForage${i}&islandId=${getislandId()}&toolLuck=0&toolId=&isNFTTool=False&scene=PlayerIsland`, {
  method: "GET",
  headers: getHeaders(),
  mode: "cors",
  credentials: "omit"
})
.then(res => res.json())
.then(data => {
  if(data.status.error_code == 0){
    log(`${data.items} ${i}. İtem yerden toplandı.`)
  }else{
  console.log(data);
}})
.catch(err => console.error(err));
}
}

async function agackir() {

for(let i = 1; i < 7; i++) {
  await fetch(`https://beta-api.paradisetycoon.com/economy/collectSpawnpoint?spawnPointId=CommonWood${i}&islandId=${getislandId()}&toolLuck=0.2&toolId=8695a8ca-4dc3-4826-b99f-cba00a2fd0a3&isNFTTool=False&scene=PlayerIsland`, {
  method: "GET",
  headers: getHeaders(),
  mode: "cors",
  credentials: "omit"
})
.then(res => res.json())
.then(data => {
  if(data.status.error_code == 0){
    log(`${i}. Agac Basariyla Kesildi.`)
  }else{
  console.log(data);
}})
.catch(err => console.error(err));
}}



async function envanter() {
const request = await fetch(
  `https://beta-api.paradisetycoon.com/inventory/fetch?playerId=${getplayerId()}&inventoryTypes=default,temporary,ships`,
  {
    method: "GET",
    headers: getHeaders(),
    mode: "cors",
    credentials: "omit"
  }
)

const datalar = await request.json();

for (const inv of datalar.data.inventories) {
  for (const item of inv.inventory) {
    const itemName = idMap[item.id] || item.id;
    log(`${item.amount} Adet ${itemName}`);
  }
}}


async function baliktutbes() {

for(let i = 1; i < 6; i++) {
  await fetch(`https://beta-api.paradisetycoon.com/fishing/finish?playerId=${getplayerId()}&activityId=848d7e4c-8842-46c3-8f35-139aa3044937`, {
  method: "GET",
  headers: getHeaders(),
  mode: "cors",
  credentials: "omit"
})
.then(res => res.json())
.then(data => {
  if(data.status.error_code == 0){
    log(`(COMMON) ${i}. Balık tutuldu.`)
  }else{
  log(data);
}})
.catch(err => console.error(err));
}}

async function baliktutbesrare() {

for(let i = 1; i < 6; i++) {
  await fetch(`https://beta-api.paradisetycoon.com/fishing/finish?playerId=${getplayerId()}&activityId=606d0e32-33bb-40fb-a593-5ae67ddfefb2`, {
  method: "GET",
  headers: getHeaders(),
  mode: "cors",
  credentials: "omit"
})
.then(res => res.json())
.then(data => {
  if(data.status.error_code == 0){
    log(`(RARE) ${i}. Balık tutuldu.`)
  }else{
  log(data);
}})
.catch(err => console.error(err));
}}
// fada95b3-419f-4d51-9e60-ce4d562f5eac
// 606d0e32-33bb-40fb-a593-5ae67ddfefb2 rare balıklar

async function icecekUret() {
  for(let i = 1; i <= document.querySelector("#icecekSayisi").value; i++) {
  await fetch(`https://beta-api.paradisetycoon.com/crafting/transaction?playerId=${getplayerId()}&itemId=32d6159a-42a9-46b1-8fa1-60a28f169d4f`, {
  method: "GET",
  headers: getHeaders(),
  mode: "cors",
  credentials: "omit"
})
.then(res => res.json())
.then(data => {
  if(data.status.error_code == 0){
    log(`${i}. İçecek Üretildi.`)
  }else{
  log(data);
}})
.catch(err => console.error(err));
}
}

async function plankUret() {
  for(let i = 1; i <= document.querySelector("#plankSayisi").value; i++) {
  await fetch(`https://beta-api.paradisetycoon.com/crafting/transaction?playerId=${getplayerId()}&itemId=03e3dfd8-caa6-4f96-b637-77ca6bee8953`, {
  method: "GET",
  headers: getHeaders(),
  mode: "cors",
  credentials: "omit"
})
.then(res => res.json())
.then(data => {
  if(data.status.error_code == 0){
    log(`${i}. Plank Üretildi.`)
  }else{
  log(data);
}})
.catch(err => console.error(err));
}
}

async function oreUret() {
  for(let i = 1; i <= document.querySelector("#oreSayisi").value; i++) {
  await fetch(`https://beta-api.paradisetycoon.com/crafting/transaction?playerId=${getplayerId()}&itemId=b9e21f2a-f8c5-47a4-8eaa-24e871620163`, {
  method: "GET",
  headers: getHeaders(),
  mode: "cors",
  credentials: "omit"
})
.then(res => res.json())
.then(data => {
  if(data.status.error_code == 0){
    log(`${i}. Copper Ingot Üretildi.`)
  }else{
  log(data);
}})
.catch(err => console.error(err));
}
}



function deneme(){
log(document.querySelector("#icecekSayisi").value)
}

document.querySelector("#ingotBtn").addEventListener("click", oreUret);
document.querySelector("#plankBtn").addEventListener("click", plankUret);
document.querySelector("#icecekBtn").addEventListener("click", icecekUret);
document.querySelector("#envanterBtn").addEventListener("click", envanter);
document.querySelector("#toplaBtn").addEventListener("click", yerdentopla);
document.querySelector("#agacBtn").addEventListener("click", agackir);
document.querySelector("#tasBtn").addEventListener("click", taskes);
document.querySelector("#koyunBtn").addEventListener("click", koyunkes);
document.querySelector("#harvestBtn").addEventListener("click", harvestle);
document.querySelector("#ekimBtn").addEventListener("click", ekimyap);
document.querySelector("#fishBtn").addEventListener("click", baliktutbes);
document.querySelector("#fishBtnrare").addEventListener("click", baliktutbesrare);



// fetch("https://beta-api.paradisetycoon.com/economy/spawnPointPlant?spawnPointId=SpawnPointFarm9&islandId=e89fddc2-0521-4f97-bdc0-1bc8461e742b&inventoryItemId=d397aea8-a5c7-450b-81c0-a728376a1871", {
//   method: "GET",
//   headers: headerss,
//   mode: "cors",
//   credentials: "omit"
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err));
// domates ek : https://beta-api.paradisetycoon.com/economy/spawnPointPlant?spawnPointId=SpawnPointFarm9&islandId=e89fddc2-0521-4f97-bdc0-1bc8461e742b&inventoryItemId=d397aea8-a5c7-450b-81c0-a728376a1871
// grass temizle : https://beta-api.paradisetycoon.com/economy/spawnPointCultivate?spawnPointId=SpawnPointFarm8&islandId=e89fddc2-0521-4f97-bdc0-1bc8461e742b
