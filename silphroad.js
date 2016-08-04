var pokemons = ['Bulbizarre', 'Herbizarre', 'Florizarre', 'Salamèche', 'Reptincel', 'Dracaufeu', 'Carapuce', 'Carabaffe', 'Tortank', 'Chenipan', 'Chrysacier', 'Papilusion', 'Aspicot', 'Coconfort', 'Dardargnan', 'Roucool', 'Roucoups', 'Roucarnage', 'Rattata', 'Rattatac', 'Piafabec', 'Rapasdepic', 'Abo', 'Arbok', 'Pikachu', 'Raichu', 'Sabelette', 'Sablaireau', 'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Mélofée', 'Mélodelfe', 'Goupix', 'Feunard', 'Rondoudou', 'Grodoudou', 'Nosferapti', 'Nosferalto', 'Mystherbe', 'Ortide', 'Rafflésia', 'Paras', 'Parasect', 'Mimitoss', 'Aéromite', 'Taupiqueur', 'Triopikeur', 'Miaouss', 'Persian', 'Psykokwak', 'Akwakwak', 'Férosinge', 'Colossinge', 'Caninos', 'Arcanin', 'Ptitard', 'Têtarte', 'Tartard', 'Abra', 'Kadabra', 'Alakazam', 'Machoc', 'Machopeur', 'Mackogneur', 'Chétiflor', 'Boustiflor', 'Empiflor', 'Tentacool', 'Tentacruel', 'Racaillou', 'Gravalanch', 'Grolem', 'Ponyta', 'Galopa', 'Ramoloss', 'Flagadoss', 'Magnéti', 'Magnéton', 'Canarticho', 'Doduo', 'Dodrio', 'Otaria', 'Lamantine', 'Tadmorv', 'Grotadmorv', 'Kokiyas', 'Crustabri', 'Fantominus', 'Spectrum', 'Ectoplasma', 'Onix', 'Soporifik', 'Hypnomade', 'Krabby', 'Krabboss', 'Voltorbe', 'Électrode', 'Nœunœuf', 'Noadkoko', 'Osselait', 'Ossatueur', 'Kicklee', 'Tygnon', 'Excelangue', 'Smogo', 'Smogogo', 'Rhinocorne', 'Rhinoféros', 'Leveinard', 'Saquedeneu', 'Kangourex', 'Hypotrempe', 'Hypocéan', 'Poissirène', 'Poissoroy', 'Stari', 'Staross', 'M.Mime', 'Insécateur', 'Lippoutou', 'Élektek', 'Magmar', 'Scarabrute', 'Tauros', 'Magicarpe', 'Léviator', 'Lokhlass', 'Métamorph', 'Évoli', 'Aquali', 'Voltali', 'Pyroli', 'Porygon', 'Amonita', 'Amonistar', 'Kabuto', 'Kabutops', 'Ptéra', 'Ronflex', 'Artikodin', 'Électhor', 'Sulfura', 'Minidraco', 'Draco', 'Dracolosse', 'Mewtwo', 'Mew'];
var select = $('<select ></select>');
$.each(pokemons, function(idx, name){
	idx++;
	select.append($('<option value="' + idx + '">' + idx + ' - ' + name + '</option>'));
});
select.insertAfter($('div#moves h2'));
select.change(function(){

	updateAttacks(Number(this.value));
});
function updateAttacks(pokemonNumber)
{
	$.each(document.querySelectorAll('tr.monsWithMove'), function(index,element){
	                $(element).hide();
	});
	$.each(  document.querySelectorAll("img"), function(index, element){
	   if (element.src.indexOf("/" + pokemonNumber + ".png") > 0){
	      $(element).parents('tr.monsWithMove').show();
	   }
	});
};
updateAttacks(1);