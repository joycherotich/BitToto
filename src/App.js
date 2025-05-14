import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import OTPVerification from './components/auth/OTPVerification';
import DashboardPage from './components/pages/DashboardPage';
import SideBar from './components/layout/SideBar';
import WalletOverview from './components/wallet/WalletOverview';
import Wallet from './components/pages/Wallet';
import Settings from './components/pages/Settings';
import DepositBitcoin from './components/wallet/DepositBitcoin';
import ChildAccessSettings from './components/settings/ChildAccessSettings';
import ParentSettings from './components/settings/ParentSettings';
import Saving from './components/pages/Saving';
import SavingsProgressCard from './components/goals/SavingProgressCard';
import SavingGoalForm from './components/profile/SavingGoalForm';
import TransactionHistory from './components/wallet/TransactionHistory';
import KidDashboard from './components/pages/KidDashboard';
import MobileMenu from './components/navigation/MobileMenu';
import Puzzle from './components/gamification/Puzzle';
import PuzzleGame from './components/gamification/Puzzle';
import CreateChild from './components/pages/CreateChild';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
        <Route path="/SideBar" element={<SideBar />} />
        <Route path="/WalletOverview" element={<WalletOverview />} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/DepositBitcoin" element={<DepositBitcoin />} />
        <Route path="/settings/ChildAccessSettings" element={<ChildAccessSettings />} />
        <Route path="/settings/ParentSettings" element={<ParentSettings />} /> 
        <Route path="/Saving" element={<Saving />} />
        <Route path="/SavingProgressCard" element={<SavingsProgressCard />} />
        <Route path="/SavingGoalForm" element={<SavingGoalForm />} />
        <Route path="/TransactionHistory" element={<TransactionHistory />} />
        <Route path="/KidDashboard" element={<KidDashboard />} />
        <Route path="navigation/MobileMenu" element={<MobileMenu />} />
        <Route path="gamification/Puzzle" element={<PuzzleGame />} />
        <Route path="/CreateChild" element={<CreateChild />} />
      </Routes>
    </Router>
  );
};

export default App;
