exports.login = (req, res) => {
    res.render('employee/login', { 
      title: 'Login - Employee Management System',
      layout: false
    });
  };
  
  exports.loginPost = async (req, res) => {
    const { username, password } = req.body;
  
    // Hardcoded credentials
    const validUsername = 'admin';
    const validPassword = 'password123';
  
    if (username === validUsername && password === validPassword) {
      req.session.user = { username: validUsername };
      req.flash('success', 'Logged in successfully');
      res.redirect('/');
    } else {
      req.flash('error', 'Invalid username or password');
      res.redirect('/login');
    }
  };
  
  exports.logout = (req, res) => {
    req.session.destroy((err) => {
      if (err) console.log(err);
      res.redirect('/login');
    });
  };
