import React, {memo} from 'react';

const LoadingIcon = () => (
  <svg
    enableBackground="new 0 0 0 0"
    id="L9"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <rect fill="#0F4264" height="30" width="8" x="20" y="50">
      <animateTransform
        attributeName="transform"
        attributeType="xml"
        begin="0"
        dur="0.6s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 20; 0 0"
      />
    </rect>
    <rect fill="#0F4264" height="30" width="8" x="35" y="50">
      <animateTransform
        attributeName="transform"
        attributeType="xml"
        begin="0.2s"
        dur="0.6s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 20; 0 0"
      />
    </rect>
    <rect fill="#0F4264" height="30" width="8" x="50" y="50">
      <animateTransform
        attributeName="transform"
        attributeType="xml"
        begin="0.4s"
        dur="0.6s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 20; 0 0"
      />
    </rect>
  </svg>
);

export default memo(LoadingIcon);
