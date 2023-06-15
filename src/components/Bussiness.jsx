import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import {AiOutlineThunderbolt} from 'react-icons/ai';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`bg-card-custom flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain text-white" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <div className="flex items-center">
          Capabilities <AiOutlineThunderbolt/>
        </div>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With InfinityChat, you can chat with anyone, anywhere, 
        anytime, without any language barriers. Its advanced language processing 
        algorithms enable it to understand and translate multiple languages in 
        real-time, making it a powerful tool for global communication.
      </p>
      <Button styles={`mt-10`} url="#pricingPlan" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;