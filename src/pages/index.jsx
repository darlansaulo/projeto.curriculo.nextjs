import HeaderComponent from '../components/headerComponents/HeaderComponent'
import BodyComponent from '../components/bodyComponents/BodyComponent'
import FooterComponent from '../components/footerComponents/FooterComponent'
import AsideComponent from '../components/bodyComponents/AsideComponent'
import SocialMediaComponent from '../components/socialMidiaShareComponent/SocialMediaComponent'

export default function Home() {
  return (
      <div className={`
           grid grid-rows-[150px_minmax(auto,_1fr)_32px] grid-cols-[100px_600px_auto] 
            h-screen w-screen pl-[18rem] pr-[24rem] pb-8 pt-8
           bg-gray-600
           font-['NotoSansMono-Light']
           grid-areas-layout
                
          
      `}> 
          <AsideComponent />
          <HeaderComponent titulo="Darlan Saulo de Freitas" tituloProfile="Com experiência de quase 4 anos na área de T.I, na parte de infra-estrutura, hoje venho me dedicando em ferramentas para desenvolvimento web. Com foco em aplicações React.js com framework Next.js"/>
          <BodyComponent 

                  // ExperienceComponent
                  tituloExp="Analista de Suporte" 
                  subTituloExp_1="Mindworks Informática" 
                  subTituloExp_2="Gerir chamados em ferramentas de suporte Service Desk(Pacote da Microsoft System Center: Service Manager 2016), seguindo SLA
                  em cima dos chamados e seu cíclo de vida(atendimento, conclusão e fechamento)."
                  subTituloExp_3="Suporte com acesso remoto para soluções de instalações de softwares, configurações do Windows e problemas de redes."
                  subTituloExp_4="Solucionar problemas de hardware(Instalação e verificação de peças) e software em (sistema operacional windows 7,10)."
                  subTituloExp_5="Controle de usuários e grupos com a ferramenta Active Directory(AD) da Microsoft."

                  // SkillCompotenceComponent
                  tituloSkill="Infraestrutura" 
                  subTituloSkill_1="Experiência em suporte técnico, lidando com ferramentas de Service Desk, com controle de usuários, grupos,
                  monitoramento de sistemas, e também soluções de hardware, software e rede."
                  tituloSkill_2="Desenvolvimento"
                  subTituloSkill_2="Noções de desenvolvimento em aplicações responsivas web, em React, usando framework Next.js."
                  subTituloSkill_3="Noções de tecnologias: HTML, CSS, JavaScript, Tailwind Css, Bootstrap, Ajax(Manipulação de API), Git e github."
                  subTituloSkill_4=""

                  // EducationComponent
                  tituloEduca="Bacharelado em Sistema de informação" 
                  subTituloEduca_1="FAESA – Centro Universitário Espírito Santense"
                  subTituloEduca_2="6º Período - Trancado - Vitória/ES" 
 
                  />
          <FooterComponent />
          <SocialMediaComponent/>
      </div>
  )
}
