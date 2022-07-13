let agenda = [];
let escolha;

do{
    const menu = `
    Gravar............1
    Listar............2
    Buscar............3
    Excluir...........4
    `
    let menuOpcao = prompt(menu); 

    if(menuOpcao == "1"){
        const nome = prompt("Digite seu nome: ");
        const tel = prompt("Digite seu telefone");
        const usuario = {
            nome,
            tel
        }
        agenda.push(usuario);
        alert("Cadastrado com sucesso!");
    }else if (menuOpcao == "2"){
        let lista = "";
        for (let i = 0; i < agenda.length; i++){
            lista += `nome: ${agenda[i].nome} , tel: ${agenda[i].tel}`
        }
        alert(lista);
    }else if (menuOpcao == "3"){
        const nome = prompt("Digite o nome que deseja buscar: ");
        let encontrou = -1;
        for(let i = 0; i < agenda.length; i++){
            if(nome == agenda[i].nome){
                encontrou = i;
            }
        }
        if (encontrou == -1){
            alert("Não encontramos essa pessoa");
        }else{
            alert(`nome: ${agenda[encontrou].nome} , tel: ${agenda[encontrou].tel}`);
        }

    }else if (menuOpcao == "4"){
        const nome = prompt("Digite o nome que deseja excluir: ");
        let encontrou = -1;
        for(let i = 0; i < agenda.length; i++){
            if(nome == agenda[i].nome){
                encontrou = i;
            }
        }
        if (encontrou == -1){
            alert("Não encontramos essa pessoa");
        }else{
            agenda.splice(encontrou,1);
            alert("Excluido com sucesso");
        }
            
    }else{
        alert("Opção inválida!");
    }

    escolha = prompt("Deseja continuar? S/N");

}while (escolha == "S" || escolha == "s");