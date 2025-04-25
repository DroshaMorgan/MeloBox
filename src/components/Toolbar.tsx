import type { ReactNode } from 'react';

import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

interface ToolbarProps {
  back?: boolean | string;
  extra?: ReactNode;
  title: ReactNode;
}

const Toolbar = memo<ToolbarProps>(({ back, extra, title }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-6 border-b px-6">
        <div className="flex items-center gap-x-4 py-4 text-lg">
          {/* {back && (
            <Link className="flex items-stretch gap-x-4 opacity-80 hover:underline" to="..">
              <span>{typeof back === 'string' ? back : 'Назад'}</span>
              <hr className="h-auto border-r" />
            </Link>
          )} */}
          {back && (
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-stretch gap-x-4 opacity-80 hover:underline"
            >
              <span>{typeof back === 'string' ? back : 'Назад'}</span>
              <hr className="h-auto border-r" />
            </button>
          )}

          <h1 className="max-w-prose text-pretty">{title}</h1>
        </div>

        {extra}
      </div>
    </>
  );
});

export default Toolbar;
