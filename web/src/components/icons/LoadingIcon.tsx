import {memo} from 'react';

const LoadingIcon = () => {
  return (
    <svg
      version="1.1"
      id="L9"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 0 0">
      <rect x="20" y="50" width="8" height="30" fill="#0F4264">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="35" y="50" width="8" height="30" fill="#0F4264">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="50" y="50" width="8" height="30" fill="#0F4264">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

export default memo(LoadingIcon);
