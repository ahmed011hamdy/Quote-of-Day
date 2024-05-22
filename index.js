var Quote_input = document.getElementById('Quote');

var ArrQuote;
ArrQuote = ["“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", "“So many books, so little time.”", "“A room without books is like a body without a soul.”", "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", " “Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .” ", "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”", "“It is better to be hated for what you are than to be loved for what you are not.”", "“Without music, life would be a mistake.”", "“We accept the love we think we deserve.”"];


function AddQuote() {
    Quote_input.innerHTML = ArrQuote[Math.floor(Math.random() * ArrQuote.length)];

}

