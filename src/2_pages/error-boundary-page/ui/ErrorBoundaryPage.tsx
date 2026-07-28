import React from 'react';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useNavigate } from 'react-router-dom';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';

const ErrorBoundaryPage: React.FC = () => {
  useToggleTitle('Critical Error');
  const navigate = useNavigate();

  return (
    <div className="h-dvh">
      <QueryPlaceholder type="errorBoundary" onClick={() => navigate('/')} />
    </div>
  );
};

export default ErrorBoundaryPage;
