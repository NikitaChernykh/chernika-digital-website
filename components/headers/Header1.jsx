"use client";
import SideMenu from "./component/SideMenu";
import MobileNav from "./component/MobileNav";
import Nav from "./component/Nav";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header1({ parentClass = "nav-header header-layout1" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const menuWrapper = document.querySelector(".mobile-menu-wrapper");
      const menuContainer = document.querySelector(".mobile-menu-area");

      // Check if the click is outside of modal-content but inside modal-dialog
      if (
        menuWrapper &&
        menuContainer &&
        !menuContainer.contains(event.target) &&
        menuWrapper.contains(event.target)
      ) {
        // Your logic for handling the click outside modal-content
        setMobileMenuOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleDocumentClick);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 500);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {/*--==============================
   
    ============================== */}
      <div
        className={`mobile-menu-wrapper ${
          mobileMenuOpen ? "body-visible" : ""
        } `}
      >
        <div className="mobile-menu-area">
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link scroll={false} href="/">
              <Image
                width={50}
                height={50}
                src="/assets/img/logo-sm.svg"
                alt="chernika digital"
              />
            </Link>
          </div>
          <div className="mobile-menu">
            <ul>
              <MobileNav />
            </ul>
          </div>
          <div className="sidebar-wrap">
            <h6>Building A1, DDP, Silicon Oasis</h6>
            <h6>Dubai, UAE</h6>
          </div>
          <div className="sidebar-wrap">
            <h6>
              <a href="mailto:hello@chernikadigital.com">hello@chernikadigital.com</a>
            </h6>
          </div>
          {/* <div className="social-btn style3">
            <MobileMenuSocials />
          </div> */}
        </div>
      </div>
      {/*--==============================
	Header Area
    ==============================*/}
      <header className={parentClass}>
        <div className={`sticky-wrapper ${isScrolled ? "header-sticky" : ""} `}>
          {/*-- Main Menu Area */}
          <div className="menu-area">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link scroll={false} href="/">
                      <Image
                        width={50}
                        height={50}
                        src="/assets/img/logo-sm.svg"
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto ms-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <Nav />
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      className="menu-toggle sidebar-btn"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  {/* <div className="header-button">
                    <button
                      type="button"
                      className="search-btn searchBoxToggler"
                      onClick={() =>
                        document
                          .getElementsByClassName("popup-search-box")[0]
                          ?.classList.toggle("show")
                      }
                    >
                      <Image
                        width={24}
                        height={24}
                        src="/assets/img/icon/search.svg"
                        alt="icon"
                      />
                      <span className="link-effect">
                        <span className="effect-1">SEARCH</span>
                        <span className="effect-1">SEARCH</span>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="sidebar-btn sideMenuToggler"
                      onClick={() => setIsOpen(true)}
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
