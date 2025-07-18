import React, { useState } from 'react';
import { Search, Filter, Download, Eye, AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';

const AuditLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterUser, setFilterUser] = useState('all');

  const auditLogs = [
    {
      id: 'AL001',
      timestamp: '2024-01-16 10:30:15',
      user: 'Dr. Sarah Wilson',
      userId: 'U001',
      action: 'User Login',
      module: 'Authentication',
      details: 'Successful login from IP 192.168.1.100',
      type: 'info',
      ipAddress: '192.168.1.100',
      userAgent: 'Chrome 120.0.0.0'
    },
    {
      id: 'AL002',
      timestamp: '2024-01-16 10:25:42',
      user: 'Dr. Michael Martinez',
      userId: 'U002',
      action: 'Patient Record Access',
      module: 'Patient Management',
      details: 'Accessed patient record P001 - John Smith',
      type: 'info',
      ipAddress: '192.168.1.105',
      userAgent: 'Firefox 121.0.0.0'
    },
    {
      id: 'AL003',
      timestamp: '2024-01-16 10:20:18',
      user: 'Unknown',
      userId: null,
      action: 'Failed Login Attempt',
      module: 'Authentication',
      details: 'Failed login attempt for user admin@hospital.com',
      type: 'warning',
      ipAddress: '203.0.113.45',
      userAgent: 'Chrome 119.0.0.0'
    },
    {
      id: 'AL004',
      timestamp: '2024-01-16 10:15:33',
      user: 'Nurse Lisa Johnson',
      userId: 'U003',
      action: 'Medication Administration',
      module: 'Pharmacy',
      details: 'Administered medication MED001 to patient P005',
      type: 'success',
      ipAddress: '192.168.1.110',
      userAgent: 'Safari 17.0.0.0'
    },
    {
      id: 'AL005',
      timestamp: '2024-01-16 10:10:07',
      user: 'System',
      userId: 'SYSTEM',
      action: 'Database Backup',
      module: 'System',
      details: 'Automated database backup completed successfully',
      type: 'success',
      ipAddress: 'localhost',
      userAgent: 'System Process'
    },
    {
      id: 'AL006',
      timestamp: '2024-01-16 10:05:22',
      user: 'Dr. Sarah Wilson',
      userId: 'U001',
      action: 'User Permission Change',
      module: 'User Management',
      details: 'Modified permissions for user U004 - John Smith',
      type: 'warning',
      ipAddress: '192.168.1.100',
      userAgent: 'Chrome 120.0.0.0'
    },
    {
      id: 'AL007',
      timestamp: '2024-01-16 09:58:44',
      user: 'Dr. Emily Thompson',
      userId: 'U005',
      action: 'System Settings Change',
      module: 'System Settings',
      details: 'Updated notification preferences',
      type: 'info',
      ipAddress: '192.168.1.115',
      userAgent: 'Edge 120.0.0.0'
    },
    {
      id: 'AL008',
      timestamp: '2024-01-16 09:45:11',
      user: 'Unknown',
      userId: null,
      action: 'Unauthorized Access Attempt',
      module: 'Security',
      details: 'Attempted to access admin panel without proper permissions',
      type: 'error',
      ipAddress: '198.51.100.25',
      userAgent: 'Chrome 118.0.0.0'
    }
  ];

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || log.type === filterType;
    const matchesUser = filterUser === 'all' || log.userId === filterUser;
    return matchesSearch && matchesType && matchesUser;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const uniqueUsers = [...new Set(auditLogs.filter(log => log.userId).map(log => ({ id: log.userId, name: log.user })))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Audit Logs</h1>
          <p className="text-gray-600 mt-1">Monitor system activities and security events</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="h-5 w-5 mr-2" />
          Export Logs
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search logs by action, user, or details..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="all">All Types</option>
                <option value="info">Info</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
              <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={filterUser}
                onChange={(e) => setFilterUser(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="all">All Users</option>
                {uniqueUsers.map((user) => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
              <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Log Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{auditLogs.length}</div>
          <div className="text-sm text-gray-600">Total Events</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-green-600">
            {auditLogs.filter(log => log.type === 'success').length}
          </div>
          <div className="text-sm text-gray-600">Success Events</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {auditLogs.filter(log => log.type === 'warning').length}
          </div>
          <div className="text-sm text-gray-600">Warning Events</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-red-600">
            {auditLogs.filter(log => log.type === 'error').length}
          </div>
          <div className="text-sm text-gray-600">Error Events</div>
        </div>
      </div>

      {/* Audit Logs Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">System Activity Logs</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User & Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(log.timestamp).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{log.user}</div>
                    <div className="text-sm text-gray-500">{log.action}</div>
                    <div className="text-sm text-gray-500">{log.module}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">
                      {log.details}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{log.ipAddress}</div>
                    <div className="text-sm text-gray-500 truncate max-w-32">{log.userAgent}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getTypeIcon(log.type)}
                      <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(log.type)}`}>
                        {log.type.charAt(0).toUpperCase() + log.type.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="p-1 text-blue-600 hover:text-blue-900 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Events Summary</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center">
                <XCircle className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-sm font-medium text-gray-900">Failed Login Attempts</span>
              </div>
              <span className="text-sm font-bold text-red-600">
                {auditLogs.filter(log => log.action.includes('Failed Login')).length}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3" />
                <span className="text-sm font-medium text-gray-900">Unauthorized Access</span>
              </div>
              <span className="text-sm font-bold text-yellow-600">
                {auditLogs.filter(log => log.action.includes('Unauthorized')).length}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <Info className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-sm font-medium text-gray-900">Permission Changes</span>
              </div>
              <span className="text-sm font-bold text-blue-600">
                {auditLogs.filter(log => log.action.includes('Permission')).length}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Critical Events</h3>
          <div className="space-y-3">
            {auditLogs
              .filter(log => log.type === 'error' || log.type === 'warning')
              .slice(0, 4)
              .map((log) => (
                <div key={log.id} className="flex items-start p-3 bg-gray-50 rounded-lg">
                  {getTypeIcon(log.type)}
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">{log.action}</p>
                    <p className="text-sm text-gray-500">{log.user} - {log.timestamp}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;