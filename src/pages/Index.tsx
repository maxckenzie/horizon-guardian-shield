
import React from 'react';
import { Shield, Camera, Bell, Zap, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const services = [
    {
      icon: Camera,
      title: "CCTV & Monitoramento",
      description: "Sistemas de câmeras de alta definição com monitoramento 24/7 e acesso remoto.",
      features: ["HD 4K", "Visão Noturna", "Acesso Mobile", "Gravação em Nuvem"]
    },
    {
      icon: Zap,
      title: "Automação de Portões",
      description: "Controle inteligente de portões com acesso por app, controle remoto e biometria.",
      features: ["Controle por App", "Biometria", "Backup de Energia", "Histórico de Acesso"]
    },
    {
      icon: Bell,
      title: "Sistemas de Alarme",
      description: "Proteção completa com sensores de movimento e notificações instantâneas.",
      features: ["Sensores Inteligentes", "Notificação SMS", "Central 24h", "Backup GSM"]
    },
    {
      icon: Shield,
      title: "Consultoria em Segurança",
      description: "Análise personalizada e projeto de segurança adequado às suas necessidades.",
      features: ["Análise de Risco", "Projeto Personalizado", "Manutenção", "Suporte Técnico"]
    }
  ];

  const stats = [
    { number: "500+", label: "Clientes Satisfeitos" },
    { number: "24/7", label: "Monitoramento Ativo" },
    { number: "5 Anos", label: "de Experiência" },
    { number: "99.9%", label: "Uptime Garantido" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-blue-800/30 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">
                Guard<span className="text-cyan-400">Horizon</span>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Serviços
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Sobre
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contato
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold">
              Orçamento Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Proteja o que é mais
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Importante</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Soluções completas em segurança eletrônica, monitoramento inteligente e automação 
              de portões. Tecnologia de ponta para sua tranquilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Fale Conosco
              </Button>
              <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg">
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Nossos Serviços
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Oferecemos soluções completas em segurança eletrônica com tecnologia de última geração
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/60 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-6 text-center">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">
                Por que escolher a GuardHorizon?
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Com mais de 5 anos de experiência no mercado de segurança eletrônica, 
                oferecemos soluções personalizadas que combinam tecnologia avançada 
                com atendimento excepcional.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Tecnologia de Ponta</h4>
                    <p className="text-gray-300 text-sm">Equipamentos de última geração com garantia estendida</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Suporte 24/7</h4>
                    <p className="text-gray-300 text-sm">Monitoramento e suporte técnico ininterruptos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Instalação Profissional</h4>
                    <p className="text-gray-300 text-sm">Equipe certificada e treinamento completo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl backdrop-blur-sm border border-cyan-400/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Camera className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold">Câmeras HD</h5>
                    <p className="text-gray-300 text-sm">4K Ultra HD</p>
                  </div>
                  <div className="text-center">
                    <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold">Automação</h5>
                    <p className="text-gray-300 text-sm">Smart Control</p>
                  </div>
                  <div className="text-center">
                    <Bell className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold">Alarmes</h5>
                    <p className="text-gray-300 text-sm">Sensores Inteligentes</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold">Proteção</h5>
                    <p className="text-gray-300 text-sm">Total Security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-white mb-6">
              Entre em Contato
            </h3>
            <p className="text-xl text-gray-300 mb-12">
              Solicite um orçamento gratuito e personalizamos a melhor solução para você
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Telefone</h4>
                <p className="text-gray-300">(11) 9999-9999</p>
                <p className="text-gray-300">(11) 8888-8888</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">E-mail</h4>
                <p className="text-gray-300">contato@guardhorizon.com.br</p>
                <p className="text-gray-300">vendas@guardhorizon.com.br</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Endereço</h4>
                <p className="text-gray-300">São Paulo - SP</p>
                <p className="text-gray-300">Atendemos toda Grande SP</p>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-12 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Orçamento Gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Guard<span className="text-cyan-400">Horizon</span>
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 GuardHorizon. Todos os direitos reservados.
              <br />
              <span className="text-sm">Segurança e tecnologia em suas mãos.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
