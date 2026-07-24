import React from 'react';
import type { AuthWrapperProps } from '@shared/ui/auth-wrapper/types.ts';
import Image from '@shared/ui/image/Image.tsx';
import formBackground from '@shared/assets/images/form-background.webp';
import Title from '@shared/ui/title/Title.tsx';
import Button from '@shared/ui/button/Button.tsx';
import { useNavigate } from 'react-router-dom';

const AuthWrapper: React.FC<AuthWrapperProps> = ({ title, subtitle, children }) => {
  const navigate = useNavigate();

  return (
    <section className="h-full">
      <div className="flex h-full p-6">
        <div className="relative flex flex-1 flex-col items-center justify-center px-21.25">
          <Title className="mb-10 text-[48px]" type="primary">
            {title}
          </Title>
          {subtitle && <p className="text-text-primary mb-10 text-center text-[20px]">{subtitle}</p>}
          {children}
          <Button
            className="absolute bottom-0 left-0 border-none text-xl"
            type="button"
            onClick={() => navigate(-1)}
            variant="transparent"
            text="<- Back"
          />
        </div>
        <div className="h-full flex-1">
          <Image source={formBackground} type="game" alt="form-backgorund" />
        </div>
      </div>
    </section>
  );
};

export default AuthWrapper;
