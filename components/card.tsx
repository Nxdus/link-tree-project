import Link from "next/link";
import { motion } from "framer-motion";

const Card = () => (
    <>
        <section>
            <div className="main-box flex flex-col justify-center items-center w-[480px] h-[280px]">
                <div className="card flex flex-col justify-center items-center">
                    <motion.img src="./assets/picture.jpg" alt="my-image" className="w-[120px] h-[120px] rounded-[35px]" 
                          animate={{
                            scale: [1, 1.1, 1],
                            borderRadius: ["35px", "40px", "35px"]
                          }}
                          transition={{
                            duration: 5,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                          }}/>
                    <div className="param w-[416px] h-[63px] mt-[26px] text-white font-medium text-xl text-center">
                        <p>Hi, I’m Peeranut Sriprathum (Paitong)</p>
                        <p>Rajsimawittayalai School</p>
                    </div>
                </div>
                <div className="button flex gap-5 w-auto h-auto mt-[26px]">
                    <Link href={'https://www.instagram.com/_.ptxz/'}>
                        <motion.button 
                        whileHover={{scale: 1.1}} 
                        whileTap={{ scale: 0.9 }} 
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        className="github flex justify-center items-center w-[150px] h-[45px] bg-gradient-to-r from-[#6228D7] from-0% via-[#EE2A7B] via-50% to-[#F9CE34] to-100% rounded-full">
                            <img src="./assets/instagram.svg" alt="Github" className="w-auto h-[25px] mr-4" />
                            <p className="pr-3 text-white font-medium text-[16px]">Instagram</p>
                        </motion.button>
                    </Link>
                    <Link href={'https://fb.me/peeranutSriprathumZ/'}>
                        <motion.button
                        whileHover={{scale: 1.1}} 
                        whileTap={{ scale: 0.9 }} 
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        className="github flex justify-center items-center w-[150px] h-[45px] bg-gradient-to-r from-[#3A5795] to-[#2B4886] rounded-full">
                            <img src="./assets/facebook-f.svg" alt="Github" className="w-auto h-[25px] mr-4" />
                            <p className="pr-3 text-white font-medium text-[16px]">facebook</p>
                        </motion.button>
                    </Link>
                    <Link href={'https://github.com/Nxdus'}>
                        <motion.button
                        whileHover={{scale: 1.1}} 
                        whileTap={{ scale: 0.9 }} 
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        className="github flex justify-center items-center w-[150px] h-[45px] bg-white rounded-full">
                            <img src="./assets/github.svg" alt="Github" className="w-auto h-[25px] mr-4" />
                            <p className="pr-3 text-black font-medium text-[16px]">Github</p>
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    </>
)

export default Card;