import React, { useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowUp } from "lucide-react";
import {
  transactionsData,
  referralHistory,
  withdrawals,
} from "../components/common/Helper";
import { FaCopy, FaShareAlt } from "react-icons/fa";
import {
  FaPlus,
  FaEdit,
  FaTrashAlt,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
// /

const Finance = () => {
  const [walletTab, setWalletTab] = React.useState("Overwiew");

  // withdraw funds
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [remarks, setRemarks] = useState("");

  const currentBalances = 45750.5;
  const pendingWithdrawal = 5000;
  const withdrawable = currentBalances - pendingWithdrawal;
  const handleWithdraw = () => {
    alert(`Request sent for ₹${amount} via ${paymentMethod}`);
    // Call backend here...
  };

  // transactions history
  const totalCredits = transactionsData
    .filter((t) => t.type === "credit")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalDebits = transactionsData
    .filter((t) => t.type === "debit")
    .reduce((acc, curr) => acc + curr.amount, 0);

  // payment methods

  const netBalance = totalCredits - totalDebits;
  const [activeTab, setActiveTab] = useState("bank");

  const currentBalance = 45750.5;
  const amounts = [500, 1000, 2000, 5000];

  // referral history
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredReferrals =
    selectedTab === "all"
      ? referralHistory
      : referralHistory.filter((r) => r.status === selectedTab);

  const handleCopy = () => {
    navigator.clipboard.writeText("PARTNER2024");
    alert("Referral code copied!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}

      <h1 className="text-2xl font-semibold">Wallet Overview</h1>
      <p className="text-sm text-gray-500">
        Track your earnings and manage withdrawals
      </p>

      <div className="flex gap-3 items-center my-7 overflow-x-auto">
        {" "}
        <button
          onClick={() => setWalletTab("Overwiew")}
          className={`bg-[#abd28f] hover:bg-[#82b85c] text-[#3d3d3d] duration-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition ${
            walletTab === "Overwiew" ? "bg-[#82b85c] text-white" : ""
          }`}
        >
          Overwiew
        </button>
        <button
          onClick={() => setWalletTab("withdrowFunds")}
          className={`bg-[#abd28f] hover:bg-[#82b85c] text-[#3d3d3d] duration-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition ${
            walletTab === "withdrowFunds" ? "bg-[#82b85c] text-white" : ""
          }`}
        >
          Withdraw Funds
        </button>
        <button
          onClick={() => setWalletTab("transactionhistory")}
          className={`bg-[#abd28f] hover:bg-[#82b85c] text-[#3d3d3d] duration-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition ${
            walletTab === "transactionhistory" ? "bg-[#82b85c] text-white" : ""
          }`}
        >
          Transaction History
        </button>
        <button
          onClick={() => setWalletTab("paymentmethods")}
          className={`bg-[#abd28f] hover:bg-[#82b85c] text-[#3d3d3d] duration-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition ${
            walletTab === "paymentmethods" ? "bg-[#82b85c] text-white" : ""
          }`}
        >
          Payment Methods
        </button>
        <button
          onClick={() => setWalletTab("referralearnings")}
          className={`bg-[#abd28f] hover:bg-[#82b85c] text-[#3d3d3d] duration-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition ${
            walletTab === "referralearnings" ? "bg-[#82b85c] text-white" : ""
          }`}
        >
          Referral Earnings
        </button>
      </div>
      {walletTab === "Overwiew" && (
        <div>
          {/* Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <StatCard
              title="Current Balance"
              value="₹45,750.50"
              growth="+12.5% from last month"
              icon={<DollarIcon />}
            />
            <StatCard
              title="Total Earned"
              value="₹1,25,340.75"
              growth="+8.2% from last month"
              icon={<ArrowUpRight size={18} />}
            />
            <StatCard
              title="Total Withdrawn"
              value="₹79,590.25"
              icon={<ArrowDown size={18} />}
            />
            <StatCard
              title="Pending Amount"
              value="₹2,500.00"
              valueColor="text-red-600"
              icon={<ArrowUp size={18} />}
            />
            <StatCard
              title="Bonus Earnings"
              value="₹8,945.30"
              growth="+15.3% from last month"
              icon={<ArrowUpRight size={18} />}
            />
          </div>
          {/* Monthly Earnings & Referral */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="col-span-2 bg-white p-5 rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-4">
                Monthly Earnings Trend
              </h2>
              <div className="text-center py-10">
                <p className="text-green-600 font-bold text-xl">+12.5%</p>
                <p className="text-sm text-gray-500">This Month</p>
                <p className="text-2xl font-bold mt-2">₹42,000</p>
                <p className="text-sm text-gray-500">Dec Earnings</p>
                <p className="text-xs text-gray-400 italic mt-3">Trending Up</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-4">
                Referral Performance
              </h2>
              <div className="text-sm space-y-3">
                <div className="flex justify-between">
                  <span>Total Referrals</span>
                  <span>42</span>
                </div>
                <div className="flex justify-between">
                  <span>Earnings per Referral</span>
                  <span>₹150</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-3">
                  <span>Total Referral Earnings</span>
                  <span>₹6300</span>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Transactions */}
          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Transactions</h2>
              <a href="#" className="text-sm text-blue-600 ">
                View All
              </a>
            </div>
            <div className="space-y-3 text-sm">
              {" "}
              <Transaction
                title="Commission for Course Sale - Advanced React Development"
                refId="TXN-2024-001"
                status="Completed"
                amount="+ ₹15,000"
                positive
              />
            </div>

            <Transaction
              title="Withdrawal to HDFC Bank - Account ending 4521"
              refId="WTH-2024-001"
              status="Completed"
              amount="- ₹15,000"
            />
          </div>{" "}
        </div>
      )}
      {walletTab === "withdrowFunds" && (
        <div>
          <div className="p-6 bg-gray-50 min-h-screen space-y-6">
            {/* Top Balance Summary */}
            <div className="bg-[#abd28f57] border border-green-300 p-6 rounded grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Current Balance</p>
                <p className="text-2xl font-bold text-gray-800">
                  ₹{currentBalances}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Withdrawals</p>
                <p className="text-2xl font-bold text-red-600">
                  ₹{pendingWithdrawal}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Withdrawable Amount</p>
                <p className="text-2xl font-bold text-green-700">
                  ₹{withdrawable}
                </p>
              </div>
            </div>

            {/* Limits Info */}
            <div className="bg-white p-4 rounded border text-sm text-gray-600">
              <strong className="text-black">⚠ Withdrawal Limits:</strong>{" "}
              Minimum ₹100, Maximum ₹50,000 per day. Processing time: 24-48
              hours. No charges for first 3 withdrawals per month.
            </div>

            {/* Form and Withdrawals */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Create Request */}
              <div className="bg-white p-6 rounded shadow space-y-4">
                <h3 className="font-semibold text-lg">
                  Create Withdrawal Request
                </h3>
                <div>
                  <label className="text-sm font-medium">
                    Withdrawal Amount (₹)
                  </label>
                  <input
                    type="number"
                    className="mt-1 w-full border px-3 py-2 rounded"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Min: ₹100 | Max: ₹{withdrawable.toLocaleString()} |
                    Available: ₹{withdrawable.toLocaleString()}
                  </p>
                </div>

                {/* Payment Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Payment Method Type
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        value="Bank Account"
                        checked={paymentMethod === "Bank Account"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="flex items-center gap-1">
                        <span role="img" aria-label="bank">
                          🏦
                        </span>{" "}
                        Bank Account
                      </span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        value="UPI"
                        checked={paymentMethod === "UPI"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="flex items-center gap-1">
                        <span role="img" aria-label="upi">
                          📱
                        </span>{" "}
                        UPI
                      </span>
                    </label>
                  </div>
                </div>

                {/* Conditional account dropdowns */}
                {paymentMethod === "Bank Account" && (
                  <div>
                    <label className="text-sm font-medium mb-1 block mt-4">
                      Select Bank Account
                    </label>
                    <select className="w-full border px-3 py-2 rounded">
                      <option>Choose bank account</option>
                      <option>HDFC Bank - ****5521</option>
                      <option>ICICI Bank - ****2390</option>
                    </select>
                  </div>
                )}

                {paymentMethod === "UPI" && (
                  <div>
                    <label className="text-sm font-medium mb-1 block mt-4">
                      Select UPI ID
                    </label>
                    <select className="w-full border px-3 py-2 rounded">
                      <option>Choose UPI ID</option>
                      <option>john.doe@paytm</option>
                      <option>john123@ybl</option>
                    </select>
                  </div>
                )}

                {/* Remarks */}
                <div>
                  <label className="text-sm font-medium">
                    Remarks (Optional)
                  </label>
                  <textarea
                    className="mt-1 w-full border px-3 py-2 rounded"
                    rows={3}
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="Add any additional notes for this withdrawal"
                  />
                </div>

                <button
                  onClick={handleWithdraw}
                  className="bg-[#abd28f] hover:bg-[#82b85c] text-[#3d3d3d] hover:text-white duration-300 py-2 w-full rounded  font-medium"
                  disabled={!amount || !paymentMethod}
                >
                  ↓ Request Withdrawal
                </button>
              </div>

              {/* Right Side – Recent Withdrawals */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Recent Withdrawals</h3>
                {withdrawals.map((w, i) => (
                  <div
                    key={i}
                    className={`border rounded p-4 shadow-sm bg-white space-y-1`}
                  >
                    <div className="flex justify-between">
                      <span className="font-semibold text-lg">
                        ₹{w.amount.toLocaleString()}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          w.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {w.status === "approved" ? "✅ Approved" : "⏳ Pending"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">📅 {w.date}</p>
                    <p className="text-sm text-gray-600">
                      {w.status === "approved" ? "🏦" : "📱"} {w.method}
                    </p>
                    {w.processed && (
                      <p className="text-xs text-gray-500">
                        Processed: {w.processed}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {walletTab === "transactionhistory" && (
        <div>
          <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-xl font-semibold mb-4">Transaction History</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">Total Credits</p>
                <p className="text-2xl font-bold text-green-600">
                  ₹{totalCredits}
                </p>
                <p className="text-sm text-gray-400">
                  {transactionsData.filter((t) => t.type === "credit").length}{" "}
                  transactions
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">Total Debits</p>
                <p className="text-2xl font-bold text-red-600">
                  ₹{totalDebits}
                </p>
                <p className="text-sm text-gray-400">
                  {transactionsData.filter((t) => t.type === "debit").length}{" "}
                  transactions
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">Net Balance</p>
                <p
                  className={`text-2xl font-bold ${
                    netBalance >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ₹{netBalance}
                </p>
                <p className="text-sm text-gray-400">
                  From {transactionsData.length} transactions
                </p>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="border border-gray-300 rounded p-2"
                />
                <select className="border border-gray-300 rounded p-2">
                  <option>All Types</option>
                  <option>Credit</option>
                  <option>Debit</option>
                </select>
                <select className="border border-gray-300 rounded p-2">
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>

            {/* Transactions */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-3">Transactions</h3>
              <div className="space-y-4">
                {transactionsData.map((t, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-3 border border-[#a2a2a2] rounded-lg px-4 py-3 shadow-md"
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`text-2xl ${
                          t.type === "credit"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {t.type === "credit" ? "↑" : "↓"}
                      </div>
                      <div>
                        <p className="font-medium">{t.title}</p>
                        <p className="text-sm text-gray-400">
                          {t.date} &nbsp; Ref: {t.ref}
                        </p>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                          {t.status}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`font-semibold ${
                        t.type === "credit" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {t.type === "credit" ? "+" : "-"}₹{t.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {walletTab === "paymentmethods" && (
        <div>
          {" "}
          <div className="p-6 bg-gray-50 min-h-screen space-y-6">
            {/* Wallet Recharge Section */}
            <div className="bg-[#abd28f57] border border-green-200 p-5 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 text-2xl">🪙</span>
                  <h2 className="text-lg font-bold text-green-700">
                    Wallet Recharge
                  </h2>
                </div>
                <button className="bg-[#abd28f] hover:bg-[#82b85c] text-[#3d3d3d] hover:text-white duration-300 px-4 py-2 rounded  flex items-center gap-2">
                  <FaPlus /> Recharge Now
                </button>
              </div>

              <p className="text-gray-600 mb-4">
                Current Balance:{" "}
                <strong>₹{currentBalance.toLocaleString()}</strong>
              </p>

              <div className="flex flex-wrap gap-4">
                {amounts.map((amt) => (
                  <div
                    key={amt}
                    className={`relative px-6 py-3 rounded border border-gray-300 cursor-pointer hover:border-green-500 ${
                      amt === 1000 ? "ring-2 ring-green-400" : ""
                    }`}
                  >
                    ₹{amt}
                    {amt === 1000 && (
                      <span className="absolute -top-2 -right-2 bg-green-300 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-md overflow-hidden">
              <div
                onClick={() => setActiveTab("bank")}
                className={`w-1/2 text-center py-2 font-medium cursor-pointer ${
                  activeTab === "bank"
                    ? "border-b-2 border-green-500 bg-white"
                    : "text-gray-500"
                }`}
              >
                Bank Accounts
              </div>
              <div
                onClick={() => setActiveTab("upi")}
                className={`w-1/2 text-center py-2 font-medium cursor-pointer ${
                  activeTab === "upi"
                    ? "border-b-2 border-green-500 bg-white"
                    : "text-gray-500"
                }`}
              >
                UPI IDs
              </div>
            </div>

            {/* Content Section */}
            {activeTab === "bank" ? (
              <>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Bank Accounts</h3>
                  <button className="bg-[#abd28f] hover:bg-[#82b85c] text-[#3d3d3d] hover:text-white  duration-300 px-4 py-2 rounded flex items-center gap-2">
                    <FaPlus /> Add Bank Account
                  </button>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold">HDFC Bank</h4>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                        <FaStar className="text-gray-500 text-xs" /> Default
                      </span>
                    </div>
                    <p className="text-gray-700">John Doe</p>
                    <p className="text-gray-500 text-sm">
                      ****5521 • HDFC0001234
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 text-lg">
                    <button title="Edit" className="hover:text-green-600">
                      <FaEdit />
                    </button>
                    <button title="Delete" className="hover:text-red-600">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">UPI IDs</h3>
                  <button className="bg-[#abd28f] hover:bg-[#82b85c] text-[#3d3d3d] hover:text-white  duration-300 px-4 py-2 rounded flex items-center gap-2">
                    <FaPlus /> Add UPI ID
                  </button>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h4 className="font-bold mb-1">john.doe@paytm</h4>
                    <p className="text-green-600 flex items-center text-sm gap-1">
                      <FaCheckCircle className="text-green-500" /> Verified
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 text-lg">
                    <button title="Edit" className="hover:text-green-600">
                      <FaEdit />
                    </button>
                    <button title="Delete" className="hover:text-red-600">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {walletTab === "referralearnings" && (
        <div>
          <div className="p-6 bg-gray-50 min-h-screen space-y-6">
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <p className="text-sm text-gray-500">Total Referrals</p>
                <p className="text-2xl font-bold text-gray-800">42</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="text-sm text-gray-500">Active Referrals</p>
                <p className="text-2xl font-bold text-gray-800">3</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="text-sm text-gray-500">Earnings per Referral</p>
                <p className="text-2xl font-bold text-green-700">₹150</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="text-sm text-gray-500">Total Earned</p>
                <p className="text-2xl font-bold text-green-700">₹2,500</p>
              </div>
            </div>

            {/* Referral Code and How It Works */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Referral Code */}
              <div className="bg-[#abd28f57] border border-green-200 rounded p-4 space-y-4">
                <h2 className="font-semibold text-green-700 text-lg">
                  📤 Your Referral Code
                </h2>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value="PARTNER2024"
                    readOnly
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                  <button
                    onClick={handleCopy}
                    className="bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"
                  >
                    <FaCopy />
                  </button>
                </div>
                <button className="bg-[#abd28f] hover:bg-[#82b85c] text-[#3d3d3d] hover:text-white duration-300 w-full py-2 rounded flex justify-center items-center gap-2">
                  <FaShareAlt /> Share Referral Link
                </button>
                <p className="text-sm text-gray-500">
                  Share your code and earn ₹150 for each successful referral!
                </p>
              </div>

              {/* How It Works */}
              <div className="bg-white border rounded p-4">
                <h3 className="font-semibold text-lg mb-4">How it Works</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <strong>Share your code</strong>
                      <p className="text-sm text-gray-600">
                        Send your referral code to friends
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <strong>They join & purchase</strong>
                      <p className="text-sm text-gray-600">
                        Friends use your code to buy courses
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <strong>You earn rewards</strong>
                      <p className="text-sm text-gray-600">
                        Get paid for each successful referral
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Referral History */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Referral History</h3>

              {/* Tabs */}
              <div className="flex gap-3 bg-gray-100 p-2 rounded mb-4 ">
                {["all", "active", "inactive"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-1 rounded ${
                      selectedTab === tab
                        ? "bg-white text-black shadow"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {tab === "all"
                      ? `All (${referralHistory.length})`
                      : `${tab.charAt(0).toUpperCase() + tab.slice(1)} (${
                          referralHistory.filter((r) => r.status === tab).length
                        })`}
                  </button>
                ))}
              </div>

              {/* Referral List */}
              <div className="space-y-4">
                {filteredReferrals.map((r, i) => (
                  <div
                    key={i}
                    className="bg-white border rounded p-4 flex justify-between items-center border-[#a2a2a2] shadow-md"
                  >
                    <div>
                      <p className="font-medium">{r.name}</p>
                      <p className="text-sm text-gray-600">{r.email}</p>
                      <p className="text-sm text-gray-500">
                        Course: {r.course}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-700">
                        ₹{r.amount}
                      </p>
                      <span
                        className={`text-xs capitalize px-2 py-1 rounded-full ${
                          r.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {r.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{r.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({
  title,
  value,
  growth,
  icon,
  valueColor = "text-gray-900",
}) => (
  <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
    <div className="flex justify-between items-center">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <div className="text-gray-500">{icon}</div>
    </div>
    <div className={`text-xl font-bold ${valueColor}`}>{value}</div>
    {growth && <p className="text-green-600 text-xs">{growth}</p>}
  </div>
);

const Transaction = ({ title, refId, status, amount, positive = false }) => (
  <div className="flex justify-between items-center bg-gray-50 p-4 my-3 rounded-md border  border-[#a2a2a2] shadow-md ">
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-gray-500 text-xs">Ref: {refId}</p>
    </div>
    <div className="text-right">
      <p
        className={`font-semibold ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {amount}
      </p>
      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded mt-1 inline-block">
        {status}
      </span>
    </div>
  </div>
);

const DollarIcon = () => (
  <div className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold text-sm">
    $
  </div>
);

export default Finance;
