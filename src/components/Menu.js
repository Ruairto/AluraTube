import SVG from "../assets/vetor.svg";
import SVGlupa from "../assets/lupa.svg";
import SVGDark from "../assets/darkmode.svg";
import PNGBanner from "../assets/Banner.png"

export default function Menu() {
  return (
    <div className="menu_e_banner">
      <section className="header_menu">
        <img className="header_logo" alt="logo" src={SVG}></img>
        <div className="header_duo_pesquisa">
          <input className="header_input" placeholder="Video"></input>
          <button className="header_input_button">
            <img alt="lupa" src={SVGlupa}></img>
          </button>
        </div>
        <img className="dark_mode" alt="Dark Mode Buttton" src={SVGDark}></img>
      </section>
      <section className="section_banner">
        <img className="menu_banner" alt="Banner" src={PNGBanner}>
        </img>
      </section>
    </div> 
    
  );
}
