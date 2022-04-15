import React, {SVGProps, memo, useMemo} from 'react';
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
    <svg fill="none" height={32} width={32} {...props}>
      <path
        d="M12 22.667h13.333M6.667 22.667h.002v.002h-.002v-.002ZM12 16h13.333M6.667 16h.002v.003h-.002V16ZM12 9.333h13.333M6.667 9.333h.002v.003h-.002v-.003Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
};

export default memo(ExchangeIcon);
