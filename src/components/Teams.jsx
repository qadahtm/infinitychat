import React from 'react';
import styles from "../style";
import {AiOutlineTeam} from 'react-icons/ai';
import {teams} from '../constants/index';


const Teams = () => {
    return (
        <section id="team" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
            <h2 className={styles.heading2}>
                <div className='flex items-center gap-2'>
                    Team <AiOutlineTeam />
                </div>
            </h2>
            <div className={`${styles.paragraph} flex flex-wrap justify-center items-center my-4`}>
                {teams.map((memeber) => {
                    return(
                        <div key={memeber.id} className="max-w-sm rounded overflow-hidden m-4 transition duration-300">
                            <div className='flex justify-center'>
                                <img className="w-[100px] rounded-full  " src={memeber.image} alt="Team Member 1" />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-center">{memeber.name}</div>
                                <p className="text-gray-400 text-base text-center max-w-[200px]">{memeber.role}</p>
                            </div>
                            <div className="flex flex-row justify-center md:mt-0 mt-6">
                                {memeber.socialMedia.map((social, index) => (
                                    <img
                                        key={social.id}
                                        src={social.icon}
                                        alt={social.id}
                                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                                            index !== memeber.socialMedia.length - 1 ? "mr-6" : "mr-0"
                                        }`}
                                        onClick={() => window.open(social.link)}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    );
};




export default Teams;
