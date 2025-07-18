import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatCard from '../components/StatCard';
import {
  Users,
  Calendar,
  DollarSign,
  Activity,
  Bed,
  UserCheck,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'register':
        navigate('/patients');
        break;
      case 'appointment':
        navigate('/appointments');
        break;
      case 'emergency':
        navigate('/patients');
        // In a real app, this would open an emergency admission modal
        break;
      case 'report':
        navigate('/reports');
        break;
      case 'lab':
        navigate('/laboratory');
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, Dr. Wilson. Here's what's happening at your hospital today.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Today</p>
            <p className="text-lg font-semibold text-gray-900">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Patients"
          value="2,847"
          change="+12% from last month"
          changeType="increase"
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Today's Appointments"
          value="47"
          change="8 pending"
          changeType="neutral"
          icon={Calendar}
          color="green"
        />
        <StatCard
          title="Revenue (This Month)"
          value="$84,290"
          change="+8.2% from last month"
          changeType="increase"
          icon={DollarSign}
          color="yellow"
        />
        <StatCard
          title="Bed Occupancy"
          value="73%"
          change="187/256 beds"
          changeType="neutral"
          icon={Bed}
          color="purple"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Staff"
          value="142"
          change="12 on duty now"
          changeType="neutral"
          icon={UserCheck}
          color="blue"
        />
        <StatCard
          title="Critical Patients"
          value="8"
          change="-2 from yesterday"
          changeType="decrease"
          icon={AlertTriangle}
          color="red"
        />
        <StatCard
          title="Lab Tests Today"
          value="89"
          change="+15 from yesterday"
          changeType="increase"
          icon={Activity}
          color="green"
        />
        <StatCard
          title="Patient Satisfaction"
          value="4.8/5"
          change="+0.2 this quarter"
          changeType="increase"
          icon={TrendingUp}
          color="purple"
        />
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { time: '10:30 AM', action: 'New patient registered', details: 'John Smith - Emergency', type: 'patient' },
                { time: '10:15 AM', action: 'Lab results ready', details: 'Blood work for Sarah Johnson', type: 'lab' },
                { time: '09:45 AM', action: 'Appointment scheduled', details: 'Dr. Martinez - 2:00 PM', type: 'appointment' },
                { time: '09:30 AM', action: 'Discharge completed', details: 'Room 204 - Michael Brown', type: 'discharge' },
                { time: '09:00 AM', action: 'Staff check-in', details: 'Dr. Anderson arrived', type: 'staff' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'patient' ? 'bg-blue-500' :
                    activity.type === 'lab' ? 'bg-green-500' :
                    activity.type === 'appointment' ? 'bg-yellow-500' :
                    activity.type === 'discharge' ? 'bg-purple-500' : 'bg-gray-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500 truncate">{activity.details}</p>
                  </div>
                  <div className="text-xs text-gray-400">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <button
                onClick={() => handleQuickAction('register')}
                className="w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 bg-blue-500 hover:bg-blue-600 hover:shadow-md transform hover:-translate-y-0.5"
              >
                Register New Patient
              </button>
              <button
                onClick={() => handleQuickAction('appointment')}
                className="w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 bg-green-500 hover:bg-green-600 hover:shadow-md transform hover:-translate-y-0.5"
              >
                Schedule Appointment
              </button>
              <button
                onClick={() => handleQuickAction('emergency')}
                className="w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 bg-red-500 hover:bg-red-600 hover:shadow-md transform hover:-translate-y-0.5"
              >
                Emergency Admission
              </button>
              <button
                onClick={() => handleQuickAction('report')}
                className="w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 bg-purple-500 hover:bg-purple-600 hover:shadow-md transform hover:-translate-y-0.5"
              >
                Generate Report
              </button>
              <button
                onClick={() => handleQuickAction('lab')}
                className="w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 bg-yellow-500 hover:bg-yellow-600 hover:shadow-md transform hover:-translate-y-0.5"
              >
                Check Lab Results
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Department Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Department Status</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Emergency', status: 'Normal', patients: 12, color: 'green' },
              { name: 'ICU', status: 'Busy', patients: 8, color: 'yellow' },
              { name: 'Surgery', status: 'Critical', patients: 3, color: 'red' },
              { name: 'Cardiology', status: 'Normal', patients: 15, color: 'green' },
            ].map((dept, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="font-semibold text-gray-900">{dept.name}</h4>
                <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${
                  dept.color === 'green' ? 'bg-green-100 text-green-800' :
                  dept.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {dept.status}
                </div>
                <p className="text-sm text-gray-600 mt-1">{dept.patients} patients</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;