import React from 'react';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useNavigate } from 'react-router-dom';

const ErrorBoundaryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-dvh">
      <QueryPlaceholder type="errorBoundary" onClick={() => navigate('/')} />
    </div>
  );
};

export default ErrorBoundaryPage;
