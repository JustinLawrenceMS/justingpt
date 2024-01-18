var OpenAI = require("openai");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	const openai = new OpenAI({ apiKey: 'TODO: pull key from env' });

	async function main() {
	  const completion = await openai.chat.completions.create({
	    messages: [{ role: "system", content: "You are a helpful assistant" }],
	    model: "gpt-3.5-turbo",
	  });
		console.log(completion.choices[0].message.content);
		return completion.choices[0].message.content;
	}
	(async ()=>{
		res.gpt = await main();
		console.log(res.gpt);
		res.render('assistant', { message: res.gpt });	
	})();	    
});

module.exports = router;
