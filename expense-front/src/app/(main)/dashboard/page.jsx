"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import axios from "axios";
import { apiUrl } from "../../../utils/util";
import { toast } from "react-toastify";
import BarChart from "@/app/components/dashboard/barChart";
import DoughnutChart from "@/app/components/dashboard/doughnut";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transaction, setTransaction] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);

  const fetchUserTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/record`);
      console.log("dd", res.data);
      setTransaction(res.data.info);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };
  const getCardInfo = async () => {
    try {
      console.log("ST", apiUrl);
      const res = await axios.get(`${apiUrl}/record/info`);
      console.log("ST", res.data);
      setCardInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    fetchUserTransactions();
    getCardInfo();
  }, [user]);
  console.log("tr", transaction);
  return (
    <div className="bg-gray-100 pt-8">
      <div>
        <div className="flex justify-center">
          <div className="flex gap-6">
            <div className="w-[384px] h-[216px] bg-[#0166FF] rounded-[18px]">
              <div className="py-6 pl-4 flex flex-col gap-20">
                <img
                  className="w-[80.35px] h-[29.86px]"
                  src="/cardlogo.png"
                  alt=""
                />
                <div>
                  <p className="text-[#FFFFFF]">cash</p>
                  <div className="flex gap-60">
                    <p className="text-[#FFFFFF]">10,000,00</p>
                    <img src="/Union.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[384px] h-[216px] rounded-[18px] border">
              <div className="h-[56px] border-b-[1px] flex items-center">
                <div className="pl-5 flex items-center gap-2">
                  <img src="/dotg.png" alt="" />
                  <p>Your income</p>
                </div>
              </div>
              <div className="flex flex-col pl-4 gap-4 pt-3">
                <div className="font-semibold text-4xl">
                  {cardInfo?.income.sum}
                </div>
                <div className="text-[#64748B]">Your Income Amount</div>
                <div className="flex items-center">
                  <img src="/up.png" alt="" />
                  <div>32% from last month</div>
                </div>
              </div>
            </div>
            <div className="w-[384px] h-[216px] rounded-[18px] border">
              <div className="h-[56px] border-b-[1px] flex items-center">
                <div className="pl-5 flex items-center gap-2">
                  <img src="/dotb.png" alt="" />
                  <p>Total expenses</p>
                </div>
              </div>
              <div className="flex flex-col pl-4 gap-4 pt-3">
                <div className="font-semibold text-4xl">
                  -{cardInfo?.expense.sum}
                </div>
                <div className="text-[#64748B]">Your expence Amount</div>
                <div className="flex items-center">
                  <img src="/down.png" alt="" />
                  <div>32% from last month</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 justify-center">
          <div className="w-[588px] h-[410px] border rounded-[18px] mt-6">
            <p className="h-[56px] border-b-[1px]  flex items-center pl-5 font-semibold">
              Income - Expense
            </p>
            <div>
              <BarChart />
            </div>
          </div>
          <div className="w-[588px] h-[410px] border rounded-[18px] mt-6">
            <p className="h-[56px] border-b-[1px] flex items-center pl-5  font-semibold">
              Income - Expense
            </p>
            <div>
              <DoughnutChart />
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <div className="w-[1200px] rounded-xl border">
            <div className="border-b-[1px] py-4 pl-4 font-semibold">
              Last Records
            </div>
            {transaction?.map((tr) => {
              return (
                <div className="flex py-4 pl-4 gap-4 border-t-[1px]">
                  <img src="/home.png" alt="" />
                  <div>
                    <p>{tr.name}</p>
                    <p className="text-[#6B7280] text-xs">3 hours ago</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
