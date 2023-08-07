import logo from './assets/componentEslando-logo.png';
import tShirt from './assets/blue-tshirt.jpg';
import style from './App.module.css';

function App() {
  return (
   <div>
    <header>
      <img src={logo} alt="" />
      Product Details
    </header>
    
    <section>
      <div className={style.wrapper}>

        <div className={style.backgroundImage}>
          <img src={tShirt}/>
        </div>
        
        <div className={style.infoBox}>
          <h3> Product Details</h3>
          <ul>
            <li>Blue and ivory Horsebit print stretch cotton piquet</li>
            <li>Multicolour trim</li>
            <li>Short sleeve</li>
            <li>Made in Italy</li>
            <li>Fabric: 94% Cotton, 6% Elastane.</li>
            <li>Trimming: 100% Cotton.</li>
          </ul>
        </div>
      </div>
    </section>
   </div>
  )
}

export default App
