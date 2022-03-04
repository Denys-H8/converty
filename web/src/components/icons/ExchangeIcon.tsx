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
    <svg width={32} height={32} fill="none" {...props}>
      <path
        d="M12 22.667h13.333M6.667 22.667h.002v.002h-.002v-.002ZM12 16h13.333M6.667 16h.002v.003h-.002V16ZM12 9.333h13.333M6.667 9.333h.002v.003h-.002v-.003Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(ExchangeIcon);
