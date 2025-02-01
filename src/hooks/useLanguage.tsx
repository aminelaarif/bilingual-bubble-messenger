import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  fr: {
    welcome: 'Bienvenue',
    send: 'Envoyer',
    placeholder: 'Écrivez votre message...',
    projectStatus: 'Statut du projet',
    professionals: 'Professionnels Partenaires',
    technicians: 'Techniciens Affectés',
    interventions: 'Interventions Planifiées',
    notifications: 'Notifications',
    projectTracking: 'Suivi de Projet',
  },
  en: {
    welcome: 'Welcome',
    send: 'Send',
    placeholder: 'Type your message...',
    projectStatus: 'Project Status',
    professionals: 'Partner Professionals',
    technicians: 'Assigned Technicians',
    interventions: 'Planned Interventions',
    notifications: 'Notifications',
    projectTracking: 'Project Tracking',
  },
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};