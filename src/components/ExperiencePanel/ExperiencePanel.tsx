import { ArrowRightIcon } from "../../components/Icons";

interface IProps {
  logo: string;
  title: string;
  description: string;
  users: number;
}

function ExperiencePanel({ logo, title, description, users }: IProps) {
  return (
    <div className="flex">
      <img src={logo} alt="panel-logo" className="mr-3" />
      <div>
        <div className="text-text-200 font-semibold text-base mb-1">
          {title}
        </div>
        <div className="text-text-300 font-medium text-xs">{description}</div>
        <div className="text-blue-100 text-xs font-medium">+{users} users</div>
      </div>
      <ArrowRightIcon className="ml-auto self-center" />
    </div>
  );
}

export default ExperiencePanel;
