import { Children } from "react";

const findByType = (children, component) => {
  const result = [];
  /* This is the array of result since Article can have multiple times the same sub-component */
  const type = component.type || component.displayName || component.name;
  /* We can store the actual name of the component through the displayName or name property of our sub-component */
  Children.forEach(children, child => {
    const childType =
      child &&
      child.type &&
      (child.type.type || child.type.displayName || child.type.name);

    if (type === childType) {
      result.push(child);
    }
  });
  /* Then we go through each React children, if one of matches the name of the sub-component we’re looking for we put it in the result array */
  return result;
};

export default findByType;