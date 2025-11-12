"use client";

import { useState, useMemo } from "react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(2);
  const [tenure, setTenure] = useState(2);

  const calculateEMI = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfMonths = tenure * 12;

    if (monthlyRate === 0) {
      const emi = principal / numberOfMonths;
      const totalAmount = emi * numberOfMonths;
      return {
        emi: emi,
        totalAmount: totalAmount,
      };
    }

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
      (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

    const totalAmount = emi * numberOfMonths;

    return {
      emi: emi,
      totalAmount: totalAmount,
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const loanAmountMarkers = [
    { value: 2000000, label: "20L" },
    { value: 4000000, label: "40L" },
    { value: 6000000, label: "60L" },
    { value: 8000000, label: "80L" },
    { value: 10000000, label: "1C" },
    { value: 12000000, label: "1.2C" },
    { value: 14000000, label: "1.4C" },
    { value: 16000000, label: "1.6C" },
    { value: 18000000, label: "1.8C" },
  ];

  const interestMarkers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  const tenureMarkers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#f5f0e8] overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="space-y-8">
            <h2
              className="text-[#2d5016] text-4xl md:text-5xl lg:text-6xl font-serif"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Calculate Your EMI
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  className="block text-[#2d5016] text-base md:text-lg font-medium mb-3"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Loan Amount
                </label>
                <div className="flex gap-2 mb-4">
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) =>
                      setLoanAmount(Math.max(0, Number(e.target.value)))
                    }
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white text-[#1a3d0f] font-medium focus:outline-none focus:ring-2 focus:ring-[#1a3d0f] border border-[#e8ddd0]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                  <button
                    className="px-6 py-3 bg-[#1a3d0f] hover:bg-[#0f2510] text-white rounded-lg font-medium transition-colors duration-300"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    ₹
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="2000000"
                    max="18000000"
                    step="200000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-1 sm:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #1a3d0f 0%, #1a3d0f ${
                        ((loanAmount - 2000000) / (18000000 - 2000000)) * 100
                      }%, #e5e5e5 ${
                        ((loanAmount - 2000000) / (18000000 - 2000000)) * 100
                      }%, #e5e5e5 100%)`,
                    }}
                  />
                  <div
                    className="flex justify-between mt-2 text-xs text-[#5a6b4a]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {loanAmountMarkers.map((marker) => (
                      <span key={marker.value}>{marker.label}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label
                  className="block text-[#2d5016] text-base md:text-lg font-medium mb-3"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Rate Of Interest
                </label>
                <div className="flex gap-2 mb-4">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(
                        Math.max(0, Math.min(20, Number(e.target.value)))
                      )
                    }
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white text-[#1a3d0f] font-medium focus:outline-none focus:ring-2 focus:ring-[#1a3d0f] border border-[#e8ddd0]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                  <button
                    className="px-6 py-3 bg-[#1a3d0f] hover:bg-[#0f2510] text-white rounded-lg font-medium transition-colors duration-300"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    %
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="2"
                    max="20"
                    step="2"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-1 sm:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #1a3d0f 0%, #1a3d0f ${
                        ((interestRate - 2) / (20 - 2)) * 100
                      }%, #e5e5e5 ${
                        ((interestRate - 2) / (20 - 2)) * 100
                      }%, #e5e5e5 100%)`,
                    }}
                  />
                  <div
                    className="flex justify-between mt-2 text-xs text-[#5a6b4a]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {interestMarkers.map((marker) => (
                      <span key={marker}>{marker}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label
                  className="block text-[#2d5016] text-base md:text-lg font-medium mb-3"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Tenure
                </label>
                <div className="flex gap-2 mb-4">
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) =>
                      setTenure(
                        Math.max(0, Math.min(20, Number(e.target.value)))
                      )
                    }
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white text-[#1a3d0f] font-medium focus:outline-none focus:ring-2 focus:ring-[#1a3d0f] border border-[#e8ddd0]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                  <button
                    className="px-6 py-3 bg-[#1a3d0f] hover:bg-[#0f2510] text-white rounded-lg font-medium transition-colors duration-300"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Yrs
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="2"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-1 sm:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #1a3d0f 0%, #1a3d0f ${
                        (tenure / 20) * 100
                      }%, #e5e5e5 ${(tenure / 20) * 100}%, #e5e5e5 100%)`,
                    }}
                  />
                  <div
                    className="flex justify-between mt-2 text-xs text-[#5a6b4a]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {tenureMarkers.map((marker) => (
                      <span key={marker}>{marker}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full bg-[#1a3d0f] rounded-lg p-6 sm:p-8 text-white shadow-lg">
              <div className="space-y-6">
                <div>
                  <p
                    className="text-sm opacity-90 mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Total Amount
                  </p>
                  <p
                    className="text-3xl md:text-4xl lg:text-5xl font-bold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {formatCurrency(calculateEMI.totalAmount)}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <p
                    className="text-sm opacity-90 mb-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Your EMI
                  </p>
                  <p
                    className="text-xl md:text-2xl lg:text-3xl font-semibold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {formatCurrency(calculateEMI.emi)} per month
                  </p>
                </div>

                <div className="space-y-3 text-sm sm:text-base md:text-lg pt-2">
                  <div className="flex justify-between">
                    <span
                      className="opacity-90"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Loan Amount
                    </span>
                    <span
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span
                      className="opacity-90"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Term
                    </span>
                    <span
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {tenure} years
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span
                      className="opacity-90"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Interest Rate
                    </span>
                    <span
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {interestRate}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
