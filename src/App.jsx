import styles from "./style";
import { Teams, Pricing, Business, Clients, CTA, Footer, NavBar, Stats, Testimonials, Hero } from "./components";
import { ScrollToTop } from 'react-simple-scroll-up'

const App = () => (
  <div className="bg-unified w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-unified`} style={{position: "fixed", top: 0, zIndex: 100, width:"100%"}} >
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-unified ${styles.flexStart} mt-[100px]`}>
      <div className="flex-1">
        <Hero />
      </div>
    </div>
    
    <div className={`bg-unified ${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Clients />
        <Pricing />
        <Testimonials />
        <Teams />
        <CTA />
        <Footer />
      </div>
    </div>
    <div>
    <ScrollToTop
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="scroll-up-button"
        TransitionClassName="scroll-up-button-fade"
        ToggledStyle={{ right: 30, bottom: 70 }}
      />
    </div>
  </div>
);

export default App;