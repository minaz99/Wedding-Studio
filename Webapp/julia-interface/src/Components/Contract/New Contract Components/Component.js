import React, { useState } from "react";
import { useGetComponentByTypeQuery } from "../../../services/api/componentSlice";
import { DropdownButton } from "react-bootstrap";

function Component(props) {
  const [total, setTotal] = useState(0);
  const { data, isLoading, isError, isSuccess } = useGetComponentByTypeQuery(
    { token: props.token, type: props.type },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const clickComponent = (e, compName, compID, price) => {
    if (e.target.checked) {
      props.setSelectedComponents([
        ...props.selectedComponents,
        ` ${compName}`,
      ]);
      props.setComponents([...props.components, compID]);
      setTotal(props.total + price);
      props.setTotal(props.total + price);
      props.setComponentsSelected([
        ...props.componentsSelected,
        {
          compName: compName,
          compPrice: price,
        },
      ]);
    }
    if (!e.target.checked) {
      props.setSelectedComponents(
        props.selectedComponents.filter((comp) => comp !== ` ${compName}`)
      );
      props.setComponentsSelected(
        props.componentsSelected.filter(
          (selected) => selected.compName !== compName
        )
      );
      props.setComponents(props.components.filter((id) => id !== compID));
      setTotal(total - price);
      props.setTotal(props.total - price);
    }
  };

  return (
    <DropdownButton
      variant="warning"
      id="dropdown-basic-button"
      title={props.selectedComponents}
    >
      <ul class="list-group">
        {isLoading ? (
          <div className="text-center text-blue-400 text-xl p-4">Loading</div>
        ) : isError ? (
          <div className="text-center text-red-400 text-xl p-4">
            Error loading components
          </div>
        ) : isSuccess ? (
          data.components.map((comp) => {
            return (
              <li class="list-group-item">
                {props.components.indexOf(comp.id) >= 0 ? (
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                    onChange={(e) =>
                      clickComponent(e, comp.name, comp.id, comp.price)
                    }
                    checked
                  />
                ) : (
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                    onChange={(e) =>
                      clickComponent(e, comp.name, comp.id, comp.price)
                    }
                  />
                )}
                <label class="form-check-label" for="firstCheckbox">
                  {comp.name}
                </label>
              </li>
            );
          })
        ) : (
          <div></div>
        )}
      </ul>
    </DropdownButton>
  );
}

export default Component;
