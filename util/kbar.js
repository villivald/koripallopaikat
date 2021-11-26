import { KBarResults, useMatches, NO_GROUP } from "kbar";
import { useMemo } from "react";

const RenderResults = () => {
  const groups = useMatches();
  const flattened = useMemo(
    () =>
      groups.reduce((acc, curr) => {
        acc.push(curr.name);
        acc.push(...curr.actions);
        return acc;
      }, []),
    [groups]
  );

  return (
    <KBarResults
      items={flattened.filter((i) => i !== NO_GROUP)}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div>Navigation</div>
        ) : (
          <div className={`kbar ${active ? "activeBar" : ""}`}>
            <div className="kbar-item">
              {item.name}
              <p>{item.keywords}</p>
            </div>
            <span>{item.shortcut}</span>
          </div>
        )
      }
    />
  );
};

export default RenderResults;
