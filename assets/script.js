function converter() {
	let inputUser = inputUsuario.value;

	let escolhaBase = opcaoEscolhida.value;

	var baseDecimal = 0;

	var baseBinaria = 0;

	var baseOctal = 0;

	var baseHexa = 0;

	var erro = `<span class="erro">ERRO! Numero inválido</span>`;

	if (escolhaBase === "baseDecimal") {
		if (inputUser < 0) {
			mensagemBaseSelecionada.innerHTML = "Decimal";
			divMensagem.innerHTML = erro;
		} else {
			mensagemBaseSelecionada.innerHTML = "Decimal";

			baseDecimal = Number(inputUser);

			baseBinaria = baseDecimal.toString(2);
			baseOctal = baseDecimal.toString(8);
			baseHexa = baseDecimal.toString(16).toUpperCase();

			divMensagem.innerHTML = `Numero convertido ! <br> Base decimal: ${baseDecimal} <br>
            Base binaria: ${baseBinaria} <br>
            Base octal: ${baseOctal} <br> Base hexadecimal: ${baseHexa}`;
		}
	}

	if (escolhaBase === "baseOctal") {
		inputUser = Number(inputUser);
		if (inputUser < 0 || inputUser == 8 || inputUser == 9 || !Number.isInteger(inputUser)) {
			mensagemBaseSelecionada.innerHTML = "Octal";
			divMensagem.innerHTML = erro;
		} else {
			mensagemBaseSelecionada.innerHTML = "Octal";
			baseDecimal = parseInt(inputUser, 8);

			baseBinaria = baseDecimal.toString(2);
			baseHexa = baseDecimal.toString(16).toUpperCase();
			baseOctal = inputUser;

			divMensagem.innerHTML = `Numero convertido ! <br> Base decimal: ${baseDecimal} <br>
            Base binaria: ${baseBinaria} <br>
            Base octal: ${baseOctal} <br> Base hexadecimal: ${baseHexa}`;
		}
	}

	if (escolhaBase === "baseHexa") {
		inputUser.toString();
		if (inputUser < 0) {
			mensagemBaseSelecionada.innerHTML = "Hexadecimal";
			divMensagem.innerHTML = erro;
		} else {
			mensagemBaseSelecionada.innerHTML = "Hexadecimal";

			baseDecimal = parseInt(inputUser, 16);

			baseBinaria = baseDecimal.toString(2);
			baseHexa = inputUser.toUpperCase();
			baseOctal = baseDecimal.toString(8);

			divMensagem.innerHTML = `Numero convertido ! <br> Base decimal: ${baseDecimal} <br>
            Base binaria: ${baseBinaria} <br>
            Base octal: ${baseOctal} <br> Base hexadecimal: ${baseHexa}`;
		}
	}

	if (escolhaBase === "baseBinaria") {
        var invalido = ["2","3","4","5","6","7","8","9"]
		inputUser = Number(inputUser);
		if (inputUser < 0 || invalido.includes(inputUser) || !Number.isInteger(inputUser)) {
			mensagemBaseSelecionada.innerHTML = "Binária";
			divMensagem.innerHTML = erro;
		} else {
			mensagemBaseSelecionada.innerHTML = "Binária";
			baseDecimal = parseInt(inputUser, 2);

			baseBinaria = inputUser;
			baseHexa = baseDecimal.toString(16);
			baseOctal = baseDecimal.toString(8);

			divMensagem.innerHTML = `Numero convertido ! <br> Base decimal: ${baseDecimal} <br>
        Base binaria: ${baseBinaria} <br>
        Base octal: ${baseOctal} <br> Base hexadecimal: ${baseHexa}`;
		}
	}
}
