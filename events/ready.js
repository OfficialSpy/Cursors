const client = require('../index')
const arrayOfStatus = [
    'Spotify',
    'Roblox',
    'MSFS 2020',
    'Minecraft',
    'STAY - by The Kid Laroi ft. Justin Bieber'
]

client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`)
    setInterval(() => {
        client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], status: 'idle', type: "WATCHING" })
    }, 5000)
}) // code is in my github..