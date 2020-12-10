$(window).on("load", () => {
  my_account._init();
});


const my_account = {
  _init: () => {
    const isLogged = my_account._login();
    my_account._signInModal(isLogged);
  },
  _login: () => {
    // fazer request de login
    const isLogged = false;
    
    return isLogged
  },
  _signInModal: (isLogged) => {
    if(!isLogged) $('#signInModal').modal('show')
    
    
    $('#signInModal').on('hide.bs.modal', () => window.location.replace("/pages/"))  
  }
}