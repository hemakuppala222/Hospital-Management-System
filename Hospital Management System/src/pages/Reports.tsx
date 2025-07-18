import React, { useState } from 'react';
import { BarChart3, Download, Calendar, Filter, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedReport, setSelectedReport] = useState('overview');

  const reportTypes = [
    { id: 'overview', name: 'Hospital Overview', icon: BarChart3 },
    { id: 'financial', name: 'Financial Report', icon: DollarSign },
    { id: 'patient', name: 'Patient Analytics', icon: Users },
    { id: 'operational', name: 'Operational Metrics', icon: Activity }
  ];

  const overviewData = {
    totalPatients: 2847,
    newPatients: 156,
    totalRevenue: 284750,
    occupancyRate: 73,
    avgStayDuration: 4.2,
    patientSatisfaction: 4.8
  };

  const monthlyTrends = [
    { month: 'Jan', patients: 245, revenue: 28500, satisfaction: 4.6 },
    { month: 'Feb', patients: 267, revenue: 31200, satisfaction: 4.7 },
    { month: 'Mar', patients: 289, revenue: 33800, satisfaction: 4.8 },
    { month: 'Apr', patients: 298, revenue: 35100, satisfaction: 4.9 },
    { month: 'May', patients: 312, revenue: 36900, satisfaction: 4.8 },
    { month: 'Jun', patients: 325, revenue: 38200, satisfaction: 4.7 }
  ];

  const departmentStats = [
    { name: 'Emergency', patients: 456, revenue: 68400, avgWait: '15 min' },
    { name: 'General Medicine', patients: 789, revenue: 94680, avgWait: '25 min' },
    { name: 'Surgery', patients: 234, revenue: 117000, avgWait: '45 min' },
    { name: 'Pediatrics', patients: 345, revenue: 41400, avgWait: '20 min' },
    { name: 'Cardiology', patients: 198, revenue: 79200, avgWait: '30 min' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive hospital performance and operational reports</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-5 w-5 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Report Type Selection */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {reportTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedReport(type.id)}
              className={`flex items-center p-4 rounded-lg border-2 transition-colors ${
                selectedReport === type.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <type.icon className="h-6 w-6 mr-3" />
              <span className="font-medium">{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{overviewData.totalPatients.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Patients</div>
          <div className="text-xs text-green-600 mt-1">+{overviewData.newPatients} this month</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-green-600">${overviewData.totalRevenue.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Revenue</div>
          <div className="text-xs text-green-600 mt-1">+12% vs last month</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-purple-600">{overviewData.occupancyRate}%</div>
          <div className="text-sm text-gray-600">Occupancy Rate</div>
          <div className="text-xs text-yellow-600 mt-1">+3% vs last month</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-orange-600">{overviewData.avgStayDuration}</div>
          <div className="text-sm text-gray-600">Avg Stay (days)</div>
          <div className="text-xs text-green-600 mt-1">-0.3 vs last month</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-yellow-600">{overviewData.patientSatisfaction}/5</div>
          <div className="text-sm text-gray-600">Satisfaction</div>
          <div className="text-xs text-green-600 mt-1">+0.2 vs last month</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-red-600">8</div>
          <div className="text-sm text-gray-600">Critical Patients</div>
          <div className="text-xs text-red-600 mt-1">-2 vs yesterday</div>
        </div>
      </div>

      {/* Charts and Detailed Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Trends</h3>
          <div className="space-y-4">
            {monthlyTrends.map((month, index) => (
              <div key={month.month} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-sm font-medium text-gray-900 w-8">{month.month}</div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Patients: {month.patients}</span>
                      <span className="text-gray-600">Revenue: ${month.revenue.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(month.patients / 350) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-yellow-600">★ {month.satisfaction}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Performance</h3>
          <div className="space-y-4">
            {departmentStats.map((dept) => (
              <div key={dept.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{dept.name}</h4>
                  <span className="text-sm text-gray-500">Avg Wait: {dept.avgWait}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Patients:</span>
                    <span className="font-medium ml-2">{dept.patients}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-medium ml-2">${dept.revenue.toLocaleString()}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(dept.patients / 800) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics Tables */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Operational Efficiency Metrics</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">92%</div>
              <div className="text-sm text-gray-600">Appointment Adherence</div>
              <div className="text-xs text-green-600 mt-1">+5% improvement</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-green-600">18 min</div>
              <div className="text-sm text-gray-600">Avg Response Time</div>
              <div className="text-xs text-green-600 mt-1">-3 min improvement</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">96%</div>
              <div className="text-sm text-gray-600">Staff Utilization</div>
              <div className="text-xs text-yellow-600 mt-1">Optimal range</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">2.1%</div>
              <div className="text-sm text-gray-600">Readmission Rate</div>
              <div className="text-xs text-green-600 mt-1">-0.5% improvement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Report Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Report Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="h-5 w-5 mr-2 text-blue-600" />
            <span className="text-gray-700">Schedule Monthly Report</span>
          </button>
          <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
            <span className="text-gray-700">Performance Dashboard</span>
          </button>
          <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-5 w-5 mr-2 text-purple-600" />
            <span className="text-gray-700">Export All Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;