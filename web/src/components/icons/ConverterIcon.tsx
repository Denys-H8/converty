import {SVGProps, memo, useMemo} from 'react';
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
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M10 17a1 1 0 1 0 0-2v2Zm-5-1v-1a1 1 0 0 0-1 1h1Zm-1 5a1 1 0 1 0 2 0H4Zm6-6H5v2h5v-2Zm-6 1v5h2v-5H4Z"
        fill={color}
      />
      <path
        d="M19.418 14.997a8 8 0 0 1-14.332 1.027"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7a1 1 0 1 0 0 2V7Zm5 1v1a1 1 0 0 0 1-1h-1Zm1-5a1 1 0 1 0-2 0h2Zm-6 6h5V7h-5v2Zm6-1V3h-2v5h2Z"
        fill={color}
      />
      <path
        d="M4.583 9.003a8 8 0 0 1 14.331-1.027"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(SvgComponent);
