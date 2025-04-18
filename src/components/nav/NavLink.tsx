import { Tooltip } from "antd";
import { memo } from "react";
import { Link } from "react-router-dom";

export const NavLink = memo<{
  path: string;
  name: string;
  description: string;
}>(({ path, name, description }) => {
  return (
    <Tooltip placement="right" title={description}>
      <Link
        className="m-4 size-8 rounded bg-primary text-center text-sm leading-8 text-slate-100"
        to={path}
      >
        {name}
      </Link>
    </Tooltip>
  );
});
