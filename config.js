

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1090185099116564551", ""], 
  mongodbUri : "mongodb+srv://zonzin736:zin736@diso.wa1fx.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Music /perfix", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "INZEWORLD.COM (DE)",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port:  3128,
      secure: false
    }
  ]
}
