import { useContext } from "react";
import { Link } from "react-router-dom";
import { LinksNavMyAccountContext } from "../contexts/linksMyAcount.context";

import { linksMyAccount } from "../contexts/linksMyAcount.context";

const MyAccountNav = () => {

  const { link, activeLink } = useContext(LinksNavMyAccountContext);

  return (
    <div className="myAccount myAccount__page">
      <div className="myAccount__container">
        <div className="myAccount__nav">
         { linksMyAccount.map( el => (
           <Link 
             to={el.linkTo} 
             className= {`btn  myAccount__link ${ link === el.linkTo ? 'btn__main' : `btn__inactive` } `}
             
             onClick={() => activeLink(el.linkTo)}
           >
             { el.title }
           </Link>
         ))}
        </div>
      </div>
    </div>
  )
}

export default MyAccountNav;
