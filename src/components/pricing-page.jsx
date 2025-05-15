'use client';
import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] text-white p-4">
      <div className="w-full max-w-5xl p-8 rounded-xl bg-[#1a1a1a] relative">
        <button className="absolute top-4 right-4 bg-[#ff3366] rounded-full p-1.5 text-white">
          <X size={20} />
        </button>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Upgrade to Unlock Coursora AI Today!</h1>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className={`text-sm ${billingCycle === "monthly" ? "text-white" : "text-gray-400"}`}>
              Monthly
            </span>
            <Switch 
              checked={billingCycle === "yearly"}
              onCheckedChange={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="data-[state=checked]:bg-[#ff3366]"
            />
            <span className={`text-sm flex items-center gap-2 ${billingCycle === "yearly" ? "text-white" : "text-gray-400"}`}>
              Yearly
              <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-md">Save 50%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pro Plan */}
          <div className="bg-[#111] rounded-xl p-6 border border-gray-800">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">Pro</h2>
              <span className="bg-[#2a2a2a] text-xs font-medium px-2 py-1 rounded-md text-white">Popular</span>
            </div>
            <p className="text-gray-400 mb-4">Unlock features and unlimited AI</p>

            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-bold">$10</span>
              <div className="text-gray-400 mb-1">
                <div>per month</div>
                <div>billed annually</div>
              </div>
            </div>

            <Button className="w-full bg-[#ff3366] hover:bg-[#ff1a53] text-white font-medium py-6 mb-6">
              Buy Pro
            </Button>

            <div>
              <div className="mb-2 font-medium">What's included:</div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[#ff3366] mt-0.5" />
                  <span>Unlimited AI Agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[#ff3366] mt-0.5" />
                  <span>Unlimited Automations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[#ff3366] mt-0.5" />
                  <span>2 Users Included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[#ff3366] mt-0.5" />
                  <span>10 Workspaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[#ff3366] mt-0.5" />
                  <span>Unlimited AI Knowledge & Files</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[#ff3366] mt-0.5" />
                  <span>Web Scraper, Search & AI Utilities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Plan */}
          <div className="bg-[#111] rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-2">Team</h2>
            <p className="text-gray-400 mb-4">Scale your teams and AI workflows</p>

            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-bold">$50</span>
              <div className="text-gray-400 mb-1">
                <div>per month</div>
                <div>billed annually</div>
              </div>
            </div>

            <Button className="w-full bg-[#ff3366] hover:bg-[#ff1a53] text-white font-medium py-6 mb-6">
              Buy Team
            </Button>

            <div>
              <div className="mb-2 font-medium flex items-center">
                <span className="text-green-400">Everything in </span>
                <span className="ml-1">Pro</span>
                <span className="text-gray-400 ml-1">, and:</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-400 mt-0.5" />
                  <span>Unlimited AI Teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-400 mt-0.5" />
                  <span>Custom Tools & Workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-400 mt-0.5" />
                  <span>Unlimited Users</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-400 mt-0.5" />
                  <span>Unlimited Workspaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-400 mt-0.5" />
                  <span>Custom Domains & Branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-400 mt-0.5" />
                  <span>Advanced Team Permissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-400 mt-0.5" />
                  <span>Single Sign-On (SSO) & API Access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
