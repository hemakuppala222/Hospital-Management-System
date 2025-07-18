import React, { useState } from 'react';
import { Search, Plus, Filter, Edit, Trash2, Shield, User, UserCheck, Lock, Unlock } from 'lucide-react';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const users = [
    {
      id: 'U001',
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@hospital.com',
      role: 'Administrator',
      department: 'Administration',
      status: 'Active',
      lastLogin: '2024-01-16 09:30 AM',
      permissions: ['Full Access'],
      avatar: 'SW'
    },
    {
      id: 'U002',
      name: 'Dr. Michael Martinez',
      email: 'michael.martinez@hospital.com',
      role: 'Doctor',
      department: 'General Medicine',
      status: 'Active',
      lastLogin: '2024-01-16 08:15 AM',
      permissions: ['Patient Records', 'Appointments', 'Medical Records'],
      avatar: 'MM'
    },
    {
      id: 'U003',
      name: 'Nurse Lisa Johnson',
      email: 'lisa.johnson@hospital.com',
      role: 'Nurse',
      department: 'Nursing',
      status: 'Active',
      lastLogin: '2024-01-16 07:45 AM',
      permissions: ['Patient Records', 'Ward Management'],
      avatar: 'LJ'
    },
    {
      id: 'U004',
      name: 'John Smith',
      email: 'john.smith@hospital.com',
      role: 'Receptionist',
      department: 'Front Desk',
      status: 'Active',
      lastLogin: '2024-01-16 08:00 AM',
      permissions: ['Appointments', 'Patient Registration'],
      avatar: 'JS'
    },
    {
      id: 'U005',
      name: 'Dr. Emily Thompson',
      email: 'emily.thompson@hospital.com',
      role: 'Doctor',
      department: 'Dermatology',
      status: 'Inactive',
      lastLogin: '2024-01-10 02:30 PM',
      permissions: ['Patient Records', 'Medical Records'],
      avatar: 'ET'
    },
    {
      id: 'U006',
      name: 'Mark Davis',
      email: 'mark.davis@hospital.com',
      role: 'Lab Technician',
      department: 'Laboratory',
      status: 'Active',
      lastLogin: '2024-01-16 06:30 AM',
      permissions: ['Laboratory', 'Test Results'],
      avatar: 'MD'
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role.toLowerCase() === filterRole.toLowerCase();
    const matchesStatus = filterStatus === 'all' || user.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesRole && matchesStatus;
  });

  const rolePermissions = {
    'Administrator': ['Full Access', 'User Management', 'System Settings', 'All Modules'],
    'Doctor': ['Patient Records', 'Medical Records', 'Appointments', 'Prescriptions'],
    'Nurse': ['Patient Records', 'Ward Management', 'Medication Administration'],
    'Receptionist': ['Appointments', 'Patient Registration', 'Basic Records'],
    'Lab Technician': ['Laboratory', 'Test Results', 'Sample Management'],
    'Pharmacist': ['Pharmacy', 'Medication Management', 'Inventory']
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-1">Manage user accounts, roles, and permissions</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Add New User
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
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="all">All Roles</option>
                <option value="administrator">Administrator</option>
                <option value="doctor">Doctor</option>
                <option value="nurse">Nurse</option>
                <option value="receptionist">Receptionist</option>
                <option value="lab technician">Lab Technician</option>
              </select>
              <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{users.length}</div>
          <div className="text-sm text-gray-600">Total Users</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-green-600">
            {users.filter(u => u.status === 'Active').length}
          </div>
          <div className="text-sm text-gray-600">Active Users</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-red-600">
            {users.filter(u => u.role === 'Administrator').length}
          </div>
          <div className="text-sm text-gray-600">Administrators</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-purple-600">
            {users.filter(u => u.role === 'Doctor').length}
          </div>
          <div className="text-sm text-gray-600">Doctors</div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">User Accounts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role & Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                        {user.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 flex items-center">
                          {user.name}
                          {user.role === 'Administrator' && (
                            <Shield className="h-4 w-4 text-red-500 ml-2" />
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                        <div className="text-sm text-gray-500">ID: {user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.role}</div>
                    <div className="text-sm text-gray-500">{user.department}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs">
                      {user.permissions.slice(0, 2).map((permission, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1 mb-1">
                          {permission}
                        </span>
                      ))}
                      {user.permissions.length > 2 && (
                        <span className="text-xs text-gray-500">+{user.permissions.length - 2} more</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-900 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-green-600 hover:text-green-900 transition-colors">
                        {user.status === 'Active' ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-900 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Role Permissions Matrix */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Role Permissions Matrix</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(rolePermissions).map(([role, permissions]) => (
              <div key={role} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  {role === 'Administrator' && <Shield className="h-4 w-4 text-red-500 mr-2" />}
                  {role === 'Doctor' && <UserCheck className="h-4 w-4 text-blue-500 mr-2" />}
                  {role !== 'Administrator' && role !== 'Doctor' && <User className="h-4 w-4 text-gray-500 mr-2" />}
                  {role}
                </h4>
                <div className="space-y-2">
                  {permissions.map((permission, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {permission}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;