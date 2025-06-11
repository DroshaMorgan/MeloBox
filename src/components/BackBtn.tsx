import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const BackBtn = memo<{ back?: boolean | string }>(({ back }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="flex items-stretch gap-x-4 opacity-80 hover:underline"
    >
      <span>{typeof back === 'string' ? back : 'Назад'}</span>
      <hr className="h-auto border-r" />
    </button>
  );
});

export default BackBtn;
