$(window).on("load", () => {
  my_account._init();
});

const my_account = {
  _init: () => {
    const isLogged = my_account._login();
    my_account._signInModal.init(isLogged);
  },
  _login: () => {
    // fazer request de login
    const isLogged = false;

    return isLogged;
  },
  _signInModal: {
    init: (isLogged) => {
      const modalConfig = { backdrop: 'static' }
      
      if (!isLogged) $("#signInModal").modal(modalConfig);
    },
    _onLogin: () => {
      $("#signInModal").modal("hide");
    },
    _onCancel: () => {
      window.location.replace("/pages/");
    },
  },
};
