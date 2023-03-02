import './welcome.css';
import {Link} from "react-router-dom";

export default function Welcome () {
    return (
        <div className="page_welcome">
        <section className="first_welcome">
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src="./img/logo.svg" alt=""/></Link>
                </div>
            </div>
            <div className="site_name">
                <div className="name">
                    <p>welcome to</p>
                </div>
            </div>
            <div className="site_description">
                <div className="description">                   
                    <span className="text_bold"><br/>Hawex DAO investor’s office</span>
                </div>
                <div className="slogan">
                    <p>You need to connect your crypto wallet, It′s absolutely safe</p>
                </div>
            </div>
            <div className="block">
                <div className="block_content">
                    <Link to="/office" className="block_link">
                        <img src="./img/metamask.png" alt="metamask"/>
                        <p>MetaMask</p> 
                    </Link>   
                </div>
                <div className="block_content">
                    <a className="block_link" href="#">
                        <img src="./img/walletconnect.png" alt="walletconnect"/>
                        <p>WalletConnect</p>
                    </a> 
                </div>
                <div className="block_content">
                    <a className="block_link" href="#">
                        <img src="./img/trustwallet.png" alt="trustwallet"/>
                        <p>TrustWallet</p>
                    </a> 
                </div>
            </div>
        </section>
    </div>
    )
}