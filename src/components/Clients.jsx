import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section id="clients" className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      <h2 className={`${styles.heading2} flex py-3 my-3 h-[200px]`}>
        <div className='flex items-center gap-2'>
            Our Clients
        </div>
      </h2>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;