import ReactDOM from "react-dom";
import * as React from "react";
import styled from "styled-components";

export interface SidebarProps {
  isOpen: boolean;
  bg: string;
}
export function Sidebar(props: React.PropsWithChildren<SidebarProps>) {
  const { isOpen, bg } = props;

  const el = React.useRef(document.createElement("div"));
  const sidebarRoot = document.getElementById("sidebar-root");

  React.useEffect(() => {
    const _el = el.current;
    sidebarRoot?.appendChild(_el);

    return () => {
      sidebarRoot?.removeChild(_el);
    };
  }, [sidebarRoot]);

  if (!isOpen) return null;

  const sidebar = (
    <SidebarContainer data-testid="sidebar">
      <SidebarContent $bg={bg}>{props.children}</SidebarContent>
    </SidebarContainer>
  );

  return ReactDOM.createPortal(sidebar, el.current);
}

const SidebarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
`;

const SidebarContent = styled.div<{ $bg?: string }>`
  width: 250px;
  height: 100%;
  max-width: 100%;
  position: absolute;
  left: 0%;
  top: 0%;
  bottom: 0%;
  background: ${(props) => props.$bg};
  overflow-y: auto;
`;
