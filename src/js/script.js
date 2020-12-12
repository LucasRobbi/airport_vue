$(window).on("load", () => {
  if(location.pathname.includes('conta')) {
    my_account._init();
  }
  home_page.slick();
});

const home_page = {
  slick: () => {
    $(".div-imgs").slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
    });
  },
};

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
      const modalConfig = { backdrop: 'static',  keyboard: false }
      
      if (!isLogged) $("#signInModal").modal(modalConfig);
    },
    _onLogin: () => {
      $("#signInModal, #logInModal").modal("hide");
    },
    _onCancel: () => {
      window.location.replace("/pages/");
    },
    _logInModal: (show) => {
      const hide = show === "#signInModal" ? "#logInModal" : "#signInModal"
      $(hide).modal("hide");
      $(show).modal("show");
    }
  },
};


