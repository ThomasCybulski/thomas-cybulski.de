import React, { useContext, useState, useEffect } from 'react';
import PortfolioContext from '../../context/context';
import AboutImg from '../Image/AboutImg';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import Typed from 'react-typed';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { img, title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section className="o-section o-section--header t-section t-section--header">
      <ThemeSwitch />
      <div className="c-header">
        <div className="o-section__header-bg t-section__header"></div>
        <div className="o-section__content-bg t-section__content"></div>
        <div className="o-container">
          <div className="o-section__container">
            <header className="o-section__header  c-header__header t-section__header">
              <div className="c-header__inner-header">
                <div className="c-header__avatar">
                  <div className="a-header c-avatar">
                    <AboutImg alt="profile picture" filename={img} />
                  </div>
                </div>
              </div>
            </header>
            <div className="o-section__content  c-header__content t-section__content">
              <div className="c-header__inner-content">
                <div className="c-header__top">
                  <div className="c-header__brand">
                    <div className="c-brand">
                      <h1 className="c-brand__title t-title">
                        <span className="c-brand__sizer">
                          <span className="a-header c-brand__first-word t-title__first-word">
                            Thomas
                          </span>
                          <span className="a-header c-brand__second-word t-title__second-word">
                            Cybulski
                          </span>
                        </span>
                      </h1>
                      <h2 className="a-header c-brand__sub-title t-sub-title">
                        <Typed
                          strings={[
                            "💻 I'm a Senior Software Engineer",
                            '👨‍💻 Wide experience in Web Application Development',
                            '🫶 I love Software Development',
                            '👋 Say hi!',
                          ]}
                          typeSpeed={80}
                          backSpeed={40}
                          loop
                        />
                      </h2>
                    </div>
                  </div>
                  <ul className="c-header__social-buttons  c-social-buttons">
                    <li className="a-header">
                      <a
                        href="https://www.linkedin.com/in/thomas-cybulski/"
                        target="_blank"
                        className="c-social-button t-social-button"
                      >
                        <i className="fa fa-lg fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="a-header">
                      <a
                        href="https://www.xing.com/profile/Thomas_Cybulski2/cv"
                        target="_blank"
                        className="c-social-button t-social-button"
                      >
                        <i className="fa fa-lg fa-xing" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="a-header">
                      <a
                        href="https://github.com/ThomasCybulski"
                        target="_blank"
                        className="c-social-button t-social-button"
                      >
                        <i className="fa fa-lg fa-github"></i>
                      </a>
                    </li>
                    <li className="a-header">
                      <a
                        href="https://twitter.com/tho_cyb"
                        target="_blank"
                        className="c-social-button t-social-button"
                      >
                        <i className="fa fa-lg fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="c-header__contact">
                  <hr className="a-header  c-header__contact-divider" />
                  <div className="o-grid">
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div className="a-header  o-content">
                        <div className="o-content__body">
                          <h4>Location</h4>
                          <address>Osnabrück, DE</address>
                        </div>
                      </div>
                    </div>
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div className="a-header  o-content">
                        <div className="o-content__body">
                          <h4>Email</h4>
                          <p>
                            <span className="t-link-container__item--blended">
                              software@thomascybulski.de
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
