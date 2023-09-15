// change button icons on the adopt page

newHTML = `
<div class="inner"><span class="corners-top"><span></span></span>
<h2>Adoptable pets</h2>

<p>Adopt some pets to add to your collection! You can show your adopted pets off on your webpage or post them to forums. Or just
keep them in your Chicken Smoothie account to watch them grow. Pick a species below to get started!</p>

<ul class="specieslist">
<li class="iewibl"><a href="dogs"><img src="https://i.imgur.com/hn9bm5i.png" alt="dogs"></a></li>
	<li class="iewibl"><a href="horses"><img src="https://i.imgur.com/dSOxvbT.png" alt="horses"></a></li>
	<li class="iewibl"><a href="cats"><img src="https://i.imgur.com/LMoNHwT.png" alt="cats"></a></li>
	<li class="iewibl"><a href="butterfly wolves"><img src="https://i.imgur.com/933M58R.png" alt="butterfly wolves"></a></li>
	<li class="iewibl"><a href="rodents"><img src="https://i.imgur.com/OpZAhvy.png" alt="rodents"></a></li>
	<li class="iewibl"><a href="second-generation pets"><img src="https://i.imgur.com/L9UVkiP.png" alt="second-generation pets"></a></li>
	<li class="iewibl"><a href="hatchery"><img src="https://i.imgur.com/TonyklK.png" alt="hatchery"></a></li>
	<li class="iewibl"><a href="other"><img src="https://i.imgur.com/Fwi7Jgk.png" alt="other"></a></li>
	<li class="iewibl"><a href="special event"><img src="https://i.imgur.com/FJt8nuh.png" alt="special event"></a></li>
    </ul><span class="corners-bottom"><span></span></span></div>
    `



document.getElementById("csbody").innerHTML = newHTML;