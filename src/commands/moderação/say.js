const Command = require('../../structures/Command')

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			description: 'Manda uma mensagem no canal escolhido',
			options: [{
				name: 'canal',
				description: 'Canal onde vai ser enviada a mensagem',
				type: 'CHANNEL',
				required: true
			},
			{
				name: 'conteúdo',
				description: 'Conteudo da mensagem',
				type: 'STRING',
				required: true
			}]
		})
	}

	run = (interaction) => {
		const channel = interaction.options.getChannel('canal')
		if (!['GUILD_TEXT', 'GUILD_ANNOUNCEMENT'].includes(channel.type)) {
			return interaction.reply({
				content: `Informe um canal de texto ou de anúncios`,
				ephemeral: true
			})
		}

		const texto = interaction.options.getString('conteúdo')
		channel.send(texto)
			.then(() => interaction.reply({
				content: 'Mensagem enviada',
				ephemeral: true
			}))
			.catch(() => interaction.reply({
				content: 'Falha ao enviar a mensagem',
				ephemeral: true
			}))
	}
}
