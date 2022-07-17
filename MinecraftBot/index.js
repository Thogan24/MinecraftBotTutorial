const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'localhost',
    port: 54869,
    username: 'DrBath'
})

function lookAtPlayer() {
    const FilterPlayer = (entity) => entity.type === 'player'
    const playerEntity = bot.nearestEntity(FilterPlayer)

    if(!playerEntity) return

    const position = playerEntity.position.offset(0, playerEntity.height, 0)
    bot.lookAt(position)
}

bot.on('spawn', () => {
    bot.chat('j')
})

bot.on('physicTick', lookAtPlayer)