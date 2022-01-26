document.addEventListener("DOMContentLoaded", function () {
  // show search header
  var searchHeader = document.querySelector(".primary-nav__search");

  // show submenu
  var subMenu = document.querySelector(".secondary-nav--left__list");

  //
  var primaryNav = document.querySelector(".primary-nav-wrapper");

  // show pass word
  var passwordInput = document.querySelectorAll(".form-group-pass");

  // show menu mobile
  var openMenuMb = document.querySelector(".bar-mb");
  var menuMb = document.querySelector(".sub-menu-mb-wrapper");
  var dropdownMenuMb = document.querySelector(".sub-menu-mb-content");

  // show form sign up
  var signupBody = document.querySelector(".sign-up-content");
  // show popup sign up
  var openPopupSignup = document.querySelectorAll(".signup-show");
  var changeSignup = document.querySelectorAll(".sign-up-header--item");

  //close popup sign up
  var signupWrapper = document.querySelector(".sign-up-wrapper");

  // show popup login
  var openPopupLogin = document.querySelectorAll(".login-show");
  var changeLogin = document.querySelectorAll(".login-header--item");
  //close popup login
  var loginWrapper = document.querySelector(".login-wrapper");

  // premium container
  var premiumContainer = document.querySelector(".premium-cate-container");

  // show cmt
  var showCmt = document.querySelectorAll(".show-cmt");
  var cmtWrapper = document.querySelector(".comment-wrapper");
  var closeCmt = document.querySelector(".close-comment-wrapper");

  // show notification
  var showNoti = document.querySelector(".primary-nav__notifi");
  // show user settings
  var showUser = document.querySelector(".primary-nav__user");

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;
      // show search header
      if (searchHeader) {
        searchHeader.querySelector(".primary-nav__search--icon").onclick =
          function () {
            searchHeader
              .querySelector(".form-search-aside-nav")
              .classList.toggle("open");
          };
      }
      // show submenu
      if (subMenu) {
        var subMenuItem = subMenu.querySelectorAll(
          ".secondary-nav--left__item"
        );
        subMenuItem.forEach(function (a, b) {
          a.onclick = function (e) {
            var subMenuDropdown = a.querySelector(
              ".secondary-nav--left__dropdown"
            );
            var subMenuIcon = a.querySelector(".secondary-nav--left__icon");

            var subMenuDropdownActive = document.querySelector(
              ".secondary-nav--left__dropdown.active"
            );
            var subMenuIconAction = document.querySelector(
              ".secondary-nav--left__icon.action"
            );
            if (subMenuDropdown && subMenuIcon) {
              if (
                subMenuDropdown.classList.contains("active") &&
                subMenuIcon.classList.contains("action")
              ) {
                subMenuDropdown.classList.remove("active");
                subMenuIcon.classList.remove("action");
              } else {
                subMenuDropdown.classList.add("active");
                subMenuIcon.classList.add("action");

                if (
                  subMenuDropdownActive != null &&
                  subMenuIconAction != null
                ) {
                  subMenuDropdownActive.classList.remove("active");
                  subMenuIconAction.classList.remove("action");
                }
              }
            }
          };
        });
      }

      // show menu mobile
      if (openMenuMb && menuMb) {
        openMenuMb.onclick = function () {
          menuMb.classList.add("active");
        };
        var closeMenuMb = menuMb.querySelector(".sub-menu-mb-close");
        closeMenuMb.onclick = function () {
          menuMb.classList.remove("active");
        };
        var showSignupMb = menuMb.querySelector(
          ".sub-menu-mb-aside-nav--signup"
        );
        var showLoginMb = menuMb.querySelector(".sub-menu-mb-aside-nav--login");
        showSignupMb.onclick = function () {
          signupWrapper.style.display = "block";
          loginWrapper.style.display = "none";
        };
        showLoginMb.onclick = function () {
          loginWrapper.style.display = "block";
          signupWrapper.style.display = "none";
        };
      }
      if (dropdownMenuMb) {
        var dropdownMenuMbItem =
          dropdownMenuMb.querySelectorAll(".sub-menu-mb-item");

        dropdownMenuMbItem.forEach(function (a) {
          a.querySelector(".sub-menu-mb-item-text").lastElementChild.onclick =
            function () {
              a.querySelector(".sub-menu-mb-dropdown").classList.toggle("open");
              this.classList.toggle("active");
            };
        });
      }

      // show password
      if (passwordInput) {
        passwordInput.forEach(function (el) {
          var inputPass = el.querySelector(".form-control-pass");
          var inputIconPass = el.querySelector(".password-icon");
          inputIconPass.onclick = function () {
            if (inputPass.getAttribute("type") == "password") {
              inputPass.setAttribute("type", "text");
              inputIconPass.setAttribute("name", "eye-off-outline");
            } else {
              inputPass.setAttribute("type", "password");
              inputIconPass.setAttribute("name", "eye-outline");
            }
          };
        });
      }

      // show form sign up
      if (signupBody) {
        signupBody.querySelector(".login-btn-email").onclick = function () {
          signupBody.querySelector(".sign-up-form").classList.toggle("open");
          signupBody
            .querySelector(".fa-arrow-right")
            .classList.toggle("active");
        };
      }

      // close popup sign up
      if (signupWrapper) {
        signupWrapper.querySelector(".close-sign-up").onclick = function () {
          signupWrapper.style.display = "none";
        };
        //open popup sign up
        if (openPopupSignup) {
          openPopupSignup.forEach(function (a) {
            a.onclick = function () {
              signupWrapper.style.display = "block";
            };
          });
        }
      }

      // close popup login
      if (loginWrapper) {
        loginWrapper.querySelector(".close-login").onclick = function () {
          loginWrapper.style.display = "none";
        };
        //open popup sign up
        if (openPopupLogin) {
          openPopupLogin.forEach(function (a) {
            a.onclick = function () {
              loginWrapper.style.display = "block";
            };
          });
        }
      }

      // change sign & login
      if (changeLogin) {
        changeLogin.forEach(function (a) {
          a.onclick = function () {
            signupWrapper.style.display = "none";
            loginWrapper.style.display = "block";
          };
        });
      }
      if (changeSignup) {
        changeSignup.forEach(function (b) {
          b.onclick = function () {
            loginWrapper.style.display = "none";
            signupWrapper.style.display = "block";
          };
        });
      }

      // premium container
      if (premiumContainer) {
        var items = premiumContainer.querySelectorAll(".premium-cate-tab-item");
        var tabs = premiumContainer.querySelectorAll(".premium-cate-pane");
        var input = premiumContainer.querySelector(".toggle__input");
        input.onchange = function () {
          items.forEach(function (value, index) {
            var pane = tabs[index];
            if (
              pane.classList.contains("active") &&
              value.classList.contains("active")
            ) {
              pane.classList.remove("active");
              value.classList.remove("active");
            } else {
              pane.classList.add("active");
              value.classList.add("active");
            }
          });
        };
      }

      // show cmt
      if (showCmt) {
        showCmt.forEach(function (a) {
          a.onclick = function () {
            if (cmtWrapper) {
              if (cmtWrapper.classList.contains("open")) {
                cmtWrapper.classList.remove("open");
              } else {
                cmtWrapper.classList.add("open");
              }
            }
            document.querySelector(".comments-bubble").style.display = "none";
          };
        });
        if (closeCmt) {
          closeCmt.onclick = function () {
            if (cmtWrapper) {
              cmtWrapper.classList.remove("open");
            }
            document.querySelector(".comments-bubble").style.display = "block";
          };
        }
      }

      // show notification
      if (showNoti) {
        showNoti.querySelector(".primary-nav__notifi-icon").onclick =
          function () {
            showNoti
              .querySelector(".primary-nav__notifi-dropdown")
              .classList.toggle("active");
            if (
              showUser &&
              showUser
                .querySelector(".primary-nav__user-dropdown")
                .classList.contains("active")
            ) {
              showUser
                .querySelector(".primary-nav__user-dropdown")
                .classList.remove("active");
            }
          };
      }

      // show user settings
      if (showUser) {
        showUser.querySelector(".primary-nav__user-img").onclick = function () {
          showUser
            .querySelector(".primary-nav__user-dropdown")
            .classList.toggle("active");
          if (
            showNoti &&
            showNoti
              .querySelector(".primary-nav__notifi-dropdown")
              .classList.contains("active")
          ) {
            showNoti
              .querySelector(".primary-nav__notifi-dropdown")
              .classList.remove("active");
          }
        };
      }

      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {
        if (searchHeader) {
          if (
            !searchHeader.contains(e.target) &&
            !e.target.matches(".primary-nav__search--icon")
          ) {
            searchHeader
              .querySelector(".form-search-aside-nav")
              .classList.remove("open");
          }
        }
      });
    },
    // sticky sidebar main
    stickySlidebar: function () {
      $(".leftSidebar, .rightSidebar").theiaStickySidebar({
        containerSelector: "#main",
        additionalMarginTop: 60,
        additionalMarginBottom: 20,
      });
    },
    // sticky sidebar detail
    stickySlidebarDetail: function () {
      $(".leftSidebarDetail, .rightSidebarDetail").theiaStickySidebar({
        containerSelector: "#detail",
        additionalMarginTop: 90,
        additionalMarginBottom: 20,
      });
    },
    // slide premium content
    slidePremiumContent: function () {
      if (primaryNav.offsetWidth < 576) {
        $(".premium-content__list").slick({
          dots: false,
          infinite: false,
          arrows: false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        });
      }
    },
    // slide latest jobs
    slideLatestJobDetail: function () {
      if (primaryNav.offsetWidth < 576) {
        $(".latest-jobs-list").slick({
          dots: false,
          infinite: false,
          arrows: false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        });
      }
    },
    // slide recomend read
    slideRecomendRead: function () {
      $(".recommend-read__container").slick({
        dots: false,
        infinite: false,
        arrows: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 739,
            settings: {
              slidesToShow: 2.5,
            },
          },
        ],
      });
    },
    // slide latest jobs
    slideLatestJobs: function () {
      $(".detail-latest-job-container").slick({
        dots: false,
        infinite: false,
        arrows: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 739,
            settings: {
              slidesToShow: 1.5,
            },
          },
        ],
      });
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      //
      var prevScrollpos = window.pageYOffset;
      var secondaryNav = document.querySelector("#secondary-nav");
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("header").style.top = "0";
          if (secondaryNav) {
            if (secondaryNav.querySelector(".third-nav")) {
              secondaryNav.classList.remove("active");
            }
          }
          if (cmtWrapper) {
            cmtWrapper.style.top =
              document.getElementById("header").offsetHeight + "px";
          }
        } else {
          document.getElementById("header").style.top =
            "-" + primaryNav.offsetHeight + "px";
          if (secondaryNav.querySelector(".third-nav")) {
            secondaryNav.classList.add("active");
          }
          if (cmtWrapper) {
            cmtWrapper.style.top = primaryNav.offsetHeight + "px";
          }
        }
        prevScrollpos = currentScrollPos;
      };
      //
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // sticky sidebar main
      this.stickySlidebar();
      // sticky sidebar detail
      this.stickySlidebarDetail();
      // slide premium content
      this.slidePremiumContent();
      // slide latest jobs
      this.slideLatestJobs();
      // slide recomend read
      this.slideRecomendRead();
      // slide latest jobs
      this.slideLatestJobDetail();
      // window scroll
      this.windowScroll();
    },
  };

  app.start();
});
