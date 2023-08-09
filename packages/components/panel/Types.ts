export interface PanelProps {
  items?: PanelItem[];
  label: string;
  activeListClassName?: string;
  handleClick?: (data: any) => void;
  hasChildren?: boolean;
  href?: string;
}

export interface PanelItem {
  title?: string;
  href?: string;
  hasArrow?: boolean;
  desc?: string;
}
