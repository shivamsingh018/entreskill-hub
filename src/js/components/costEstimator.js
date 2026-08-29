// EntreSkill Hub - Financial Cost Estimator Component

export function renderCostEstimator(state) {
  const estimatorState = state.estimator || {
    equipmentCost: 12000,
    materialsCostPerUnit: 45,
    packagingCostPerUnit: 8,
    sellingPricePerUnit: 100,
    monthlyFixedOverhead: 3500,
    expectedMonthlyUnits: 300
  };

  const directCostPerUnit = estimatorState.materialsCostPerUnit + estimatorState.packagingCostPerUnit;
  const grossProfitPerUnit = estimatorState.sellingPricePerUnit - directCostPerUnit;
  const totalMonthlyRevenue = estimatorState.expectedMonthlyUnits * estimatorState.sellingPricePerUnit;
  const totalMonthlyVariableCost = estimatorState.expectedMonthlyUnits * directCostPerUnit;
  const netMonthlyProfit = totalMonthlyRevenue - totalMonthlyVariableCost - estimatorState.monthlyFixedOverhead;
  const breakEvenUnits = grossProfitPerUnit > 0 ? Math.ceil(estimatorState.monthlyFixedOverhead / grossProfitPerUnit) : 0;
  const profitMarginPercent = totalMonthlyRevenue > 0 ? Math.round((netMonthlyProfit / totalMonthlyRevenue) * 100) : 0;

  return `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div class="text-center mb-8">
        <span class="px-3 py-1 rounded-full badge-emerald text-xs font-semibold uppercase tracking-wider mb-2 inline-block">Interactive Calculator</span>
        <h1 class="text-3xl font-extrabold font-heading text-white">Micro-Business Cost & Profit Estimator</h1>
        <p class="text-sm text-slate-400 mt-1">Adjust the sliders below to calculate startup capital, break-even sales, and projected monthly net profit.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Input Controls Form -->
        <div class="glass-card p-6 space-y-5">
          <h2 class="text-lg font-bold text-white mb-4 border-b border-slate-700/60 pb-2">Financial Input Parameters</h2>

          <!-- Equipment Cost -->
          <div>
            <div class="flex justify-between text-xs font-semibold mb-1">
              <span class="text-slate-300">Initial Equipment & Tools (₹)</span>
              <span class="text-indigo-400">₹${estimatorState.equipmentCost.toLocaleString()}</span>
            </div>
            <input type="range" min="2000" max="100000" step="1000" value="${estimatorState.equipmentCost}" id="calc-equipment" class="w-full accent-indigo-500 bg-slate-800 rounded-lg">
          </div>

          <!-- Raw Materials per unit -->
          <div>
            <div class="flex justify-between text-xs font-semibold mb-1">
              <span class="text-slate-300">Raw Material Cost per Unit (₹)</span>
              <span class="text-indigo-400">₹${estimatorState.materialsCostPerUnit}</span>
            </div>
            <input type="range" min="5" max="500" step="5" value="${estimatorState.materialsCostPerUnit}" id="calc-materials" class="w-full accent-indigo-500 bg-slate-800 rounded-lg">
          </div>

          <!-- Packaging per unit -->
          <div>
            <div class="flex justify-between text-xs font-semibold mb-1">
              <span class="text-slate-300">Packaging / Delivery Cost per Unit (₹)</span>
              <span class="text-indigo-400">₹${estimatorState.packagingCostPerUnit}</span>
            </div>
            <input type="range" min="1" max="100" step="1" value="${estimatorState.packagingCostPerUnit}" id="calc-packaging" class="w-full accent-indigo-500 bg-slate-800 rounded-lg">
          </div>

          <!-- Selling Price per unit -->
          <div>
            <div class="flex justify-between text-xs font-semibold mb-1">
              <span class="text-slate-300">Selling Price per Unit (₹)</span>
              <span class="text-emerald-400">₹${estimatorState.sellingPricePerUnit}</span>
            </div>
            <input type="range" min="20" max="1000" step="10" value="${estimatorState.sellingPricePerUnit}" id="calc-price" class="w-full accent-emerald-500 bg-slate-800 rounded-lg">
          </div>

          <!-- Monthly Fixed Overheads -->
          <div>
            <div class="flex justify-between text-xs font-semibold mb-1">
              <span class="text-slate-300">Monthly Overheads (LPG, Power, Rent) (₹)</span>
              <span class="text-indigo-400">₹${estimatorState.monthlyFixedOverhead.toLocaleString()}</span>
            </div>
            <input type="range" min="500" max="30000" step="500" value="${estimatorState.monthlyFixedOverhead}" id="calc-overhead" class="w-full accent-indigo-500 bg-slate-800 rounded-lg">
          </div>

          <!-- Target Monthly Sales Volume -->
          <div>
            <div class="flex justify-between text-xs font-semibold mb-1">
              <span class="text-slate-300">Target Monthly Sales Volume (Units)</span>
              <span class="text-amber-400">${estimatorState.expectedMonthlyUnits} Units</span>
            </div>
            <input type="range" min="20" max="2000" step="20" value="${estimatorState.expectedMonthlyUnits}" id="calc-units" class="w-full accent-amber-500 bg-slate-800 rounded-lg">
          </div>
        </div>

        <!-- Calculated Summary Results Panel -->
        <div class="space-y-6">
          <!-- Net Profit Card -->
          <div class="glass-card p-6 bg-gradient-to-br from-slate-900 to-indigo-950/60 border-indigo-500/40">
            <div class="text-xs text-indigo-300 uppercase tracking-wider font-semibold mb-1">Projected Monthly Net Profit</div>
            <div class="text-3xl sm:text-4xl font-extrabold font-heading ${netMonthlyProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}">
              ₹${netMonthlyProfit.toLocaleString()}
            </div>
            <div class="text-xs text-slate-400 mt-2 flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md ${profitMarginPercent >= 20 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'} font-semibold">
                ${profitMarginPercent}% Net Margin
              </span>
              <span>Based on ${estimatorState.expectedMonthlyUnits} monthly sales</span>
            </div>
          </div>

          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-2 gap-4">
            <div class="glass-card p-4">
              <div class="text-xs text-slate-400">Total Monthly Revenue</div>
              <div class="text-xl font-bold text-white mt-1">₹${totalMonthlyRevenue.toLocaleString()}</div>
            </div>

            <div class="glass-card p-4">
              <div class="text-xs text-slate-400">Direct Cost per Unit</div>
              <div class="text-xl font-bold text-slate-200 mt-1">₹${directCostPerUnit}</div>
            </div>

            <div class="glass-card p-4">
              <div class="text-xs text-slate-400">Gross Margin per Unit</div>
              <div class="text-xl font-bold text-emerald-400 mt-1">₹${grossProfitPerUnit}</div>
            </div>

            <div class="glass-card p-4">
              <div class="text-xs text-slate-400">Monthly Break-Even</div>
              <div class="text-xl font-bold text-amber-400 mt-1">${breakEvenUnits} Units</div>
            </div>
          </div>

          <!-- Financial Advice Box -->
          <div class="glass-card p-5 bg-slate-800/60 border-l-4 border-l-amber-500 text-xs space-y-1.5">
            <div class="font-bold text-amber-400 flex items-center gap-1.5">
              <span>💡 Financial Advisor Insight:</span>
            </div>
            <p class="text-slate-300">
              ${netMonthlyProfit > 10000 
                ? 'Great viability! Your projected profit margin is healthy. Consider setting aside 15% of profits into a working capital reserve.' 
                : 'Marginal viability. Try negotiating bulk discounts on raw materials or increasing unit prices slightly to reach at least a 35% margin.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}
