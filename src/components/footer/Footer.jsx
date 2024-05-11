import Image from "next/image"
import "./style.css"
import { png,footerNavMeta,footerNavQuick } from "@/constants/constants"
const Footer = () => {

    
    
  return (
    <div className="footerMain" >
      <div className="footer">
          <div className="topFooter">
            <div className="topFooter-left">
                <h1>BE THE FIRST TO KNOW</h1>
                <p>Sign up for updates from mettā muse.</p>
                <div className="inputDiv"><input type="text" placeholder="Enter your e-mail..." name="" id="" /> <button>SUBSCRIBE</button></div>
                
            </div>
            <div className="topFooter-right">
                <div className="details">
                    <h1>CONTACT US</h1>
                    <div className="contactData">
                        <p>+44 221 133 5360</p>
                        <p>customercare@mattamuse.com</p>
                    </div>
                </div>
                <div className="details">
                    <h1>CURRENCY</h1>
                    <div className="usa">
                    <Image src={png?.usa}/><h1>• &nbsp;USA</h1>
                    </div>
                    <p className="currencyNotes">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>
          </div>
          <div className="bottomFooter">
            <div className="bottomFooter-firstOne">
                <h1>mettā muse</h1>
                <ul>
                {footerNavMeta.map((link,index)=>(
                        <li key={index}>{link?.title}</li>
                    ))}
                </ul>
            </div>
            <div className="bottomFooter-secondOne">
                <h1>QUICK LINKS</h1>
                <ul>
                    {footerNavQuick.map((link,index)=>(
                        <li key={index}>{link?.title}</li>
                    ))}
                </ul>
            </div>
            <div className="bottomFooter-thirdOne">
                <div className="subDiv">
                    <h1>FOLLOW US</h1>
                    <div className="socialMedia"> <Image src={png?.insta}/> <Image src={png?.linkedin}/> </div>
                </div>
                <div className="subDiv">
                <h1>mettā muse Accepts</h1>
                <div> <Image src={png?.pay1}/> <Image src={png?.pay2}/> <Image src={png?.pay3}/> <Image src={png?.pay4}/> <Image src={png?.pay5}/> <Image src={png?.pay6}/> </div>
                </div>
            </div>
          </div>
      </div>
      <div className="copyright"><p>Copyright © 2023 mettamuse. All rights reserved.</p></div>
    </div>
  )
}

export default Footer