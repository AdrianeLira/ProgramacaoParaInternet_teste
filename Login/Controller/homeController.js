class HomeController{
    
    index(req, res) {
        res.render('index');
    }
   
    login(req, res){
        res.render('pages/login')
    }
    home(req, res){
        res.render('pages/home')
    }
    new(req,res){
        res.render('pages/new')
    }
    edit(req,res){
        res.render('pages/edit')
    }
}

module.exports = new HomeController();