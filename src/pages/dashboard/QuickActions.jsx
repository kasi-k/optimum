import React, { useState } from "react";
import { LuLoaderCircle } from "react-icons/lu";
import { CircleCheck } from 'lucide-react';
import { FolderSymlink } from 'lucide-react';
import {
  FaChartLine,
  FaUserCheck,
  FaUsers,
  FaMoneyBill,
  FaStar,
} from "react-icons/fa";
import IndicatorCard from "./IndicatorCard";
import CampaignRun from "./quick actions/CampaignRun";

const QuickActions = () => {

  const [campaignRunModal,setCampaignRunModal] = useState()
  return (
    <>
    <div className="grid gap-4">
      <div onClick = {() =>setCampaignRunModal(true)}>
      <IndicatorCard
        icon={<LuLoaderCircle size={24} />}
        label="Total Campaign Run"
        value={85}
        progress={85}
      />
      </div>
      <IndicatorCard
        icon={<CircleCheck />}
        label="Total Leads Generated"
        value={65}
        progress={65}
      />
      <IndicatorCard
        icon={<FolderSymlink />}
        label="Total Appointments"
        value={72}
        progress={72}
      />
      <IndicatorCard
        icon={<FaUsers  size={24}/>}
        label="Total Patients"
        value={66}
        progress={66}
      />
      <IndicatorCard
        icon={<FaMoneyBill size={24} />}
        label="Total Revenue"
        value={"₹45K"}
        progress={80}
      />
      <IndicatorCard
        icon={<FaStar size={24} />}
        label="Google Ratings"
        value={4.8}
        progress={95}
      />
    </div>
    {campaignRunModal && <CampaignRun onclose={()=>setCampaignRunModal(false)}/>}
    </>
  );
};
export default QuickActions;
