import styles from "./style";
import { Teams, Pricing, Business, Clients, CTA, Footer, NavBar, Stats, Testimonials, Hero } from "./components";
import { ScrollToTop } from 'react-simple-scroll-up'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Pricing />
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        <Testimonials />
        <Clients />
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