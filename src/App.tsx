import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full border border-slate-200">
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-3xl">🔑</span>
          <div>
            <h1 className="text-xl font-bold text-slate-800">Controle de Chaves</h1>
            <p className="text-sm text-slate-500">Hospital Regional Três Colinas</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-xs text-blue-800 font-medium">Status do Sistema</p>
          <p className="text-sm text-blue-900 mt-1">
            Backend pronto: <code className="bg-blue-100 px-1 rounded text-xs font-mono">http://localhost:8000</code>
          </p>
        </div>

        <button 
          onClick={() => alert('Tailwind CSS funcionando com Docker!')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 shadow-sm"
        >
          Iniciar Registro de Chave
        </button>
      </div>
    </div>
  );
}

export default App;