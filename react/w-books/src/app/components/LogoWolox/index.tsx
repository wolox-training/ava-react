import React from 'react';

import imgLogoWolox from '../../assets/img/logo-wolox.png';

interface LogoWoloxProps {
  className?: string;
}

function LogoWolox({ className }: LogoWoloxProps) {
  return <img src={imgLogoWolox} alt="The logo of Wolox" className={className} />;
}

export default LogoWolox;
