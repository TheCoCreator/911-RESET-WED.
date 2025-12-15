import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { CheckoutPage } from './components/CheckoutPage';
import { MemberLoginGate } from './components/member/MemberLoginGate';
import { MemberApp } from './components/member/MemberApp';
import { AdminLoginGate } from './components/admin/AdminLoginGate';
import { AdminApp } from './components/admin/AdminApp';

const App: React.FC = () => {
  // 'view' controls which part of the app is visible: landing, checkout, member, or admin.
  // In a real app, auth + routing would be handled by a router + backend.
  const [view, setView] = useState<'landing' | 'checkout' | 'member' | 'admin'>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const renderView = () => {
    switch (view) {
      case 'landing':
        return (
          <LandingPage 
            onStartCheckout={() => setView('checkout')} 
            // onOpenAdmin is optional/hidden in UI but can be triggered if needed
            // To test admin, you can manually set view to 'admin' in code or add a hidden button
          />
        );
      case 'checkout':
        return <CheckoutPage onBack={() => setView('landing')} />;
      case 'member':
        if (!isAuthenticated) {
          return (
            <MemberLoginGate 
              onAuthenticated={() => {
                setIsAuthenticated(true);
              }} 
            />
          );
        }
        return (
          <MemberApp 
            onLogout={() => {
              setIsAuthenticated(false);
              setView('landing');
            }} 
          />
        );
      case 'admin':
        if (!isAdminAuthenticated) {
            return (
                <AdminLoginGate 
                    onAuthenticated={() => {
                        setIsAdminAuthenticated(true);
                    }}
                />
            )
        }
        return (
            <AdminApp 
                onLogout={() => {
                    setIsAdminAuthenticated(false);
                    setView('landing');
                }}
            />
        )
      default:
        return <LandingPage onStartCheckout={() => setView('checkout')} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 font-sans">
      {renderView()}
      
      {/* Hidden Admin Access for Demo purposes - Bottom Right Corner */}
      <div className="fixed bottom-2 right-2 opacity-0 hover:opacity-100 transition-opacity z-50">
        <button 
            onClick={() => setView('admin')}
            className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-500"
        >
            Admin
        </button>
      </div>
    </div>
  );
};

export default App;