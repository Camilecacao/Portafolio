
import CardProject from "@/components/CardProject";
import Card from '@/components/Card';


function projects() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 h-screen items-center px-5 sm:px-40 xl:px-40'> 
       <CardProject
       title="Landing Page"
       description=""
       bgCardImage="https://res.cloudinary.com/dvmytlesq/image/upload/v1707401887/Portafolio/Proyecto_1_wmrdau.jpg"
       urlDespliegue="https://magnificent-eclair-3ade75.netlify.app/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=df2454a9-07ad-4761-8458-7c80616cb944&submissionId=ae3bc148-8840-60f1-d6d8-63663283bc0f"
       urlRepositorio="https://github.com/Camilecacao/Proyectoventa2.git"
       />
       <CardProject
       title="CRUD App"
       description=""
       bgCardImage="https://res.cloudinary.com/dvmytlesq/image/upload/v1707401883/Portafolio/Proyecto_2_gi9tos.jpg"
       urlDespliegue="https://camilecacao.github.io/Proyecto-2/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=094d300d-7208-4cf3-98f6-32944386100a&submissionId=68186243-c64f-4e1a-7453-0c59a268daa7"
       urlRepositorio="https://github.com/Camilecacao/Proyecto-2.git"
       />
       <CardProject
       title="Dashboard de Datos"
       description=""
       bgCardImage="https://res.cloudinary.com/dvmytlesq/image/upload/v1707401884/Portafolio/Proyecto_3_lomduv.jpg"
       urlDespliegue="https://willowy-souffle-5e664b.netlify.app/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=348889ba-7756-4caa-a95b-7e5f152981df&submissionId=0306d15c-d756-da0d-febe-2a8afad6b2a2"
       urlRepositorio="https://github.com/Camilecacao/Proyecto3.git"
       />
       <CardProject
       title="Restaurant App"
       description=""
       bgCardImage="https://res.cloudinary.com/dvmytlesq/image/upload/v1707401883/Portafolio/Proyecto_4_ridjd3.jpg"
       urlDespliegue="https://lambent-rabanadas-7165f6.netlify.app/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=f00d0c67-6153-415e-ab72-8a1c19ab51ac&submissionId=6333cb8b-9f46-cacc-20ef-531acc9650f6"
       urlRepositorio="https://github.com/Camilecacao/LaCalma.git"
       />
       <CardProject
       title="E Commerce App"
       description=""
       bgCardImage="https://res.cloudinary.com/dvmytlesq/image/upload/v1707401883/Portafolio/Proyecto_5_stbxit.jpg"
       urlDespliegue="https://regal-chimera-e19bc1.netlify.app/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=134d16ea-0d59-4488-a460-186c1a208e6b&submissionId=67c53374-ce42-ef34-418a-0ba2728fd9b2"
       urlRepositorio="https://github.com/MadLucas/e-comerceudd.git"
       
       />
    </div>
  )
}

export default projects