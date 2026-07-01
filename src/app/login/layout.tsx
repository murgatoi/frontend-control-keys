import React from 'react';

import '../../css/global.css';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Aqui você pode colocar o fundo do hospital ou o gradiente escuro
    <div className="min-h-screen w-full bg-backgroundColor-main flex items-center justify-center">
      {children}
    </div>
  );
}