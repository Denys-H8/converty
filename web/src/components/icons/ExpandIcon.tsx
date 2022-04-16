import React, {SVGProps, memo} from 'react';

const ExpandIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height="24" width="32" {...props}>
    <path
      d="M14.293 19.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM8 12l-.707-.707a1 1 0 0 0 0 1.414L8 12Zm7.707-6.293a1 1 0 0 0-1.414-1.414l1.414 1.414Zm0 12.586-7-7-1.414 1.414 7 7 1.414-1.414Zm-7-5.586 7-7-1.414-1.414-7 7 1.414 1.414ZM22.293 19.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM16 12l-.707-.707a1 1 0 0 0 0 1.414L16 12Zm7.707-6.293a1 1 0 0 0-1.414-1.414l1.414 1.414Zm0 12.586-7-7-1.414 1.414 7 7 1.414-1.414Zm-7-5.586 7-7-1.414-1.414-7 7 1.414 1.414Z"
      fill="#202020"
    />
  </svg>
);

export default memo(ExpandIcon);
