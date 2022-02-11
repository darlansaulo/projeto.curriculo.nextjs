import HeaderComponent from '../components/headerComponents/HeaderComponent'
import BodyComponent from '../components/bodyComponents/BodyComponent'
import FooterComponent from '../components/footerComponents/FooterComponent'
import DateYearComponent from '../components/bodyComponents/DateYearComponent'
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
          <DateYearComponent />
          <HeaderComponent titulo="Darlan Saulo de Freitas" tel="" github="github.com/darlansaulo" socialWork="" mail="darlansaulo@gmail.com"/>
          <BodyComponent titulo="Com experiência de quase 4 anos na área de T.I, na parte de infra-estrutura, hoje venho me dedicando em ferramentas para desenvolvimento web. Com foco em aplicações React.js com framework Next.js"/>
          <FooterComponent />
          <SocialMediaComponent/>
      </div>
  )
}
