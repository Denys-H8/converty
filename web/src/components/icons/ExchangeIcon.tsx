import {memo, SVGProps, useMemo} from 'react';
import theme from '../../theme/theme';
interface ExchangeIconProps extends SVGProps<SVGSVGElement> {
  isActive: boolean;
}

const ExchangeIcon: React.FC<ExchangeIconProps> = ({isActive, ...props}) => {
  const color = useMemo<string>(
    () => (isActive ? theme.colors.text.black : theme.colors.text.gray),
    [isActive],
  );

  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M9 17h10M5 17h.002v.002H5V17ZM9 12h10M5 12h.002v.002H5V12ZM9 7h10M5 7h.002v.002H5V7Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(ExchangeIcon);
