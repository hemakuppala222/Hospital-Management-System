import React from 'react';
import { 
  Users, 
  Settings, 
  Database, 
  Shield, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Server,
  HardDrive,
  Cpu,
  Wifi
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const systemMetrics = {
    totalUsers: 142,
    activeUsers: 89,
    systemUptime: '99.9%',
    dataBackupStatus: 'Completed',
    lastBackup: '2024-01-16 02:00 AM',
    storageUsed: 68,
    cpuUsage: 45,
    memoryUsage: 62,
    networkStatus: 'Optimal'
  };

  const recentActivities = [
    { time: '10:30 AM', action: 'User login', user: 'Dr. Martinez', type: 'info' },
    { time: '10:15 AM', action: 'System backup completed', user: 'System', type: 'success' },
    { time: '09:45 AM', action: 'Failed login attempt', user: 'Unknown', type: 'warning' },
    { time: '09:30 AM', action: 'Database maintenance', user: 'Admin', type: 'info' },
    { time: '09:00 AM', action: 'New user registered', user: 'Nurse Johnson', type: 'success' },
  ];

  const systemAlerts = [
    { type: 'warning', message: 'Storage usage above 65%', time: '2 hours ago' },
    { type: 'info', message: 'Scheduled maintenance tonight at 2 AM', time: '4 hours ago' },
    { type: 'success', message: 'Security patch applied successfully', time: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-600 mt-1">System administration and management dashboard</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <CheckCircle className="h-4 w-4 mr-1" />
            System Healthy
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Link to="/admin/users" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
              <p className="text-sm text-gray-600">Manage users and permissions</p>
            </div>
          </div>
        </Link>

        <Link to="/admin/settings" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100">
              <Settings className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">System Settings</h3>
              <p className="text-sm text-gray-600">Configure system parameters</p>
            </div>
          </div>
        </Link>

        <Link to="/admin/audit" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-100">
              <Database className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Audit Logs</h3>
              <p className="text-sm text-gray-600">View system activity logs</p>
            </div>
          </div>
        </Link>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-red-100">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Security Center</h3>
              <p className="text-sm text-gray-600">Monitor security status</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{systemMetrics.totalUsers}</div>
          <div className="text-sm text-gray-600">Total Users</div>
          <div className="text-xs text-green-600 mt-1">{systemMetrics.activeUsers} active now</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-green-600">{systemMetrics.systemUptime}</div>
          <div className="text-sm text-gray-600">System Uptime</div>
          <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-purple-600">{systemMetrics.storageUsed}%</div>
          <div className="text-sm text-gray-600">Storage Used</div>
          <div className="text-xs text-yellow-600 mt-1">Monitor closely</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-orange-600">{systemMetrics.cpuUsage}%</div>
          <div className="text-sm text-gray-600">CPU Usage</div>
          <div className="text-xs text-green-600 mt-1">Normal range</div>
        </div>
      </div>

      {/* System Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Cpu className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-sm font-medium text-gray-700">CPU Usage</span>
              </div>
              <span className="text-sm text-gray-600">{systemMetrics.cpuUsage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${systemMetrics.cpuUsage}%` }}></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <HardDrive className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-sm font-medium text-gray-700">Memory Usage</span>
              </div>
              <span className="text-sm text-gray-600">{systemMetrics.memoryUsage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${systemMetrics.memoryUsage}%` }}></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Server className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-sm font-medium text-gray-700">Storage Usage</span>
              </div>
              <span className="text-sm text-gray-600">{systemMetrics.storageUsed}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${systemMetrics.storageUsed}%` }}></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Wifi className="h-5 w-5 text-orange-600 mr-3" />
                <span className="text-sm font-medium text-gray-700">Network Status</span>
              </div>
              <span className="text-sm text-green-600">{systemMetrics.networkStatus}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Alerts</h3>
          <div className="space-y-3">
            {systemAlerts.map((alert, index) => (
              <div key={index} className={`flex items-start p-3 rounded-lg ${
                alert.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                alert.type === 'success' ? 'bg-green-50 border border-green-200' :
                'bg-blue-50 border border-blue-200'
              }`}>
                {alert.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />}
                {alert.type === 'success' && <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />}
                {alert.type === 'info' && <Activity className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent System Activities</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'warning' ? 'bg-yellow-500' :
                  activity.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">by {activity.user}</p>
                </div>
                <div className="text-xs text-gray-400 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backup Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Backup & Maintenance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">Last Backup</h4>
            <p className="text-sm text-gray-600">{systemMetrics.lastBackup}</p>
            <p className="text-xs text-green-600 mt-1">Successful</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">Next Backup</h4>
            <p className="text-sm text-gray-600">Tonight at 2:00 AM</p>
            <p className="text-xs text-blue-600 mt-1">Scheduled</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <Settings className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">Maintenance</h4>
            <p className="text-sm text-gray-600">System update pending</p>
            <p className="text-xs text-purple-600 mt-1">Schedule required</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;