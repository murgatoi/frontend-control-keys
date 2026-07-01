module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Se estiver usando a App Router (Next 13+)
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Se estiver usando a Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Seus componentes reutilizáveis
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Substitui ou adiciona a Poppins como a fonte sans padrão
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Identidade Base (Inspirada na Bandeira de Franca)
        primary: '#0D47A1',       // Azul Francano (Botões, Topbar, Bordas em Foco)
        accent: '#FBC02D',        // Amarelo Ouro (Avisos/Chaves Pendentes)
        error: '#D32F2F',         // Vermelho Alerta (Alertas e Erros)
        backgroundColor: {
          'main': '#F8F9FA',   // bg-main
          'card': '#FFFFFF',   // bg-card
          'dark-blue': '#0D47A1', // bg-dark-blue
          'disabled': '#E2E8F0',  // bg-disabled (conforme vimos antes)
        },
        input: {
          // Cores do Input ATIVO
          bgActive: '#FFFFFF',      // Fundo branco puro para digitação
          textActive: '#212121',    // Texto escuro (conforto visual para leitura)
          borderActive: '#0D47A1',  // Borda cinza clara padrão
          placeholder: '#94A3B8',   // Placeholder cinza azulado suave

          // Cores do Input NÃO ATIVO (Disabled)
          bgDisabled: '#E2E8F0',    // Fundo cinza médio (indica campo bloqueado)
          textDisabled: '#64748B',  // Texto cinza fosco (legível, mas secundário)
          borderDisabled: '#CBD5E1',// Borda desativada sutil
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};