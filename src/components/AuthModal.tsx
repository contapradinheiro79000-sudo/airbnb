import React, { useState } from 'react';
import { X, Mail, Lock, User as UserIcon, CheckCircle } from 'lucide-react';
import type { User } from '../types/authAndPayment';
import { authService } from '../services/authService';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'register';
  onClose: () => void;
  onSuccess: (user: User) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'login',
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const user =
        mode === 'register'
          ? await authService.register(name, email, password)
          : await authService.login(email, password);

      setLoading(false);
      setSuccessMsg(
        mode === 'login'
          ? 'Login realizado com sucesso!'
          : 'Conta criada com sucesso!'
      );

      setTimeout(() => {
        setSuccessMsg('');
        onSuccess(user);
        onClose();
      }, 800);
    } catch (err: any) {
      setLoading(false);
      setErrorMessage(err.message || 'Ocorreu um erro.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-md w-full shadow-2xl p-6 sm:p-8 animate-in fade-in duration-200">
        {/* Header com Botão Fechar */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 transition text-neutral-600"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="font-bold text-neutral-900 text-base">
            {mode === 'login' ? 'Entrar' : 'Cadastre-se'}
          </h3>
          <div className="w-8" />
        </div>

        {successMsg ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
            <p className="text-lg font-bold text-neutral-900">{successMsg}</p>
            <p className="text-sm text-neutral-500">Redirecionando...</p>
          </div>
        ) : (
          <div className="pt-6">
            <h2 className="text-xl font-bold text-neutral-900 mb-2">
              Bem-vindo ao Airbnb
            </h2>
            <p className="text-sm text-neutral-500 mb-6">
              {mode === 'login'
                ? 'Insira suas credenciais para acessar suas reservas.'
                : 'Crie uma conta gratuita para reservar e hospedar.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium">
                  {errorMessage}
                </div>
              )}
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Nome completo
                  </label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 rounded-xl text-sm focus:border-neutral-900 focus:outline-none transition"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 rounded-xl text-sm focus:border-neutral-900 focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 rounded-xl text-sm focus:border-neutral-900 focus:outline-none transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] hover:opacity-95 text-white font-bold py-3.5 rounded-xl shadow-md transition disabled:opacity-50 text-sm cursor-pointer"
              >
                {loading
                  ? 'Aguarde...'
                  : mode === 'login'
                  ? 'Entrar'
                  : 'Criar conta'}
              </button>
            </form>

            {/* Alternar entre login e cadastro */}
            <div className="mt-5 text-center text-sm text-neutral-600">
              {mode === 'login' ? (
                <>
                  Ainda não tem conta?{' '}
                  <button
                    onClick={() => setMode('register')}
                    className="font-bold text-neutral-900 underline ml-1 cursor-pointer"
                  >
                    Cadastre-se
                  </button>
                </>
              ) : (
                <>
                  Já possui uma conta?{' '}
                  <button
                    onClick={() => setMode('login')}
                    className="font-bold text-neutral-900 underline ml-1 cursor-pointer"
                  >
                    Entrar
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
