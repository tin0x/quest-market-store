import React from 'react';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useNavigate } from 'react-router-dom';

const InvalidPathPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full">
      <QueryPlaceholder type="invalidPath" onClick={() => navigate('/')} />
    </div>
  );
};

export default InvalidPathPage;
