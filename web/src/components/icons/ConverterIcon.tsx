import React, {SVGProps, memo, useMemo} from 'react';
import theme from '../../theme/theme';

interface SvhProps extends SVGProps<SVGSVGElement> {
  isActive: boolean;
}

const SvgComponent: React.FC<SvhProps> = ({isActive, ...props}) => {
  const color = useMemo<string>(
    () => (isActive ? theme.colors.text.black : theme.colors.text.gray),
    [isActive],
  );

  return (
    <svg fill="none" height={32} width={32} {...props}>
      <path
        d="M13.333 22.333a1 1 0 0 0 0-2v2Zm-6.666-1v-1a1 1 0 0 0-1 1h1Zm-1 6.667a1 1 0 1 0 2 0h-2Zm7.666-7.667H6.667v2h6.666v-2Zm-7.666 1V28h2v-6.667h-2Z"
        fill={color}
      />
      <path
        d="M25.89 19.996a10.666 10.666 0 0 1-19.109 1.37"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M18.667 9.667a1 1 0 0 0 0 2v-2Zm6.666 1v1a1 1 0 0 0 1-1h-1Zm1-6.667a1 1 0 0 0-2 0h2Zm-7.666 7.667h6.666v-2h-6.666v2Zm7.666-1V4h-2v6.667h2Z"
        fill={color}
      />
      <path
        d="M6.11 12.004a10.667 10.667 0 0 1 19.109-1.37"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
};

export default memo(SvgComponent);
