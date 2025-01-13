import ButtonContactZap from "@/components/button_contact_zap";
import "./index.css";
import TestimonialsSection from "./testimonials-sections";
import NavigateButton from "@/components/button_generalist";
import Image from 'next/image';

export default function Home() {
  return (
    /* Início */ 
    <>
    
      <div className="container__home">
        <h1>A <span className="highlight">MELHOR</span> CARNE,</h1>
        <h2>VOCÊ ENCONTRA AQUI</h2>
        <p>Casa de Carnes Rodeio II</p>
        <p>Rua Gonçalves Ledo, 791 - Centro - Urupês-SP</p>
      </div>

      {/* About */}
      <Image src="/açougue.png" alt="açougue" id="container__about" width={500} height={300} />
      <div className="textos">
        <h1>SOBRE NÓS</h1>
        <p>Desde 1999, a Casa de Carnes Rodeio II tem o compromisso de oferecer a melhor carne para você e sua família.
        Nossos produtos são selecionados e preparados com todo o cuidado e carinho que você merece.
        Venha nos visitar e conheça a qualidade dos nossos produtos.</p>
      </div>
      

      {/* Depoimentos */}
      <div className="container__depoimentos">
      <div className="container__stats">
        <div className="stat-box">
        <h3>Tempo de Mercado</h3>
        <p>50 anos</p>
        </div>
        <div className="stat-box">
        <h3>Quantidade de kg vendidos</h3>
        <p>+200.000 kg de carne</p>
        </div>
        <div className="stat-box">
        <h3>Já vendemos para mais de</h3>
        <p>10.000 clientes</p>
        </div>
      </div>
      <TestimonialsSection />
      </div>

      {/* O que comprar?*/}
      <div className="container__comprar">
            <h1>O que comprar?</h1>
            <div className="comprar__column">
              <div className="comprar__left">
                <p>Você já se pegou pensando sobre o que comprar para a sua ocasião especial?</p>
                <p>Não se preocupe, estamos aqui para ajudar!</p>
                <p>Deixe-nos guiar você na escolha dos melhores produtos para tornar seu evento inesquecível.</p>
              </div>
              <div className="comprar__right">
                <p>Clique no botão abaixo para acessar nosso guia de compras</p>
                <NavigateButton 
                url="./o-que-comprar"
                label ="Ver opções"
                />
              </div>
            </div>
      </div>
      {/* Contato */}
      <div className="container__contact" id="contato">
        <div className="contact__left">
          <div className="contact__hours">
            <h1>Horário de Atendimento</h1>
            <p>Segunda: 8h00 ~ 19h00</p>
            <p>Terça: 8h00 ~ 19h00</p>
            <p>Quarta: 8h00 ~ 19h00</p>
            <p>Quinta: 8h00 ~ 19h00</p>
            <p>Sexta: 8h00 ~ 19h00</p>
            <p>Sábado: 8h00 ~ 19h00</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>
        <div className="contact__right">
          <h1>Atendimento pelo telefone</h1>
          <h2>Será um imenso prazer atendê-lo</h2>
          <p>Você pode entrar em contato para tirar dúvidas e encomendar carnes.</p>
          <h1>(17) 98141-0234</h1>
          <ButtonContactZap
          message="Olá, Rogério! Gostaria de saber mais sobre os produtos e carnes" />
          </div>
      </div>

    

    
    </>
  );
}
