import {Link} from "react-router-dom";

function App() {
  return (
    <div className="page">
      <section className="first">         
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src="./img/logo.svg" alt=""/></Link>
                </div>
                <div className="buttons">
                    <div className="button_login">
                        <button>Log in</button>
                    </div>
                    <div className="button_sign">
                        <button><img className="log_in" src="./img/log-in.svg" alt=""/> Sign up</button>
                    </div>
                </div>
            </div>
            <div className="site_name">
                <div className="name">
                    <p>Hawex Investor’s Office</p>
                </div>
            </div>
            <div className="site_description">
                <div className="description">                   
                    <p>Deploy a full-fledged CeDeFi project in one month on <span className="text_bold"><br/>Hawex DAO</span></p>
                </div>
                <div className="slogan">
                    <p>We believe in and pursue shared growth for our clients and ourselves.</p>
                </div>
            </div>
            <div className="log_in_account">
              <Link to="/welcome"><button>Log in account</button></Link>
            </div>
        </section>
        <section className="second">
            <div className="section_name">
                <p>MISSION</p>
            </div>
            <div className="section_description">
                <p>Our goal is to develop our ecosystem in a way that will open new worlds for gamers</p>
            </div>
            <div className="section_slogan">
                <p>The main idea is to give our customers the opportunity to earn money by playing our games and act as investors. We aim to create a bridge between beginners and advanced esports players.</p>
            </div>
            <div className="section_box">
                <div className="box">
                    <img src="./img/box1.png" alt="img"/>
                    <p className="box_name">Mission</p>
                    <p className="box_description">To give players the opportunity to be anything they want, to unleash their inner potential in a gaming environment, to reduce the level of crime in shooters</p>
                </div>
                <div className="box">
                    <img src="./img/box2.png" alt="img"/>
                    <p className="box_name">Vision</p>
                    <p className="box_description">To develop and manage ecosystem in a way that will open new opportunities for gamers and investors</p>
                </div>
                <div className="box">
                    <img className="box3" src="./img/box3.png" alt="img"/>
                    <p className="box_name">Goal</p>
                    <p className="box_description">To become number one in fast growing market of MMO - games with GameFi mechanics</p>
                </div>
            </div>
            <div className="line"></div>
        </section>
        <section className="third">
            <div className="section_name">
                <p>PROJECTS</p>
            </div>
            <div className="section_description media">
                <p className="description_third"><span className="description_third_redact">RedPad studio has extensive experience in the gaming industry. </span>This studio works with eminent companies like Steam, Epic Games, Amazon, etc. Thus far, the studio has already completed several projects.</p>
            </div>
            <div className="section_container">
                <div className="container">
                    <div className="box_container"></div>
                    <p>The Game is a 100% Ready-to-Launch product. It is a AAA product with a high graphic resolution, created by 55 developers worldwide within 3 years.</p>
                </div>
                <div className="container">
                    <div className="box_container"></div>
                    <p>The world's first AAA game that combines MMO, RTS, RPG and Action. During the game, the player can switch from RTS style gameplay to FPS style games at any time.</p>
                </div>
            </div>
            <div className="line"></div>
        </section>
        <section className="for">
            <div className="section_for_img">
                <div className="stat">
                    <img src="./img/stat1.png" alt="stat"/>
                    <img src="./img/stat2.png" alt="stat"/>
                    <img src="./img/stat3.png" alt="stat"/>
                </div>
            </div>
            <div className="line"></div>
        </section>
        <section className="five">
            <div className="section_name">
                <p>STRATEGY</p>
            </div>
            <div className="section_five_container">
                <div className="section_five_text">
                    <div className="section_description">
                        <p>We create Market emission. It is limiting the volume of tokens to prevent hyperinflation and depreciation at an early stage of development.</p>
                    </div>
                    <div className="section_five_slogan">
                        <p>In the future, when the company will develop and increase the number of products and customers, we will use treasure.</p>
                    </div>
                    <div className="section_five_button">
                        <div className="alpha">
                            <button>Alpha</button>
                        </div>
                        <div className="beta">
                            <button>Beta</button>
                        </div>
                    </div>
                </div>
                <div className="section_five_img">
                    <img src="./img/five.png" alt="img"/>
                </div>
            </div>
            <div className="line"></div>
        </section>
        <section className="six">
            <div className="section_name">
                <p>STRATEGY</p>
            </div>
            <div className="section_six_container">
                <div className="section_six_text">
                    <div className="section_description six_text">
                        <p>Hawex DAO – Alpha token implemented on ERC-20. It was issued for Seed round and Early investors</p>
                    </div>
                    <div className="section_six_button">
                        <div className="alpha">
                            <button>Alpha</button>
                        </div>
                    </div>
                </div>
                <div className="section_six_img">
                    <img src="./img/six.png" alt="img"/>
                </div>
            </div>
            <div className="line"></div>
        </section>
        <section className="seven">
            <div className="section_name">
                <p>SOLD COINS</p>
            </div>
            <div className="section_seven_block">
                <div className="block_up">
                    <div className="seven_container">
                        <p className="name_up">Seed Community</p>        
                        <p className="number">1 999 929 <span className="number_lite">/ 2 MLN HWX</span></p>
                        <div className="progress"></div>
                        <div className="icon">
                            <div className="currency">
                                <img src="./img/icon1.svg" alt="currency"/>
                                <p className="icon_text">0.5 USDT</p>
                            </div>
                            <div className="deal">
                                <img src="./img/icon2.svg" alt="deal"/>
                                <p className="icon_text">7.7% at the TGE</p>
                            </div>
                            <div className="percent">
                                <img src="./img/icon3.svg" alt="percent"/>
                                <p className="icon_text">7.7% monthly</p>
                            </div>
                        </div>
                    </div>
                    <div className="seven_container">
                        <p className="name_up">Strategic Round</p>        
                        <p className="number">289 000 <span className="number_lite">/ 3 MLN HWX</span></p>
                        <div className="progress_live"></div>
                        <div className="icon">
                            <div className="currency">
                                <img src="./img/icon1.svg" alt="currency"/>
                                <p className="icon_text">0.5 USDT</p>
                            </div>
                            <div className="deal">
                                <img src="./img/icon2.svg" alt="deal"/>
                                <p className="icon_text">7.7% at the TGE</p>
                            </div>
                            <div className="percent">
                                <img src="./img/icon3.svg" alt="percent"/>
                                <p className="icon_text">7.7% monthly</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block_down">
                    <div className="seven_container">
                        <div className="block_down_name">
                            <p className="name_down">Private round</p>
                            <p className="name_down_block">comig soon</p>
                        </div>        
                        <p className="number">5 086 609 <span className="number_lite">/ 5 MLN HWX</span></p>
                        <div className="progress"></div>
                        <div className="icon">
                            <div className="currency">
                                <img src="./img/icon1.svg" alt="currency"/>
                                <p className="icon_text">0.5 USDT</p>
                            </div>
                            <div className="deal">
                                <img src="./img/icon2.svg" alt="deal"/>
                                <p className="icon_text">7.7% at the TGE</p>
                            </div>
                            <div className="percent">
                                <img src="./img/icon3.svg" alt="percent"/>
                                <p className="icon_text">7.7% monthly</p>
                            </div>
                        </div>
                    </div>
                    <div className="seven_container">
                            <p className="name_down">For all rounds</p>
                            <div className="rounds_block">
                                <div className="rounds_block_left">
                                    <p className="rounds_text_bold">6.7 MLN</p>
                                    <p className="rounds_text_lite">total value staked</p>
                                </div>
                                <div className="rounds_block_right">
                                    <p className="rounds_text_bold">10 381</p>
                                    <p className="rounds_text_lite">total hplders</p>
                                </div>
                            </div>     
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </section>
        <section className="eight">
            <div className="section_name">
                <p>ROADMAP</p>
            </div>
            <div className="section_description">
                <p className="section_description_eight">We are planning to have a share of around 7.7% of the MMO games market by 2027, with an estimated value of $6 bln. We aim to double it by 2032.</p>
            </div>
            <div className="roadmap">
                <img className="roadmap_img" src="./img/roadname.png" alt="roadmap"/>
                <div className="roadmap_txt">
                    <div className="q1">
                        <p>2023 <span className="roadmap_text_lite">Q1</span></p>
                        <p className="roadmap_text">BaaS Services</p>
                        <ul className="roadmap_text_ul">
                            <li className="roadmap_text_li">CeDeFi banking</li>
                            <li className="roadmap_text_li">Exchange</li>
                            <li className="roadmap_text_li">Card provider</li>
                        </ul>
                    </div>
                    <div className="q2">
                        <p>2023 <span className="roadmap_text_lite">Q2</span></p>
                        <ul className="roadmap_text_ul">
                            <li className="roadmap_text_li"><span className="roadmap_text_bold">B2b Banking - </span>for business</li>
                            <li className="roadmap_text_li"><span className="roadmap_text_bold">B2c Banking - </span>for clients</li>
                        </ul>
                    </div>
                    <div className="q3">
                        <p>2023 <span className="roadmap_text_lite">Q3</span></p>
                        <ul className="roadmap_text_ul">
                            <li className="roadmap_text_li">CeDeFi banking</li>
                            <li className="roadmap_text_li">Exchange</li>
                            <li className="roadmap_text_li">Card provider</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </section>
        <section className="nine">
            <div className="section_name">
                <p>LEADERSHIP TEAM</p>
            </div>
            <div className="section_description">
                <p className="section_description_nine">We aim to reach these targets by launching new game products and creating crypto tokens to accompany these launches.</p>
            </div>
            <div className="foto_block">
                <div className="foto_content">
                    <img className="./foto_content_img" src="img/foto1.png" alt="photo"/>
                    <p className="foto_name">Romans Nekrutenko</p>
                    <a className="foto_a" href="#">CEO Hawex Group</a>
                </div>
                <div className="foto_content">
                    <img className="./foto_content_img" src="img/foto2.png" alt="photo"/>
                    <p className="foto_name">Maxim Kurbangaleev</p>
                    <a className="foto_a" href="#">СPО Hawex Group</a>
                </div>
                <div className="foto_content">
                    <div className="foto_content_img_info">
                        <div className="background_color_blue">
                            <img className="foto_content_img_back" src="./img/foto3.png" alt="photo"/>
                            <p className="info_name">Ilya Novoseltsev</p>
                            <a className="info_a" href="#">Chief Legal Departament</a>
                            <div className="social_info">
                                <a className="social_info_a" href="#"><img src="./img/insta.png" alt="instagram"/></a>
                                <a className="social_info_a" href="#"><img src="./img/twitter.png" alt="twitter"/></a>
                            </div>
                        </div> 
                    </div>
                    <p className="foto_name">Ilya Novoseltsev</p>
                    <a className="foto_a foto_a_widht" href="#">Chief Legal Departament</a>
                </div>
                <div className="foto_content">
                    <img className="./foto_content_img" src="img/foto4.png" alt="photo"/>
                    <p className="foto_name">Romans Nekrutenko</p>
                    <a className="foto_a" href="#">CEO Hawex Group</a>
                </div>
            </div>
            <div className="line"></div>
        </section>
        <section className="ten">
            <div className="section_name">
                <p>INVESTOR'S OFFICE</p>
            </div>
            <div className="section_description">
                <p className="section_description_ten">Private accounts are on Platform. Users receive the ability to use your personal Account now.</p>
            </div>
            <div className="section_ten_button">
                <div className="alpha">
                    <button>Account</button>
                </div>
                <div className="beta">
                    <button>How it works?</button>
                </div>
            </div>
        </section>
        <footer>
            <div className="footer_block">
                <div className="footer_up">
                    <div className="logo_button">
                        <a href="index.html"><img src="./img/logo.svg" alt="logo"/></a>
                        <div className="footer_button">
                            <div className="main_website">
                                <a href="#"><img src="./img/main_website.png" alt="website"/>Main Website</a>
                            </div>
                            <div className="hawex_payments">
                                <a href="#"><img src="./img/hawex_payments.png" alt="payments"/>Hawex Payments</a> 
                            </div>
                        </div>
                    </div>
                    <div className="footer_social">
                        <div className="social_content">
                            <a href="#"><img src="./img/footer_telegram.png" alt="telegram"/></a> 
                            <a className="social_text" href="#">Telegramm</a>
                        </div>
                        <div className="social_content">
                            <a href="#"><img src="./img/footer_instagram.png" alt="instagram"/></a>
                            <a className="social_text" href="#">Instagram</a>
                        </div>
                        <div className="social_content">
                            <a href="#"><img src="./img/footer_twitter.png" alt="twitter"/></a>
                            <a className="social_text" href="#">Twitter</a>
                        </div>
                        <div className="social_content">
                            <a href="#"><img src="./img/footer_discord.png" alt="discord"/></a>
                            <a className="social_text" href="#">Discord</a>
                        </div>
                    </div>
                </div>
                <div className="footer_line"></div>
                <div className="footer_down">
                    <div className="footer_down_text">
                        <div className="copyright">
                            <p>© 2022 Hawex Group LTD . All Rights Reserved</p>
                        </div>
                        <div className="footer_info">
                            <a href="#"><p>AML Statement</p></a>
                            <a href="#"><p>Польз. Соглашение</p></a>
                            <a href="#"><p>Cookie-политика</p></a>
                            <a href="#"><p>Политика конфиденциальности</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
