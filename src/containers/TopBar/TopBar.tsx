import styled from "styled-components";

import {
  ArrowLeftIcon,
  HomeIcon,
  AlarmIcon,
  SettingsIcon,
  CaretDownIcon,
} from "../../components/Icons";
import ProfileImg from "../../assets/images/profile.png";

const StyledTopBar = styled.div`
  height: 71px;
`;

const StyledProfile = styled.div`
  height: 45px;
`;

function TopBar() {
  return (
    <StyledTopBar className="bg-text-700 border-600 border-b flex justify-between items-center px-4 gap-4">
      <ArrowLeftIcon />
      <HomeIcon />
      <StyledProfile className="border-text-600 rounded-3xl border flex-1 pr-4 pl-2 py-2 flex items-center bg-white">
        <div className="mr-2">
          <img src={ProfileImg} alt="profile" />
        </div>
        <span className="text-100 font-semibold text-sm mr-2">
          Johndoe.near
        </span>
        <CaretDownIcon className="ml-auto" />
      </StyledProfile>
      <AlarmIcon />
      <SettingsIcon />
    </StyledTopBar>
  );
}

export default TopBar;
