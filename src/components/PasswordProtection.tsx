import React, { useState } from 'react';
import { Lock, AlertCircle } from 'lucide-react';

interface PasswordProtectionProps {
  onSuccess: () => void;
}

export function PasswordProtection({ onSuccess }: PasswordProtectionProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    // Replace this with your desired password
    const correctPassword = 'AdrianoPD';

    if (password === correctPassword) {
      // Store authentication in localStorage
      localStorage.setItem('choreograph-auth', 'true');
      onSuccess();
    } else {
      setError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-neutral-900 rounded-3xl p-8 border border-white/5">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-white/80" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Password Protected</h1>
            <p className="text-white/60 text-center">
              This case study is private. Please enter the password to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`
                  w-full px-4 py-3 bg-white/5 rounded-xl border 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 
                  transition-all duration-200
                  ${error 
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-white/10 focus:border-white/20 focus:ring-white/10'
                  }
                `}
                placeholder="Enter password"
                required
              />
              {error && (
                <div className="mt-2 flex items-center gap-2 text-red-500 text-sm animate-fadeIn">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Incorrect password. Please try again.</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !password}
              className="w-full px-6 py-3 bg-white text-black rounded-xl 
                hover:bg-white/90 transition-all duration-200 
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-offset-neutral-900 focus:ring-white/20
                active:scale-[0.98] transform"
            >
              {isSubmitting ? 'Verifying...' : 'Continue'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 