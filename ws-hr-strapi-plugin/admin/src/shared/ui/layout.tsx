import { ReactNode } from 'react';

export const Layout = ( { children } : { children: ReactNode }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      padding: '2rem',
    }}>
      {children}
    </div>
  );
};
