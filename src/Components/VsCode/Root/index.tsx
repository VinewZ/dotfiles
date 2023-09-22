import { ReactNode } from "react";

export function VsCodeRoot({children}: {children: ReactNode}) {
  return (
  <div
    style={{
      display: 'grid',
      gridTemplateRows: '32px 1fr 24px',
      gridTemplateColumns: '300px 980px',
      gridTemplateAreas: `
        "topbar topbar"
        "sidebar content"
        "footer footer"
      `,
    }}
  >
    {children}
  </div>
  );
}