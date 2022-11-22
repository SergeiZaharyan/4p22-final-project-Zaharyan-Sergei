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
              <img src={IconFaceBook} className="FooterShopNetworksIcon" alt="FaceBook" />
              <img src={IconGmail} className="FooterShopNetworksIcon" alt="Gmail" />
              <img src={IconTwitter} className="FooterShopNetworksIcon"alt="Twitter" />
              </div>
          </div>
          <div className="FooterShopConteinerLogo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  
            ex ea commodo consequat. 
           </div>
          <div className="FooterShopConteinerLogo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  
            ex ea commodo consequat. 
          </div>
        </div>
      </>
    )
  }
  export default FooterShop;