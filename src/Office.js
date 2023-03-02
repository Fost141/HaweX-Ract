import {Link} from "react-router-dom";
import "./office.css"


export default function Office () {
    return (
        <div className="page_office">
        <section className="office">
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src="./img/logo.svg" alt=""/></Link>
                </div>
                <div className="nav">
                    <div className="button_nav button_widht">
                        <button>Leave contact info</button>
                    </div>
                    <div className="button_token">
                        <button><img className="pluse_token" src="./img/plus_token.png" alt="plustoken"/>Add token</button>
                    </div>
                    <div className="button_nav">
                        <button><img className="log_out" src="./img/office_account.png" alt=""/> Log out</button>
                    </div>
                    <div className="button_nav">
                        <button><img className="log_out" src="./img/log-in.svg" alt=""/> Log out</button>
                    </div>
                </div>
            </div>
            <div className="trading_name">
                <p>Trading</p>
            </div>
            <div className="trading">               
                <div className="trading_form">
                    <div className="trading_form_content">
                        <div className="name_balance">
                            <p>Form</p>
                            <p className="balance_redact">Balance: 0.0000</p>
                        </div>
                        <div className="trading_form_input_button">
                            <input className="input_trading" type="text" placeholder="0.0000"/>
                            <div className="trading_form_button">
                                <a className="button_max" href="#">MAX</a>
                                <ul className="main_menu">
                                    <li className="main_currency_menu">
                                        <a className="value_menu" href="#"><img className="img_usdt" src="./img/usdt.png" alt=""/>USDT<img className="polygon" src="./img/polygon.png" alt=""/></a>
                                        <ul className="currency_menu">
                                            <li><a className="currencys" href="#"><img className="img_currency" src="./img/usdt.png" alt=""/>USDT</a></li>
                                            <li><a className="currencys" href="#"><img className="img_currency" src="./img/bitcoin.png" alt=""/>Bitcoin</a></li>
                                            <li><a className="currencys" href="#"><img className="img_currency" src="./img/ethereum.png" alt=""/>Ethereum</a></li>
                                            <li><a className="currencys" href="#"><img className="img_currency" src="./img/tron.png" alt=""/>Tron</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="trading_form_content  non_active_input">
                        <div className="name_balance">
                            <p>Form</p>
                            <p className="balance_redact">Balance: 0.0000</p>
                        </div>
                        <div className="trading_form_input_button">
                            <input className="input_trading" type="text" placeholder="0.0000" disabled="disabled"/>
                            <a className="hwx_token" href="#"><img src="./img/hwx_token.png" alt="hwxtoken"/>HWX Token</a>
                        </div>
                    </div>
                    <div className="trading_form_text">
                        <div className="form_text_content">
                            <p className="form_text_bold">0.7 USDT</p>
                            <p className="form_text_lite">Private sale price</p>
                        </div>
                        <div className="form_text_content">
                            <p className="form_text_bold">10.0 USDT</p>
                            <p className="form_text_lite">Minimum amount</p>
                        </div>
                        <div className="form_text_content">
                            <p className="form_text_bold">0 HWX Token</p>
                            <p className="form_text_lite">Available coins</p>
                        </div>
                    </div>
                    <div className="action_form">
                        <a className="action_button" href="#">Action</a>
                        <div className="agree">
                            <input type="checkbox"/>
                            <p>I agree with the <span className="agree_text">Terms of purchase of the Hawex DAO</span></p>
                        </div>
                    </div>
                </div>
                <div className="trading_round">
                    <div className="round_content">
                        <div className="round_name">
                            <p className="round_lite_text">Sales round</p>
                            <img src="./img/arrow.png" alt="arrow"/>
                            <p className="round_bold_text">Strategic</p>
                        </div>
                        <div className="round_page">
                            <a className="round_page_number" href="#">1</a>
                            <a className="round_page_number" href="#">2</a>
                            <a className="round_page_number" href="#">3</a>
                            <a className="round_page_number" href="#">4</a>
                        </div>
                        <div className="round_name margin_name">
                            <p className="round_lite_text">Total balance</p>
                            <img src="./img/sync.png" alt="sync"/>
                        </div>
                        <div className="total_balance_input">
                            <input className="total_balance_input_redact" type="text" placeholder="0.0000 HWX Token"/>
                        </div>
                        <div className="round_name">
                            <p className="round_lite_text">Holdings</p>
                        </div>
                        <div className="total_balance_input">
                            <input className="total_balance_input_redact" type="text" placeholder="0.0000"/>
                        </div>
                        <div className="round_name">
                            <p className="round_lite_text">Available to claim</p>
                        </div>
                        <div className="total_balance_input">
                            <input className="total_balance_input_redact" type="text" placeholder="0.0000"/>
                            <div className="adress_button button_claim">
                                <a href="#">CLAIM</a>
                            </div>
                        </div>
                        <div className="round_name">
                            <p className="round_lite_text">Contract address</p>
                        </div>
                        <div className="address">
                            <p>0xdE541242A9AdbBa5c59f4<br/>4c2478f60343cd8163C</p>
                        </div>
                        <div className="adress_button">
                            <a href="#">Copy address</a>
                            <a href="#">QR-code</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="payment">
                <div className="one payment_box">
                    <div className="box_content">
                        <div className="usdt_between">
                            <p>70.000.00 USDT</p>
                            <img src="./img/usdt_red_img.png" alt="image"/>
                        </div>
                        <div className="line_one"></div>
                        <div className="one_description">
                            <p>Your payment has been rejected by complience oficcer. Funds will be refunded soon.</p>
                        </div>
                    </div>
                </div>
                <div className="two payment_box">
                    <div className="box_content">
                        <div className="usdt_between">
                            <p>5 000 000.00 USDT USDT</p>
                            <div className="usdt_two_img">
                                <p><span className="two_lite_text">Checked</span></p>
                                <img src="./img/checkmark.png" alt="image"/>
                            </div>
                        </div>
                        <div className="button_two">
                            <a href="#">Add tokens</a>
                        </div>
                    </div>
                </div>
                <div className="three payment_box">
                    <div className="box_content">
                        <div className="usdt_between">
                            <p>150 000 USDT</p>
                            <div className="usdt_two_img">
                                <p><span className="three_lite_text">Pending</span></p>
                                <img src="./img/dot.png" alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="four payment_box">
                    <div className="box_content">
                        <div className="usdt_between">
                            <p>278 000 USDT</p>
                            <img src="./img/lock.png" alt="image"/>
                        </div>
                        <div className="line_last"></div>
                        <div className="one_description">
                            <p>Your payment is pending verification, leave your contacts - a compliance officer will contact you</p>
                        </div>
                    </div>
                </div>
                <div className="fives payment_box">
                    <div className="box_content">
                        <div className="usdt_between">
                            <p>90 000 USDT</p>
                            <img src="./img/lock.png" alt="image"/>
                        </div>
                        <div className="line_last"></div>
                        <div className="one_description">
                            <p>Your payment is pending verification, leave your contacts - a compliance officer will contact you</p>
                        </div>
                    </div>
                </div>
            </div>
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
        </section>
    </div>
    )
}
