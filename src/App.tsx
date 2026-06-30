import { Routes, Route } from 'react-router';
import LandingPage from '@/pages/LandingPage';
import AuthPage from '@/pages/AuthPage';
import OnboardingPage from '@/pages/OnboardingPage';
import MainApp from '@/pages/MainApp';
import ProfileDetailPage from '@/pages/ProfileDetailPage';
import ChatRoomPage from '@/pages/ChatRoomPage';
import PassportPage from '@/pages/PassportPage';
import SettingsPage from '@/pages/SettingsPage';
import PremiumPage from '@/pages/PremiumPage';
import SafetyPage from '@/pages/SafetyPage';
import AdminDashboard from '@/pages/AdminDashboard';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import ContactUs from '@/pages/ContactUs';
import SupportWidget from '@/components/SupportWidget';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/app" element={<MainApp />} />
        <Route path="/profile/:id" element={<ProfileDetailPage />} />
        <Route path="/chat/:id" element={<ChatRoomPage />} />
        <Route path="/passport/:id" element={<PassportPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <SupportWidget />
    </>
  );
}
