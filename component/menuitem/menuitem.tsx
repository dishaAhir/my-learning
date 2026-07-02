import styles from "./MenuItems.module.scss";

interface Props {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  isExpanded: boolean;
  onClick?: () => void;
}

export default function MenuItems({
  icon,
  title,
  active,
  isExpanded,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`
    ${styles.item}
    ${active ? styles.active : ""}
    ${!isExpanded ? styles.collapsedItem : ""}
  `}
    >
      {icon}
      <span
        style={{
          opacity: isExpanded ? 1 : 0,
          transition: "opacity 0.2s ease",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </span>
    </div>
  );
}
