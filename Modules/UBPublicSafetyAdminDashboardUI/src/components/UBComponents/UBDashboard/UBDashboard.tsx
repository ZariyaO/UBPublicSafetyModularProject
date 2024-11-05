import React from "react";
import UBCardDataStats from "../../../common/UBCardDataStats/UBCardDataStats";
import UBVisitorsAnalyticsChart from "../../../common/UBVisitorsAnalyticsChart/UBVisitorsAnalyticsChart";
import UBChats from "../../../common/UBChats/UBChats";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupIcon from "@mui/icons-material/Group";

export const UBDashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <UBCardDataStats title="Total views" total="3.456" rate="0.43%" levelUp>
          <RemoveRedEyeIcon />
        </UBCardDataStats>
        <UBCardDataStats
          title="Total messages sent"
          total="452"
          rate="4.35%"
          levelUp
        >
          <MarkEmailReadIcon />
        </UBCardDataStats>
        <UBCardDataStats title="Total Reports" total="250" rate="2.59%" levelUp>
          <AssessmentIcon />
        </UBCardDataStats>
        <UBCardDataStats title="Total Users" total="36" rate="0.95%" levelDown>
          <GroupIcon />
        </UBCardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 md:col-span-7">
          <div className="">
            <UBVisitorsAnalyticsChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="">
            <UBChats />
          </div>
        </div>
      </div>
    </>
  );
};
