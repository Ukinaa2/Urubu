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
		interaction.user.send(
			`Para utilizar cada comando, basta digitar / e o nome do comando
\`\`\`Lista de comandos:
help: Manda a mensagem que você esta lendo agora
ping: Exibe o ping do bot
myping: Exibe o seu ping\`\`\``
		)
	}
}
