class SessionController {
    async index(req, res) {
      const rows = await db.getUsuarios();
  
      res.render('pages/login', { erro: "", usuarios });
    }

    logar(req, res) {

        let user = {
            email: "Adriane@gmail.com",
            senha: "adriane123"
        }
        
        console.log(req.body)
        const { email, senha } = req.body;

        if (!(email === user.email)) {
            return res.render('pages/login', { erro: "Usuário inexistente" })
        }
          
        if (!(email === user.email && senha === user.senha)) {
            return res.render('pages/login', { erro: "Senha inválida" });
        }
          req.session.logado = true;
          return res.redirect('/home');
    }
    logout(req, res) {
        req.session.logado = false;
        return res.redirect('/login')
      }
}

module.exports = new SessionController();

