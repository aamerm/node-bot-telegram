const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('246362922:AAF8TivG6QeDaxghSHYT21YxpT7WtKwGdkc')
class GreetingController extends TelegramBaseController {
	/**
	 * @param {Scope} $
	 */
	greetingHandler($) {
		$.sendMessage('Hey, how are you?')
	}
	get routes() {
		return {
			'hey': 'greetingHandler',
			'hi': 'greetingHandler',
			'hello': 'greetingHandler',
		}
	}
}
tg.router
	.when(['hey', 'hi', 'hello'], new GreetingController())