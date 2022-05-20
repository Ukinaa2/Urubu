const Command = require('../../structures/Command')

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			description: 'Manda uma mensagem no privado descrevendo detalhadamente cada comando'
		})
	}

	run = (interaction) => {
		interaction.reply({
			content: 'Help enviado no privado',
			ephemeral: true
		})
		
		interaction.user.send('Comando help não está pronto')
	}
}
