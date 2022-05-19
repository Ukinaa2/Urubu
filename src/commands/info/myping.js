const Command = require('../../structures/Command')

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: 'myping',
			description: 'Exibe o seu ping'
		})
	}

	run = (interaction) => {
		interaction.reply(`O seu ping é ${interaction.user.client.ws.ping} ms.`)
	}
}
