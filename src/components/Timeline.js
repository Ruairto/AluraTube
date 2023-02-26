import Canal from "../assets/logocanal.png";
import Lista from "./ListaItens";
import "./Timeline.css";

export default function Timeline() {
  return (
    <div>
      <section className="topo_timeline">
        <img className="logo_image" src={Canal} alt="logo"></img>
        <div className="titulos_canal">
          <h2 className="titulo_canal">Mario Souto (DevSoutinho)</h2>
          <h3 className="subtitulo_canal">Lead Software Engineer</h3>
        </div>
      </section>
      <section>
        <Lista>
          
        </Lista>
      </section>
    </div>
  );
}
