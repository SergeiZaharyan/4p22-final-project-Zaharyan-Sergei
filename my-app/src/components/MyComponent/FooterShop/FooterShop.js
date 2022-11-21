import "./FooterShop.css";
import IconGmail from "../Img/ImgFooter/Gmail.svg";
import IconFaceBook from "../Img/ImgFooter/FaceBook.svg";
import IconTwitter from "../Img/ImgFooter/Twitter.svg";
import Logo from "../Logo/Logo";


function FooterShop () {
    return (
      <>
        <div className="FooterShopConteiner">
            <div className="FooterShopConteinerLogo">
            <Logo  className="FooterShopLogo" />
              <p className="FooterShopAdress">10 New Town Street, V2 5NW, Newstate, USA.</p>
              <a className="FooterShopEmailAdress" href = "mailto: abc@example.com" >
              abc@example.com
              </a>
              <div className="FooterShopNetworks">
              <img src={IconFaceBook} className="FooterShopNetworksIcon"/>
              <img src={IconGmail} className="FooterShopNetworksIcon" />
              <img src={IconTwitter} className="FooterShopNetworksIcon"/>
              </div>
          </div>
        </div>
      </>
    )
  }
  export default FooterShop;