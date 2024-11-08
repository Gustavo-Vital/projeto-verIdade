document.getElementById('button').addEventListener('click', function() {
    const inputAno = document.getElementById('inputDate').value;
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - inputAno;
    const generoSelecionado = document.querySelector('input[name="genero"]:checked');
    const resultadoTexto = document.getElementById('textoResultado');
    const imagem = document.getElementById('assetsResults');

    if (!inputAno || isNaN(inputAno) || inputAno.length !== 4) {
        resultadoTexto.textContent = 'Por favor, insira um ano de nascimento válido (ex: 2000).';
        imagem.style.display = 'none';
        return;
    }

    if (!generoSelecionado) {
        resultadoTexto.textContent = 'Por favor, selecione o gênero.';
        imagem.style.display = 'none';
        return;
    }

    const genero = generoSelecionado.value;

    if (idade <= 10) {
        resultadoTexto.textContent = `Criança do gênero ${genero}`;
        imagem.src = genero === 'masculino' ? './assets/criancaMasculino.png' : './assets/criancaFeminino.png';
    } else if (idade <= 17) {
        resultadoTexto.textContent = `Adolescente do gênero ${genero}`;
        imagem.src = genero === 'masculino' ? './assets/adolescenteMasculino.png' : './assets/adolescenteFeminino.png';
    } else if (idade <= 30) {
        resultadoTexto.textContent = `Jovem do gênero ${genero}`;
        imagem.src = genero === 'masculino' ? './assets/jovemMasculino.png' : './assets/jovemFeminino.png';
    } else if (idade <= 55) {
        resultadoTexto.textContent = `Adulto do gênero ${genero}`;
        imagem.src = genero === 'masculino' ? './assets/adultoMasculino.png' : './assets/adultoFeminino.png';
    } else {
        resultadoTexto.textContent = `Idoso do gênero ${genero}`;
        imagem.src = genero === 'masculino' ? './assets/idosoMasculino.png' : './assets/idosoFeminino.png';
    }

    imagem.style.display = 'block';
});
