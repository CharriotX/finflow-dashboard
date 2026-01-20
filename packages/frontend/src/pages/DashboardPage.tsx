import { TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';

export const DashboardPage = () => {
  return (
    <div className="text-gray-900 dark:text-gray-100">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Good morning, Alex! 👋</h1>
        <p className="text-gray-600 dark:text-gray-400">Here's your financial overview for today</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm text-green-600 font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12.5%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">$4,250.80</p>
          <p className="text-gray-600 dark:text-gray-400">Total Balance</p>
        </div>
      </div>
    </div>
  );
};
