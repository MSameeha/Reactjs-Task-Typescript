import "./footer.css";
import {
	FaLinkedinIn,
	FaYoutube,
} from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className="fixed-footer">
      <div className="container">
        <div className="row">
          <div className="col-left">
            <h3 className="copyright" >AboutUs</h3>

          </div>
          <div className="col-right">
            <div className="social-media-icons">
              <a
                className="foo-link"
                href="https://www.linkedin.com/in/recroot"
                target="_blank"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                className="foo-link"
                href="https://youtube.com/channel/recroot"
                target="_blank"
              >
                <FaYoutube size={30} />
              </a>
            </div>
            </div>
        </div>
      </div>
    </footer>
  );
}




// export const Footer = () =>
// {
// 	return (
// 		<div className="footer">
// 			<div className="foo-div-main">
// 				<div className="foo-li foo-div-tm">
// 					<p>@recroot</p>
// 				</div>
// 				<ul className="Nav-ul-main foot-ul">
// 					<NavLink
// 						to="/about"
// 						className="foo-li Nav-li"
// 					>
// 						About Us
// 					</NavLink>
// 				</ul>
//         <div className="foo-div-logos">
// 						<a
// 							className="foo-link"
// 							href="https://instagram.com/ecellvce?igshid=7jx0mp2y8kkp"
// 							target="_blank"
// 						>
// 							<FaInstagram size={30} />
// 						</a>
// 						<a
// 							className="foo-link"
// 							href="https://www.linkedin.com/in/swayamvce"
// 							target="_blank"
// 						>
// 							<FaLinkedinIn size={30} />
// 						</a>
// 						<a
// 							className="foo-link"
// 							href="https://youtube.com/channel/UCoVsbo-Sxgda-efVL6QuH3g"
// 							target="_blank"
// 						>
// 							<FaYoutube size={30} />
// 						</a>
// 						<a className="foo-link" href="#" target="_blank">
// 							<FaSpotify size={30} />
// 						</a>
// 					</div>
// 			</div>
// 		</div>
// 	);
// };
