import React from 'react'
import MyServicesCard from '../sub/MyServicesCard'
import { Github, Linkedin, Twitter, Mail, Code, Database, Globe, Server, Smartphone, Layers } from "lucide-react"
import Title from '../sub/Title'
import { motion } from "framer-motion";
import { textVariant } from '@/utils/motion';
import { styles } from '@/utils/styles';
import Image from 'next/image';
const ServicesSection = () => {
  return (
         
         <section className="min-h-screen flex flex-col justify-center items-center  py-20">
         <div className=" mx-auto">
           {/* <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
             Services
           </h2> */}
            <motion.div variants={textVariant()} className="mb-8">
        <p className={styles.sectionSubText}>Service that I provide!</p>
        <h2 className={`${styles.sectionHeadText} `}>
          <Title title="Services" />
        
        </h2>
      </motion.div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
             <MyServicesCard
               icon={<Globe className="h-10 w-10 text-cyan-400" />}
               title="Web Development"
               description="Creating responsive, performant websites and web applications using modern frameworks and best practices."
             />
             <MyServicesCard
               icon={<Smartphone className="h-10 w-10 text-purple-400" />}
               title="Mobile Development"
               description="Building cross-platform mobile applications that deliver native-like experiences with React Native."
             />
             <MyServicesCard
               icon={<Server className="h-10 w-10 text-blue-400" />}
               title="Backend Development"
               description="Designing robust, scalable server-side solutions and APIs with Node.js, Express, and more."
             />
             <MyServicesCard
               icon={<Database className="h-10 w-10 text-green-400" />}
               title="Database Design"
               description="Creating efficient database schemas and implementing solutions with SQL and NoSQL databases."
             />
             <MyServicesCard
               icon={<Code className="h-10 w-10 text-pink-400" />}
               title="Frontend Architecture"
               description="Developing maintainable, scalable frontend architectures with modern JavaScript frameworks."
             />
             <MyServicesCard
               icon={<Layers className="h-10 w-10 text-yellow-400" />}
               title="Full Stack Solutions"
               description="Delivering end-to-end solutions that integrate frontend, backend, and database technologies."
             />
           </div>
         </div>
       </section>
  )
}

export default ServicesSection